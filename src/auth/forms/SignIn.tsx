import { Input, Typography,Button } from "@material-tailwind/react"
const SignIn = () => {
  return (
    <>
      <div className="right-container">
        <div className="row2">
          <div className="signup-form">
            <h3 className="txt-1">Let's create your account</h3>
            <h4 className="txt-2">Enter the details as per the records</h4>
            <div className="w-100 input">
              <Input color="teal" label="Email" crossOrigin={undefined} id="emailid"/>
              <Typography variant="small" color="gray" className="typo-signup" children="Enter the mail ID provided by the college" placeholder="">
              </Typography>
                <div>
                  <Input color="teal" label="EmployeeID" crossOrigin={undefined} id="employeeid"/>
                </div>
              <Button className="btn-register" children={"Register"} placeholder={undefined}></Button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn

