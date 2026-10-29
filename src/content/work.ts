import type { ServiceKey } from "@/config/site";

// Real projects. To add one: put the compressed video (or image) and its cover
// image in public/work/, then add an entry here. Only add work the client is
// happy to show. Result lines describe what was made; no invented numbers.
export type WorkItem = {
  slug: string;
  service: ServiceKey;
  /** Shown on the card instead of the service name when more specific. */
  kind: string;
  name: string;
  client: string;
  summary: string;
  video: string;
  poster: string;
  /** Aspect ratio of the video itself. */
  ratio: string;
  featured?: boolean;
};

export const work: WorkItem[] = [
  {
    slug: "ukdiche-modak-website",
    service: "landing-pages",
    kind: "Animated website",
    name: "Ukdiche Modak",
    client: "Homemade modak business, Pimpri-Chinchwad",
    summary: "Animated ordering website with a product picker that sends the order straight to WhatsApp.",
    video: "/work/ukdiche-modak-website.mp4",
    poster: "/work/ukdiche-modak-website.jpg",
    ratio: "1280 / 730",
    featured: true,
  },
  {
    slug: "bloom-cafe-reel",
    service: "motion-ads",
    kind: "Motion ad · 15s",
    name: "Bloom",
    client: "Cafe and Chinese, Purnanagar, Chinchwad",
    summary: "Festive offer reel with location and QR code, built for Instagram Reels.",
    video: "/work/bloom-cafe-reel.mp4",
    poster: "/work/bloom-cafe-reel.jpg",
    ratio: "9 / 16",
    featured: true,
  },
  {
    slug: "coliwo-reel",
    service: "motion-ads",
    kind: "Motion ad · 20s",
    name: "Coliwo",
    client: "Coliving and coworking, Pune",
    summary: "Typography-led reel for working professionals moving to a new city.",
    video: "/work/coliwo-reel.mp4",
    poster: "/work/coliwo-reel.jpg",
    ratio: "9 / 16",
    featured: true,
  },
  {
    slug: "bird-valley-ad",
    service: "motion-ads",
    kind: "Motion ad · 15s · 16:9",
    name: "Bird Valley",
    client: "Restaurant",
    summary: "Animated dish showcase for YouTube and wide screens.",
    video: "/work/bird-valley-ad.mp4",
    poster: "/work/bird-valley-ad.jpg",
    ratio: "16 / 9",
  },
];

export const featuredWork = work.filter((w) => w.featured);
export const workFor = (service: ServiceKey) => work.filter((w) => w.service === service);
