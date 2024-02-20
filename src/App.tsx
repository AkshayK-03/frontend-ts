import { Routes, Route } from "react-router-dom";
import "./global.css";
import SignIn from "./auth/NewUser/SignIn";
import Home from "./root/pages/Home";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
import Verification from "./auth/NewUser/Verification";
import Details from "./auth/NewUser/Details";
import Pincode from "./auth/NewUser/Pincode";
import AuthSignupLayout from "./auth/AuthSignupLayout";
import SignUp from "./auth/ExistingUser/SignUp";

const App = () => {
  return (
          <main className="flex h-screen">
            <Routes>
              <Route element={<AuthSignupLayout/>}>
                <Route path="/signup" element={<SignUp/>} />
              </Route>
              
                {/**Public Routes */}
              <Route element={<AuthLayout/>}>
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/verification" element={<Verification/>}/>
                <Route path="/details" element={<Details/>} />
                <Route path="/pincode" element={<Pincode/>} />
              </Route>

                {/**Private Routes */}
              <Route element={<RootLayout/>}>
                <Route index element={<Home />}/>
              </Route>    
            </Routes>

          </main>
  )
}

export default App