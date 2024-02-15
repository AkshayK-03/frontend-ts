import { Routes, Route } from "react-router-dom";
import "./global.css";
import SignUp from "./auth/forms/SignUp";
import SignIn from "./auth/forms/SignIn";
import Home from "./root/pages/Home";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";

const App = () => {
  return (
          <main className="flex h-screen">
            <Routes>
                {/**Public Routes */}
                <Route element={<AuthLayout/>}>
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/signin" element={<SignIn/>} />
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