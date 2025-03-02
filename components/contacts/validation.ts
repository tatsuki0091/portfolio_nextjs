import { z } from 'zod';

export function validateInfo(
  subject: string,
  emailAddress: string,
  message: string
) {
  const contactSchema = z.object({
    subject: z.string().min(1).max(50),
    message: z.string().min(1).max(400),
    emailAddress: z.string().email(),
  });
  const result = contactSchema.safeParse({
    subject: subject,
    emailAddress: emailAddress,
    message: message,
  });
  return result;
}
