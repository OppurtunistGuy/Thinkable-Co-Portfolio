// Single place for brand and contact details.
// Contact values are left blank on purpose and added before launch.
// Set them in Vercel as environment variables, or fill the fallbacks here.

export const site = {
  name: "Thinkable & Co",
  tagline: "Websites and ads that make people stop scrolling.",
  location: "Based in Pune, working with clients across India and abroad.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thinkableco.vercel.app",
};

export const contact = {
  // Business WhatsApp number with country code, digits only, e.g. 919876543210.
  // Blank until the separate business SIM is ready.
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
};

export type ServiceKey = "landing-pages" | "motion-ads" | "ad-creatives" | "carousels" | "graphic-design";

export const services: { key: ServiceKey; label: string; short: string; summary: string }[] = [
  { key: "landing-pages", label: "Landing pages", short: "a landing page", summary: "Fast pages built around your business and one clear action." },
  { key: "motion-ads", label: "Motion ads", short: "a motion ad", summary: "Reels, Shorts and feed ads that explain you in seconds." },
  { key: "ad-creatives", label: "Ad creatives", short: "ad creatives", summary: "Static ads for Meta and Google, with versions to test." },
  { key: "carousels", label: "Carousels", short: "a carousel", summary: "Instagram and LinkedIn carousels people swipe to the end." },
  { key: "graphic-design", label: "Graphic design", short: "graphic design", summary: "Posters, menus, social posts and brand basics." },
];
