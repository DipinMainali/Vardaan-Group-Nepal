import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
  business: z.enum(["travels", "furnishings", "general"], {
    required_error: "Please select a business vertical",
  }),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  recaptchaToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export const teamMemberSchema = z.object({
  name: z.string().min(2, "Name is required"),
  role: z.string().min(2, "Role is required"),
  bio: z.string().optional(),
  image: z.string().url("Please enter a valid image URL").optional(),
  order: z.number().int().min(0).default(0),
});

export type TeamMemberData = z.infer<typeof teamMemberSchema>;

export const contentSchema = z.object({
  key: z.string().min(1, "Content key is required"),
  title: z.string().optional(),
  body: z.string().optional(),
  image: z.string().optional(),
  metadata: z.record(z.string()).optional(),
});

export type ContentData = z.infer<typeof contentSchema>;
