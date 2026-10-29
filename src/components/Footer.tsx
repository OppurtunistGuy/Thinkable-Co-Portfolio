import Link from "next/link";
import { contact, services, site } from "@/config/site";
import { hasEmail, whatsappHref } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-x-12 gap-y-6 px-6 py-10">
        <div className="flex max-w-[340px] flex-col gap-2">
          <div className="font-display text-xl font-extrabold">{site.name}</div>
          <p className="text-[15px] leading-normal text-muted">{site.location}</p>
        </div>
        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
          {services.map((s) => (
            <li key={s.key}>
              <Link href={`/services/${s.key}`} className="text-text underline-offset-4 hover:underline">
                {s.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={whatsappHref()} className="text-text underline-offset-4 hover:underline">WhatsApp</a>
          </li>
          {hasEmail && (
            <li>
              <a href={`mailto:${contact.email}`} className="text-text underline-offset-4 hover:underline">Email</a>
            </li>
          )}
          {contact.instagramUrl && (
            <li>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-text underline-offset-4 hover:underline">Instagram</a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
