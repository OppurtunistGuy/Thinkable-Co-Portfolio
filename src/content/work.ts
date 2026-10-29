import type { ServiceKey } from "@/config/site";

// Placeholder work items. Replace each with a real project:
// image path, project name, business type and city, and one result line.
export type WorkItem = {
  service: ServiceKey;
  frame: string;
  name: string;
  client: string;
  result: string;
};

export const work: WorkItem[] = [
  { service: "landing-pages", frame: "[LANDING PAGE SCREENSHOT]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "motion-ads", frame: "[REEL]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "carousels", frame: "[CAROUSEL COVER]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "ad-creatives", frame: "[AD CREATIVE]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "graphic-design", frame: "[POSTER OR MENU]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "landing-pages", frame: "[LANDING PAGE SCREENSHOT]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "motion-ads", frame: "[REEL]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "ad-creatives", frame: "[AD CREATIVE]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
  { service: "carousels", frame: "[CAROUSEL COVER]", name: "[Project name]", client: "[Business type, city]", result: "[One line on the result.]" },
];

/** Frame shape per service, matching the real format of the work. */
export const frameRatio: Record<ServiceKey, string> = {
  "landing-pages": "16 / 10",
  "motion-ads": "9 / 16",
  "ad-creatives": "1 / 1",
  carousels: "4 / 5",
  "graphic-design": "3 / 4",
};
