import { Input, Button } from "@material-tailwind/react"

const SignUp = () => {
  return (
    <>
      <div className="right-container"> 
        <div className="row2">
          <div className="signup-form">
            <h3 className="txt-1">Welcome back,</h3>
            <h4 className="txt-2">Enter below details to login</h4>
            <div className="w-100 input">
              <Input color="teal" label="Email ID" crossOrigin={undefined} id="emailid"/>
              <div className="btn">
                <Button className="btn-login" children={"login"} placeholder={undefined}></Button>
              </div>
              <div className="btn">
                <img src="public/assets/Icons/search.png" alt="search" width="25px" height="25px" className="search"/>
                <Button className="btn-signup" children={"Signin in with google"} placeholder={undefined}>
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp