
import { zodResolver } from "@hookform/resolvers/zod"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signupValidation } from "@/lib/validations"
import { z } from "zod"



const SignUp = () => {
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <>
    <div className="row1">
      <div className="logo">
       <img src="public/assets/Icons/Icon.png" alt="icon" width="150px" height="150px"/>
      </div>
    </div>
    <div className="row2">
      <div className="signup-form">
        <h1 className="txt-1">Let's create your account</h1>
        <h6 className="txt-2">Enter the details as per the records</h6>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter mail ID provided by college
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
    </>
  )
}

export default SignUp

/**<div className="logo">
      <img src="public/assets/Icons/Icon.png" alt="icon" width="100px" height="100px"/>
    </div>**/



/**<div className="signup-form" >
      <Button variant="default">Register</Button>
    </div>**/