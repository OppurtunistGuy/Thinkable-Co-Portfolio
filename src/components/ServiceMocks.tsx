import type { ServiceKey } from "@/config/site";
import { WorkVideo } from "./WorkVideo";

/*
 * Visual previews for service pages.
 * - Services with real work show that work.
 * - Services without real work yet show clearly labelled sample layouts
 *   (made-up brands, never presented as client projects).
 */

type MockProps = { className?: string };

function AdSquare({ className = "" }: MockProps) {
  return (
    <div className={`flex aspect-square flex-col justify-between rounded-xl min-h-0 overflow-hidden shrink-0 bg-[#ffd23f] p-[8%] text-[#1b1b3a] ${className}`}>
      <span className="text-[0.6em] font-bold uppercase tracking-widest">Weekend sale</span>
      <span className="font-display text-[2.2em] font-extrabold leading-none">40% off</span>
      <span className="self-start rounded-full bg-[#1b1b3a] px-[0.9em] py-[0.4em] text-[0.65em] font-bold text-white">Shop now</span>
    </div>
  );
}

function AdPortrait({ className = "" }: MockProps) {
  return (
    <div className={`flex aspect-[4/5] flex-col justify-end gap-[0.4em] rounded-xl min-h-0 overflow-hidden shrink-0 bg-gradient-to-b from-[#2ec4b6] to-[#0b6e63] p-[8%] text-white ${className}`}>
      <span className="text-[0.6em] font-bold uppercase tracking-widest opacity-90">New in</span>
      <span className="font-display text-[1.3em] font-extrabold leading-tight">Fresh menu, same love.</span>
      <span className="self-start rounded-full bg-white px-[0.9em] py-[0.4em] text-[0.65em] font-bold text-[#0b6e63]">Order today</span>
    </div>
  );
}

function AdStory({ className = "" }: MockProps) {
  return (
    <div className={`flex aspect-[9/16] flex-col justify-between rounded-xl min-h-0 overflow-hidden shrink-0 bg-[#1b1b3a] p-[10%] text-white ${className}`}>
      <span className="text-[0.55em] font-bold uppercase tracking-widest text-[#ff8fab]">Live this Friday</span>
      <span className="font-display text-[1.1em] font-extrabold leading-tight">Open mic night</span>
      <span className="rounded-full bg-[#ff8fab] px-[0.8em] py-[0.45em] text-center text-[0.6em] font-bold text-[#1b1b3a]">Swipe up</span>
    </div>
  );
}

function Slide({ n, title, tone }: { n: number; title: string; tone: "light" | "accent" }) {
  const look = tone === "accent" ? "bg-[#ff6b35] text-white" : "bg-[#fff8ee] text-[#3b2414]";
  return (
    <div className={`flex aspect-[4/5] flex-col justify-between rounded-xl min-h-0 overflow-hidden shrink-0 p-[9%] ${look}`}>
      <span className="text-[0.55em] font-bold opacity-80">{n}/5</span>
      <span className="font-display text-[1.05em] font-extrabold leading-tight">{title}</span>
      <span className="text-[0.55em] font-bold opacity-80">Swipe</span>
    </div>
  );
}

function Poster({ className = "" }: MockProps) {
  return (
    <div className={`flex aspect-[3/4] flex-col justify-between rounded-xl min-h-0 overflow-hidden shrink-0 bg-[#1d3557] p-[9%] text-[#f1faee] ${className}`}>
      <span className="text-[0.55em] font-bold uppercase tracking-widest text-[#a8dadc]">Pune · 14 Dec</span>
      <span className="font-display text-[1.3em] font-extrabold leading-none">Winter Food Fest</span>
      <span className="text-[0.6em] opacity-90">Live music · 30+ stalls</span>
    </div>
  );
}

function Menu({ className = "" }: MockProps) {
  return (
    <div className={`flex aspect-[3/4] flex-col gap-[0.5em] rounded-xl min-h-0 overflow-hidden shrink-0 bg-[#f6efe2] p-[9%] text-[#3b2414] ${className}`}>
      <span className="font-display text-[1.1em] font-extrabold">Menu</span>
      {["Masala chai", "Vada pav", "Misal", "Cold coffee"].map((x) => (
        <span key={x} className="flex justify-between border-b border-[#3b2414]/15 pb-[0.3em] text-[0.6em]">
          {x}
          <span className="font-bold">₹</span>
        </span>
      ))}
    </div>
  );
}

function SocialPost({ className = "" }: MockProps) {
  return (
    <div className={`flex aspect-square flex-col items-center justify-center gap-[0.3em] rounded-xl min-h-0 overflow-hidden shrink-0 bg-[#8b7cff] p-[8%] text-center text-white ${className}`}>
      <span className="font-display text-[1.3em] font-extrabold leading-none">Happy Diwali</span>
      <span className="text-[0.6em] opacity-90">From all of us</span>
    </div>
  );
}

const sampleNote = "Sample layouts with made-up brands, to show the format.";

/** Right-hand preview in each service page hero. */
export function ServiceHeroPreview({ service }: { service: ServiceKey }) {
  const frame = "relative min-w-0 flex-[1_1_440px] overflow-hidden rounded-3xl border border-line bg-card";

  if (service === "motion-ads") {
    return (
      <div className={`${frame} flex h-[440px] items-center justify-center gap-5 p-6`}>
        <div className="float-a h-[85%]">
          <WorkVideo src="/work/bloom-cafe-reel.mp4" poster="/work/bloom-cafe-reel.jpg" ratio="9 / 16" label="Bloom cafe motion ad" />
        </div>
        <div className="float-b h-[85%]">
          <WorkVideo src="/work/coliwo-reel.mp4" poster="/work/coliwo-reel.jpg" ratio="9 / 16" label="Coliwo motion ad" />
        </div>
      </div>
    );
  }

  if (service === "landing-pages") {
    return (
      <div className={`${frame} flex items-center p-6`}>
        <div className="w-full overflow-hidden rounded-xl border border-line shadow-2xl">
          <div className="flex h-7 items-center gap-1.5 bg-bg px-3" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
          </div>
          <WorkVideo src="/work/ukdiche-modak-website.mp4" poster="/work/ukdiche-modak-website.jpg" ratio="1280 / 730" label="Ukdiche Modak animated website" />
        </div>
      </div>
    );
  }

  const art =
    service === "ad-creatives" ? (
      <div className="flex h-full items-center justify-center gap-[2%] text-[clamp(10px,0.95vw,13px)]">
        <AdPortrait className="float-a w-[36%]" />
        <AdSquare className="float-c w-[34%]" />
        <AdStory className="float-b w-[24%]" />
      </div>
    ) : service === "carousels" ? (
      <div className="flex h-full items-center justify-center text-[clamp(10px,1vw,14px)]">
        <div className="float-a w-[36%] -rotate-6"><Slide n={1} title="5 tips for a busier cafe" tone="accent" /></div>
        <div className="float-c z-10 -mx-[5%] w-[36%]"><Slide n={2} title="Post at the right time" tone="light" /></div>
        <div className="float-b w-[36%] rotate-6"><Slide n={3} title="Show the food first" tone="light" /></div>
      </div>
    ) : (
      <div className="flex h-full items-center justify-center gap-[2%] text-[clamp(10px,0.95vw,13px)]">
        <Poster className="float-a w-[34%]" />
        <Menu className="float-c w-[31%]" />
        <SocialPost className="float-b w-[30%]" />
      </div>
    );

  return (
    <figure className={`${frame} flex h-[440px] flex-col gap-3 p-6`}>
      <div className="min-h-0 flex-1" aria-hidden="true">{art}</div>
      <figcaption className="text-xs text-muted">{sampleNote}</figcaption>
    </figure>
  );
}

/** Format samples shown in Examples until real projects are added for a service. */
export function FormatSamples({ service }: { service: ServiceKey }) {
  const sets: Record<string, { label: string; node: React.ReactNode }[]> = {
    "ad-creatives": [
      { label: "Feed 1:1 · 1080 × 1080", node: <AdSquare className="w-[60%]" /> },
      { label: "Feed 4:5 · 1080 × 1350", node: <AdPortrait className="w-[50%]" /> },
      { label: "Story 9:16 · 1080 × 1920", node: <AdStory className="w-[33%]" /> },
    ],
    carousels: [
      { label: "Cover slide · 4:5", node: <div className="w-[48%]"><Slide n={1} title="5 tips for a busier cafe" tone="accent" /></div> },
      { label: "Content slide · 4:5", node: <div className="w-[48%]"><Slide n={2} title="Post at the right time" tone="light" /></div> },
      { label: "Closing slide · 4:5", node: <div className="w-[48%]"><Slide n={5} title="Follow for more tips" tone="accent" /></div> },
    ],
    "graphic-design": [
      { label: "Poster · A3 or A4", node: <Poster className="w-[45%]" /> },
      { label: "Menu · print and digital", node: <Menu className="w-[45%]" /> },
      { label: "Festival post · 1:1", node: <SocialPost className="w-[58%]" /> },
    ],
  };
  const items = sets[service] ?? [];
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
      {items.map((x) => (
        <li key={x.label} className="flex flex-col gap-2.5">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[18px] border border-line bg-card p-5 text-[clamp(9px,0.85vw,13px)]" aria-hidden="true">
            {x.node}
          </div>
          <p className="text-sm font-bold">{x.label}</p>
        </li>
      ))}
    </ul>
  );
}
