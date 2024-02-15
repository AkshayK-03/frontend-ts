import * as z from "zod"


export const signupValidation = z.object({
    username: z.string().min(2).max(50),
  })