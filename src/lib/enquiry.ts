import { services, type ServiceKey } from "@/config/site";

export type Enquiry = {
  name: string;
  business: string;
  services: ServiceKey[];
  project: string;
  contact: string;
  deadline: string;
  /** Spam trap. Real people never see or fill this field. */
  website?: string;
};

export type FieldErrors = Partial<Record<"name" | "project" | "contact", string>>;

const limits = { name: 100, business: 150, project: 3000, contact: 150, deadline: 100 };
const serviceKeys = new Set<string>(services.map((s) => s.key));

export function isServiceKey(v: unknown): v is ServiceKey {
  return typeof v === "string" && serviceKeys.has(v);
}

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export function looksLikeEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function looksLikePhone(v: string): boolean {
  return v.replace(/\D/g, "").length >= 10;
}

/** Normalises raw input and returns field errors shared by the form and the API. */
export function parseEnquiry(raw: Record<string, unknown>): { data: Enquiry; errors: FieldErrors } {
  const data: Enquiry = {
    name: clean(raw.name, limits.name),
    business: clean(raw.business, limits.business),
    services: Array.isArray(raw.services) ? raw.services.filter(isServiceKey).slice(0, 5) : [],
    project: clean(raw.project, limits.project),
    contact: clean(raw.contact, limits.contact),
    deadline: clean(raw.deadline, limits.deadline),
    website: clean(raw.website, 200),
  };
  const errors: FieldErrors = {};
  if (!data.name) errors.name = "Please add your name.";
  if (data.project.length < 10) errors.project = "Please tell us a little about the project.";
  if (!data.contact) errors.contact = "Please add an email or WhatsApp number so we can reply.";
  else if (!looksLikeEmail(data.contact) && !looksLikePhone(data.contact))
    errors.contact = "That doesn't look like an email or phone number.";
  return { data, errors };
}
