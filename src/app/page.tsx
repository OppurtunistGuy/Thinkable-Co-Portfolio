import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WorkCard } from "@/components/WorkCard";
import { WorkVideo } from "@/components/WorkVideo";
import { featuredWork } from "@/content/work";
import { contact, services } from "@/config/site";
import { hasBooking, hasEmail, hasWhatsApp, whatsappHref } from "@/lib/contact";

const steps = [
  { title: "1. Brief", text: "Tell us about your business on WhatsApp, email or a quick call. We ask a few short questions." },
  { title: "2. Draft", text: "You get a first version to react to. We change it until it fits." },
  { title: "3. Deliver", text: "Final files or a live page, ready to post, run as an ad or share." },
];

const audiences = [
  { title: "Local businesses", text: "Cafes, food businesses, shops and services in Pune, Maharashtra and Gujarat." },
  { title: "Startups and brands", text: "Teams across India that need ads and pages fast for a launch." },
  { title: "Clients abroad", text: "Businesses outside India who want quality work and quick replies by email." },
];

const faqs = [
  { q: "How much does it cost?", a: "Every project is different, so we quote after a short brief. Send an enquiry and you'll get a clear quote." },
  {
    q: "How fast can you deliver?",
    a: "Most work is quick: ad creatives, carousels and graphics in 1 to 2 days, motion ads in 3 to 5 days, and landing pages in 5 to 7 working days. Urgent small jobs can be done in 24 to 48 hours, just say so in your enquiry.",
  },
  { q: "Do you work with clients outside India?", a: "Yes. Clients abroad usually reach us by email, and calls are scheduled for your time zone." },
  { q: "What do you need from me to start?", a: "Your business name, what you want to promote, any photos or logo you have, and your deadline." },
];

const h2 = "font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08]";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 pb-16 pt-[72px]">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-6">
          <p className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.08em] text-label">
            <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
            Pune · India · Worldwide
          </p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.01em]">
            Websites and ads that make people stop scrolling.
          </h1>
          <p className="max-w-[560px] text-[1.2rem] leading-[1.55] text-muted">
            Landing pages, motion ads, carousels and design for businesses in Pune, across India and abroad. Urgent work welcome.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-[10px] bg-accent px-[30px] py-4 text-[17px] font-bold text-on-accent no-underline">
              Inquire
            </Link>
            <WhatsAppButton />
          </div>
        </div>
        <div className="relative h-[440px] min-w-0 flex-[1_1_380px] overflow-hidden rounded-3xl border border-line bg-card">
          <div className="float-c absolute left-[6%] right-[6%] top-[7%] aspect-[1280/730] shadow-2xl">
            <WorkVideo src="/work/ukdiche-modak-website.mp4" poster="/work/ukdiche-modak-website.jpg" ratio="1280 / 730" label="Ukdiche Modak animated website" />
          </div>
          <div className="float-a absolute bottom-[5%] left-[8%] h-[58%] aspect-[9/16] shadow-2xl">
            <WorkVideo src="/work/bloom-cafe-reel.mp4" poster="/work/bloom-cafe-reel.jpg" ratio="9 / 16" label="Bloom cafe motion ad" />
          </div>
          <div className="float-b absolute bottom-[5%] right-[8%] h-[58%] aspect-[9/16] shadow-2xl">
            <WorkVideo src="/work/coliwo-reel.mp4" poster="/work/coliwo-reel.jpg" ratio="9 / 16" label="Coliwo motion ad" />
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section aria-label="Clients" className="border-y border-line">
        <ul className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-x-8 gap-y-3 px-6 py-5 text-[15px] text-muted">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>[CLIENT LOGO]</li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto flex max-w-[1200px] scroll-mt-6 flex-col gap-8 px-6 pb-8 pt-[88px]">
        <div className="flex max-w-[680px] flex-col gap-3">
          <h2 className={h2}>What we make</h2>
          <p className="text-[1.1rem] leading-[1.55] text-muted">Five services, one team. Pick one or combine them for a full launch.</p>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
          {services.map((s, i) => (
            <li key={s.key}>
              <Link href={`/services/${s.key}`} className="flex h-full min-h-[200px] flex-col gap-2.5 rounded-[18px] border border-line bg-card p-6 text-text no-underline hover:border-text">
                <span className="text-[13px] font-bold text-label">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[22px] font-extrabold">{s.label}</span>
                <span className="text-[15px] leading-normal text-muted">{s.summary}</span>
                <span className="mt-auto text-[15px] font-bold">See {s.label.toLowerCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto flex max-w-[1200px] scroll-mt-6 flex-col gap-8 px-6 pb-8 pt-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex max-w-[640px] flex-col gap-3">
            <h2 className={h2}>Recent work</h2>
            <p className="text-[1.1rem] leading-[1.55] text-muted">Every project is shown in the client&apos;s own style, not ours.</p>
          </div>
          <Link href="/work" className="border-b-2 border-accent pb-1 font-bold text-text no-underline">See all work</Link>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {featuredWork.map((w) => (
            <li key={w.slug}>
              <WorkCard item={w} />
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto flex max-w-[1200px] scroll-mt-6 flex-col gap-8 px-6 pb-8 pt-[72px]">
        <h2 className={h2}>How it works</h2>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {steps.map((s) => (
            <li key={s.title} className="flex flex-col gap-2.5 border-t-[3px] border-accent pt-5">
              <h3 className="font-display text-2xl font-extrabold">{s.title}</h3>
              <p className="leading-[1.55] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Audiences */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 pb-8 pt-[72px]">
        <h2 className={h2}>Who we work with</h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {audiences.map((a) => (
            <li key={a.title} className="flex flex-col gap-2.5 rounded-[18px] border border-line bg-card p-6">
              <h3 className="text-[19px] font-bold">{a.title}</h3>
              <p className="text-[15px] leading-[1.55] text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 pb-8 pt-[72px]">
        <h2 className={h2}>Common questions</h2>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="border-b border-line py-5">
              <summary className="cursor-pointer text-lg font-bold">{f.q}</summary>
              <p className="mt-3 leading-[1.55] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-[1200px] scroll-mt-6 px-6 pb-[88px] pt-[72px]">
        <div className="flex flex-col gap-7 rounded-[28px] border border-line bg-card p-[clamp(28px,5vw,56px)]">
          <div className="flex max-w-[640px] flex-col gap-3">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05]">Tell us what you need.</h2>
            <p className="text-[1.1rem] leading-[1.55] text-muted">Pick the way that suits you. We reply fast.</p>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            <li>
              <a
                href={whatsappHref()}
                {...(hasWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-full flex-col gap-2 rounded-[18px] bg-accent p-6 text-on-accent no-underline"
              >
                <span className="text-xl font-extrabold">WhatsApp</span>
                <span className="text-[15px] leading-normal">Fastest in India. A few quick questions, then we take it from there.</span>
              </a>
            </li>
            <li>
              <a
                href={hasEmail ? `mailto:${contact.email}` : "/contact#form"}
                className="flex h-full flex-col gap-2 rounded-[18px] border-2 border-line p-6 text-text no-underline hover:border-text"
              >
                <span className="text-xl font-extrabold">Email or form</span>
                <span className="text-[15px] leading-normal text-muted">Best for clients abroad and bigger projects.</span>
              </a>
            </li>
            <li>
              <a
                href={hasBooking ? contact.bookingUrl : "/contact#form"}
                {...(hasBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-full flex-col gap-2 rounded-[18px] border-2 border-line p-6 text-text no-underline hover:border-text"
              >
                <span className="text-xl font-extrabold">Book a call</span>
                <span className="text-[15px] leading-normal text-muted">Talk it through once your brief is clear.</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
