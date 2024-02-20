import SignUp from "./ExistingUser/SignUp"


const AuthLayout = () => {
  return (
        <>
          <div className="flex flex-right-100  justify-center items-center left-container screen-width" >
            <img src="public/assets/Images/signup.png" alt="signup" width="429px" height="525px"/>
          </div>
          <section className="right-container">
            <div className="row1">
              <img src="public/assets/Images/Frame.png" alt="logo" width="128.4px" height="30.64px" />
            </div>
            <SignUp />
          </section>
        </>
    )}

export default AuthLayout