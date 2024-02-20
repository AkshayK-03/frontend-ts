import * as z from "zod"


export const signupValidation = z.object({
    email: z.string().email(),
    employeeID: z.string().min(5)
  })


  export const signinValidation = z.object({
    employeeID: z.string().min(5),
    password: z.string().min(8,{message:"Enter correct password"})
  })