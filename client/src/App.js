import logo from "./logo.svg";
import "./App.css";
import Registeration from "./pages/Registeration";
import Login from "./pages/Login";
import Activate2FA from "./pages/Activate2FA";
import Deactivate from "./pages/Deactivate";
import VerifyOTP from "./pages/VerifyOTP";
import { Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import IsEmailVarified from "./pages/IsEmailVarified";
function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Registeration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/activate" element={<Activate2FA/>}/>
      <Route path="/deactivate" element={<Deactivate/>}/>
      <Route path="/verify-otp/:id" element={<VerifyOTP/>}/>
      <Route path="/auth/:id/verify/:token" element={<IsEmailVarified/>}/>
    
    </Routes>
   
   </>
  );
}

export default App;
