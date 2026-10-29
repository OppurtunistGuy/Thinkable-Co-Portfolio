"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { contact, services, type ServiceKey } from "@/config/site";
import { hasEmail, hasWhatsApp, whatsappHref } from "@/lib/contact";
import { isServiceKey, parseEnquiry, type FieldErrors } from "@/lib/enquiry";

type Status = "idle" | "sending" | "sent" | "not_configured" | "failed";

const input =
  "min-h-11 rounded-[10px] border border-line bg-bg px-3.5 text-base text-text placeholder:text-muted aria-[invalid=true]:border-[#e5484d]";

export function EnquiryForm() {
  const params = useSearchParams();
  const pre = params.get("service");
  const [picked, setPicked] = useState<ServiceKey[]>(isServiceKey(pre) ? [pre] : []);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function toggle(k: ServiceKey) {
    setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const raw = {
      name: f.get("name"),
      business: f.get("business"),
      services: picked,
      project: f.get("project"),
      contact: f.get("contact"),
      deadline: f.get("deadline"),
      website: f.get("website"),
    };
    const { errors: found } = parseEnquiry(raw);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(raw),
      });
      if (res.ok) return setStatus("sent");
      const body = await res.json().catch(() => ({}));
      if (res.status === 422 && body.fields) {
        setErrors(body.fields);
        return setStatus("idle");
      }
      setStatus(body.error === "not_configured" ? "not_configured" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-4 rounded-3xl border border-line bg-card p-[clamp(22px,4vw,36px)]">
        <h2 className="font-display text-3xl font-extrabold">Got it, thank you.</h2>
        <p className="leading-[1.55] text-muted">
          Your brief is with us. You&apos;ll hear back {contact.replyTime ? `within ${contact.replyTime}` : "soon"} with a clear quote.
        </p>
        {hasWhatsApp && (
          <a href={whatsappHref(picked[0])} target="_blank" rel="noopener noreferrer" className="self-start font-bold text-text underline underline-offset-4">
            In a hurry? Message us on WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4 rounded-3xl border border-line bg-card p-[clamp(22px,4vw,36px)]">
      <Field id="name" label="Your name" error={errors.name}>
        <input id="f-name" name="name" type="text" autoComplete="name" maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} className={input} />
      </Field>
      <Field id="business" label="Business name and city">
        <input id="f-business" name="business" type="text" autoComplete="organization" maxLength={150} className={input} />
      </Field>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-sm font-bold">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const on = picked.includes(s.key);
            return (
              <button
                key={s.key}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s.key)}
                className={`min-h-11 rounded-full border-2 px-4 text-sm font-bold ${on ? "border-accent bg-accent text-on-accent" : "border-line bg-bg text-text hover:border-text"}`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <Field id="project" label="Tell us about the project" error={errors.project}>
        <textarea id="f-project" name="project" rows={4} maxLength={3000} aria-invalid={!!errors.project} aria-describedby={errors.project ? "e-project" : undefined} className={`${input} py-3`} />
      </Field>
      <Field id="contact" label="Email or WhatsApp number" error={errors.contact}>
        <input id="f-contact" name="contact" type="text" autoComplete="email" maxLength={150} aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "e-contact" : undefined} className={input} />
      </Field>
      <Field id="deadline" label="Deadline">
        <input id="f-deadline" name="deadline" type="text" placeholder="e.g. next Friday, or urgent" maxLength={100} className={input} />
      </Field>

      {/* Spam trap: hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-[52px] rounded-[10px] bg-accent text-[17px] font-bold text-on-accent disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>

      {(status === "not_configured" || status === "failed") && (
        <div role="alert" className="rounded-xl border border-line bg-bg p-4 text-[15px] leading-normal">
          {status === "not_configured" ? "The form isn't switched on yet." : "Something went wrong and your enquiry wasn't sent."}{" "}
          {hasWhatsApp || hasEmail ? (
            <>
              Please reach us{" "}
              {hasWhatsApp && (
                <a href={whatsappHref(picked[0])} target="_blank" rel="noopener noreferrer" className="font-bold underline">on WhatsApp</a>
              )}
              {hasWhatsApp && hasEmail && " or "}
              {hasEmail && (
                <a href={`mailto:${contact.email}`} className="font-bold underline">by email</a>
              )}
              .
            </>
          ) : (
            "Please try again a little later."
          )}
        </div>
      )}

      <p className="text-[13px] text-muted">Your details are only used to reply to this enquiry.</p>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`f-${id}`} className="text-sm font-bold">{label}</label>
      {children}
      {error && (
        <p id={`e-${id}`} className="text-sm font-bold text-[#e5484d]">{error}</p>
      )}
    </div>
  );
}
