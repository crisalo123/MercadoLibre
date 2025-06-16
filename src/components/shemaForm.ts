import { z } from "zod";

export const createFormSailSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  country: z
    .number()
    .min(1, "Country is required")
    .or(z.string().min(1, "Country is required")),
  captcha: z.string().min(1, "Please complete the captcha"),
});

export type CreateFormSailSchemaType = z.infer<typeof createFormSailSchema>;
