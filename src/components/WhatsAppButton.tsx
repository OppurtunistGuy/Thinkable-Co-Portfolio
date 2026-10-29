import type { ServiceKey } from "@/config/site";
import { hasWhatsApp, whatsappHref } from "@/lib/contact";

type Props = {
  service?: ServiceKey;
  variant?: "primary" | "outline";
  className?: string;
};

/**
 * WhatsApp chat button. Opens WhatsApp with a prefilled message once the
 * business number is set; until then it sends people to the contact form.
 */
export function WhatsAppButton({ service, variant = "outline", className = "" }: Props) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-[17px] font-bold no-underline";
  const look =
    variant === "primary"
      ? "bg-accent text-on-accent"
      : "border-2 border-line text-text hover:border-text";
  const external = hasWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={whatsappHref(service)} className={`${base} ${look} ${className}`} {...external}>
      {hasWhatsApp ? "Chat on WhatsApp" : "Send a message"}
    </a>
  );
}
