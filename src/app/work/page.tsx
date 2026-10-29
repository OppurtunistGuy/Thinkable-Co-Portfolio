import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Landing pages, motion ads, ad creatives, carousels and graphic design made for businesses in Pune, across India and abroad.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-6 pb-8 pt-14">
        <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold leading-[1.04]">Recent work.</h1>
        <p className="max-w-[620px] text-[1.15rem] leading-[1.55] text-muted">
          Real projects for real businesses. Each one is shown in the client&apos;s own style, because good work should look like the brand, not like us.
        </p>
      </section>

      <WorkGrid />

      <section className="mx-auto max-w-[1200px] px-6 pb-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[28px] border border-line bg-card p-[clamp(28px,5vw,48px)]">
          <div className="flex max-w-[560px] flex-col gap-2">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.08]">Want work like this for your business?</h2>
            <p className="text-[1.05rem] text-muted">Tell us what you need and get a clear quote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#form" className="inline-flex min-h-11 items-center rounded-[10px] bg-accent px-7 py-4 text-[17px] font-bold text-on-accent no-underline">
              Inquire
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
