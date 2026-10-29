import { contact, services, type ServiceKey } from "@/config/site";

/** True once a business WhatsApp number has been configured. */
export const hasWhatsApp = contact.whatsappNumber.length >= 10;

/**
 * The first message a client sends. The WhatsApp Business greeting
 * (and later the bot) replies with the qualifying questions.
 */
export function whatsappMessage(service?: ServiceKey): string {
  const s = services.find((x) => x.key === service);
  return s
    ? `Hi Thinkable & Co, I'm interested in ${s.short}.`
    : "Hi Thinkable & Co, I'd like to discuss a project.";
}

/**
 * Click-to-chat link. Returns the contact form link while no number is set,
 * so no button on the site is ever a dead link.
 */
export function whatsappHref(service?: ServiceKey): string {
  if (!hasWhatsApp) {
    return service ? `/contact?service=${service}#form` : "/contact#form";
  }
  const text = encodeURIComponent(whatsappMessage(service));
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}

export const hasEmail = contact.email.includes("@");
export const hasBooking = contact.bookingUrl.startsWith("https://");
