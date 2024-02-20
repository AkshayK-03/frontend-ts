import { Input, Button } from "@material-tailwind/react"

const Verification = () => {
    return (
        <>
          <div className="right-container">
            <div className="row2">
              <div className="signup-form">
                <h3 className="txt-1">Enter the verification code</h3>
                <h4 className="txt-2">We've sent a 6 digit code to your mail</h4>
                <div className="verification">
                  <Input color="teal" label="Verification Code" crossOrigin={undefined} id="verificationcode"/>
                  <div className="btn">
                    <Button className="btn-verification" children={"Register"} placeholder={undefined}></Button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </>
      )
    }

export default Verification