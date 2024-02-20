import { Input , Button } from "@material-tailwind/react"
const Pincode = () => {
  return (
    
        <div className="row2">
          <div className="signup-form">
            <h3 className="v-txt1">Setup 4 digit PIN</h3>
            <h4 className="v-txt2">We ask you each time when you are creating an event</h4>
            <div className="w-100 pincode-input">
              <Input color="teal" label="Enter 4 digit PIN" type="password" crossOrigin={undefined} id="pincode"/>
                <div>
                  <Input color="teal" label="Re-enter PIN" type="password" crossOrigin={undefined} id="pincode"/>
                </div>
              <Button className="btn-pincode" children={"Finish"} placeholder={undefined}></Button>
            </div>
            
          </div>
        </div>
  )
}

export default Pincode