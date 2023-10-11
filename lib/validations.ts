import * as z from "zod";

export const questionsSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(130, { message: "Title must not exceed 130 characters." }),
  explanation: z.string().min(100, {
    message: "Explanation must be at least 100 characters.",
  }),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3), // We must have an array of strings that contains at least 1 character and must not exceed 15 caracters. We also need to have at least 1 tag and must not exceed 3 tags.
});

export type questionsSchemaType = z.infer<typeof questionsSchema>;
