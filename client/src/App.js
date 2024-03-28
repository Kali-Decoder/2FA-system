import logo from "./logo.svg";
import "./App.css";
import Registeration from "./pages/Registeration";
import Login from "./pages/Login";
import Activate2FA from "./pages/Activate2FA";
import Deactivate from "./pages/Deactivate";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
  return (
   <>
     <Registeration/>
     <Login/>
     <Activate2FA/>
     <Deactivate/>
     <VerifyOTP/>
   </>
  );
}

export default App;
