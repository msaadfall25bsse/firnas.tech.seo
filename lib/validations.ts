import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  phone: z
    .string()
    .min(7, { message: "Please provide a valid phone number." })
    .max(25, { message: "Phone number is too long." }),
  companyName: z
    .string()
    .max(100, { message: "Company name cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, { message: "Please select a service." }),
  budget: z
    .string()
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(150, { message: "Subject cannot exceed 150 characters." }),
  message: z
    .string()
    .min(15, { message: "Message must be at least 15 characters so we can understand your requirements." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
  // Honeypot field for spam prevention (must remain empty)
  websiteField: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

