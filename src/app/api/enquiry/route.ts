import { NextResponse } from "next/server";
import { services } from "@/config/site";
import { looksLikeEmail, parseEnquiry } from "@/lib/enquiry";

// Server-only settings (never sent to the browser):
//   RESEND_API_KEY      free key from resend.com
//   ENQUIRY_TO_EMAIL    inbox that receives enquiries
//   ENQUIRY_FROM_EMAIL  optional sender; defaults to Resend's test sender
const apiKey = process.env.RESEND_API_KEY ?? "";
const to = process.env.ENQUIRY_TO_EMAIL ?? "";
const from = process.env.ENQUIRY_FROM_EMAIL ?? "Thinkable & Co <onboarding@resend.dev>";

function escape(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

export async function POST(req: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const { data, errors } = parseEnquiry(raw);

  // Bots fill the hidden field. Pretend success so they don't retry.
  if (data.website) return NextResponse.json({ ok: true });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "invalid", fields: errors }, { status: 422 });
  }

  if (!apiKey || !to) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const labels = data.services.map((k) => services.find((s) => s.key === k)?.label ?? k);
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Business and city", data.business || "Not given"],
    ["Services", labels.join(", ") || "Not picked"],
    ["Contact", data.contact],
    ["Deadline", data.deadline || "Not given"],
    ["Project", data.project],
  ];
  const html = `<h2>New enquiry</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td valign="top"><strong>${escape(k)}</strong></td><td style="white-space:pre-wrap">${escape(v)}</td></tr>`)
    .join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New enquiry: ${labels[0] ?? "General"} from ${data.name}`,
      html,
      text,
      ...(looksLikeEmail(data.contact) ? { reply_to: data.contact } : {}),
    }),
    });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  if (!res.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
