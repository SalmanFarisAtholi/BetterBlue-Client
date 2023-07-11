import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./components/Profile";
// import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./components/NotFound";
// import Password from "./components/Password";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import Reset from "./components/Reset";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
