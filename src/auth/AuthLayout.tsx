import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/veification'/>
      ): (
        <>

          <div className="flex flex-right-100  justify-center items-center left-container screen-width" >
            <img src="public/assets/Images/siginin.png" alt="signin" width="279.43px" height="546px"/>
          </div>

          <section className="right-container">
            <div className="row1">
              <img src="public/assets/Images/Frame.png" alt="logo" width="128.4px" height="30.64px" />
            </div>
            <Outlet/>
          </section>
        </>
      )}
    </>
    )
}

export default AuthLayout