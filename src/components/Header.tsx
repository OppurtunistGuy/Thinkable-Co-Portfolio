import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <nav aria-label="Main" className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="font-display text-[22px] font-extrabold text-text no-underline">
          Thinkable &amp; Co
        </Link>
        <div className="flex flex-wrap items-center gap-5 text-base font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-text no-underline hover:text-muted">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/contact" className="rounded-[10px] bg-accent px-[22px] py-3 font-bold text-on-accent no-underline">
            Inquire
          </Link>
        </div>
      </nav>
    </header>
  );
}
