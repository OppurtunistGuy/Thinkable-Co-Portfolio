import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { services, type ServiceKey } from "@/config/site";
import { serviceContent, steps } from "@/content/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.key }));
}

export const dynamicParams = false;

function getService(slug: string) {
  return slug in serviceContent ? serviceContent[slug as ServiceKey] : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.description,
    alternates: { canonical: `/services/${s.key}` },
  };
}

const h2 = "font-display text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold";

const ctaLabel: Record<ServiceKey, string> = {
  "landing-pages": "Inquire about a landing page",
  "motion-ads": "Inquire about a motion ad",
  "ad-creatives": "Inquire about ad creatives",
  carousels: "Inquire about carousels",
  "graphic-design": "Inquire about design",
};

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const related = services.filter((x) => x.key !== s.key);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-[22px] px-6 pb-10 pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap gap-1.5">
            <li><Link href="/" className="text-muted">Home</Link> /</li>
            <li><Link href="/#services" className="text-muted">Services</Link> /</li>
            <li aria-current="page" className="text-text">{s.label}</li>
          </ol>
        </nav>
        <p className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.08em] text-label">
          <span className="size-2.5 rounded-full bg-accent" aria-hidden="true" />
          {s.label}
        </p>
        <h1 className="max-w-[920px] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04]">{s.h1}</h1>
        <p className="max-w-[640px] text-[1.2rem] leading-[1.55] text-muted">{s.sub}</p>
        <div className="flex flex-wrap items-center gap-3.5">
          <Link href={`/contact?service=${s.key}#form`} className="inline-flex min-h-11 items-center rounded-[10px] bg-accent px-[30px] py-4 text-[17px] font-bold text-on-accent no-underline">
            {ctaLabel[s.key]}
          </Link>
          <WhatsAppButton service={s.key} />
          <span className="text-[15px] text-muted">
            Typical time: <strong className="text-text">{s.time}</strong>
          </span>
        </div>
      </section>

      {/* Examples */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 pb-10 pt-6">
        <h2 className={h2}>Examples</h2>
        <ul className="grid gap-5" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${s.minCol}px, 1fr))` }}>
          {s.samples.map((x) => (
            <li key={x.frame}>
              <figure className="flex flex-col gap-2.5">
                <div className="flex items-center justify-center rounded-[18px] border border-line bg-card p-4 text-center text-sm text-muted" style={{ aspectRatio: s.ratio }}>
                  {x.frame}
                </div>
                <figcaption className="text-sm text-muted">{x.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">Each example is shown in the client&apos;s own style, not ours.</p>
      </section>

      {/* What you get */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 pb-10 pt-12">
        <h2 className={h2}>What you get</h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {s.gets.map((g) => (
            <li key={g.title} className="flex flex-col gap-2 rounded-2xl border border-line bg-card p-[22px]">
              <h3 className="text-lg font-bold">{g.title}</h3>
              <p className="text-[15px] leading-normal text-muted">{g.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Formats and process */}
      <section className="mx-auto flex max-w-[1200px] flex-wrap gap-10 px-6 pb-10 pt-8">
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
          <h2 className={h2}>{s.formatsTitle}</h2>
          <ul className="flex flex-wrap gap-2.5">
            {s.formats.map((f) => (
              <li key={f} className="rounded-full border border-line px-4 py-2.5 text-[15px] font-medium">{f}</li>
            ))}
          </ul>
        </div>
        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-4">
          <h2 className={h2}>How it works</h2>
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {steps.map((st) => (
              <li key={st.title} className="flex flex-col gap-2 border-t-[3px] border-accent pt-4">
                <h3 className="font-display text-xl font-extrabold">{st.title}</h3>
                <p className="text-[15px] leading-normal text-muted">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 pb-8 pt-12">
        <h2 className={h2}>Questions about {s.label.toLowerCase()}</h2>
        <div className="border-t border-line">
          {s.faqs.map((f) => (
            <details key={f.q} className="border-b border-line py-[18px]">
              <summary className="cursor-pointer text-lg font-bold">{f.q}</summary>
              <p className="mt-3 leading-[1.55] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Brief call to action */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] border border-line bg-card p-[clamp(28px,5vw,48px)]">
          <div className="flex max-w-[560px] flex-col gap-3">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05]">Start your {s.label.toLowerCase()} brief.</h2>
            <p className="text-[1.05rem] leading-[1.55] text-muted">Send a few details and you&apos;ll get a clear quote, with no obligation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/contact?service=${s.key}#form`} className="inline-flex min-h-11 items-center rounded-[10px] bg-accent px-7 py-4 text-[17px] font-bold text-on-accent no-underline">
              Start a brief
            </Link>
            <WhatsAppButton service={s.key} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 pb-[72px] pt-6">
        <h2 className="font-display text-2xl font-extrabold">Often paired with</h2>
        <ul className="flex flex-wrap gap-3">
          {related.map((r) => (
            <li key={r.key}>
              <Link href={`/services/${r.key}`} className="inline-flex min-h-11 items-center rounded-full border-2 border-line bg-card px-[18px] text-[15px] font-bold text-text no-underline hover:border-text">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
