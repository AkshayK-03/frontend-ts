import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/'/>
      ): (
        <>

          <div className="flex flex-right-100 justify-center items-center bg-sky-100 screen-width" >
            <img src="public/assets/Images/signin.png" alt="signin" width="200px" height="100px" />
          </div>

          <section className="right-container">
            <Outlet/>
          </section>
        </>
      )}
    </>
    )
}

export default AuthLayout