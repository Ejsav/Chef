import { z } from "zod";
import { experiences } from "@/content/experiences";

export const experienceOptions = [
  ...experiences.map((e) => ({ value: e.slug, label: e.name })),
  { value: "other", label: "Something else" },
] as const;

const slugs = experienceOptions.map((o) => o.value) as [string, ...string[]];

// Shared by the client form (inline errors) and the API route (the real gate).
export const inquirySchema = z.object({
  name: z.string("Please share your name.").trim().min(2, "Please share your name.").max(120),
  email: z.string("Please use a valid email address.").trim().email("Please use a valid email address.").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  experience: z.enum(slugs, { message: "Please choose an experience." }),
  date: z.string().trim().max(60).optional().or(z.literal("")),
  location: z.string("Where will the table be?").trim().min(2, "Where will the table be?").max(200),
  guests: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  // Honeypot — humans never see or fill this.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type Inquiry = z.infer<typeof inquirySchema>;
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;
