import type { Metadata } from "next";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { contact } from "@/config/site";
import { hasBooking, hasEmail, hasWhatsApp, whatsappHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you need. Reach Thinkable & Co on WhatsApp, by email or with the enquiry form, and get a clear quote.",
  alternates: { canonical: "/contact" },
};

const steps = [
  { title: "1. We read your brief", text: contact.replyTime ? `You hear back within ${contact.replyTime}.` : "You hear back soon." },
  { title: "2. You get a quote", text: "A clear price and timeline, based on what you need." },
  { title: "3. We start", text: "Once you approve, the first draft is on its way." },
];

const card = "flex h-full flex-col gap-2.5 rounded-[20px] p-[26px] no-underline";

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-6 pb-8 pt-14">
        <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold leading-[1.04]">Tell us what you need.</h1>
        <p className="max-w-[620px] text-[1.15rem] leading-[1.55] text-muted">Pick whichever way suits you. Every enquiry gets a clear quote, with no obligation.</p>
      </section>

      <section aria-label="Ways to reach us" className="mx-auto max-w-[1200px] px-6 pb-12">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          <li>
            <a href={whatsappHref()} {...(hasWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${card} bg-accent text-on-accent`}>
              <span className="text-[13px] font-bold uppercase tracking-[0.06em]">Fastest in India</span>
              <span className="font-display text-[26px] font-extrabold">WhatsApp</span>
              <span className="text-[15px] leading-normal">A few quick questions about your project, then Vikas picks it up personally.</span>
              {!hasWhatsApp && <span className="mt-1.5 text-sm font-bold">Coming soon. Use the form for now.</span>}
            </a>
          </li>
          <li>
            <a href={hasEmail ? `mailto:${contact.email}` : "#form"} className={`${card} border border-line bg-card text-text`}>
              <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-label">Clients abroad and bigger projects</span>
              <span className="font-display text-[26px] font-extrabold">Email or form</span>
              <span className="text-[15px] leading-normal text-muted">Send the details at your own pace. Good for longer briefs and files.</span>
              {hasEmail && <span className="mt-1.5 font-bold">{contact.email}</span>}
            </a>
          </li>
          <li>
            <a href={hasBooking ? contact.bookingUrl : "#form"} {...(hasBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${card} border border-line bg-card text-text`}>
              <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-label">Once your brief is clear</span>
              <span className="font-display text-[26px] font-extrabold">Book a call</span>
              <span className="text-[15px] leading-normal text-muted">A short call or video meeting to talk through the project, in your time zone.</span>
              {!hasBooking && <span className="mt-1.5 text-sm font-bold">Send a brief first and we&apos;ll set a time.</span>}
            </a>
          </li>
        </ul>
      </section>

      <section id="form" className="mx-auto flex max-w-[1200px] scroll-mt-6 flex-wrap gap-10 px-6 pb-16 pt-4">
        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-5">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.08]">What happens next</h2>
          <ol className="flex flex-col gap-[18px]">
            {steps.map((s) => (
              <li key={s.title} className="flex flex-col gap-1 border-l-[3px] border-accent pl-4">
                <h3 className="text-[17px] font-bold">{s.title}</h3>
                <p className="text-[15px] leading-normal text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-[15px] leading-normal text-muted">Based in Pune. Working with clients across Maharashtra, Gujarat, the rest of India and abroad.</p>
        </div>
        <div className="relative min-w-0 flex-[1_1_420px]">
          <Suspense fallback={<div className="h-[640px] rounded-3xl border border-line bg-card" />}>
            <EnquiryForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
