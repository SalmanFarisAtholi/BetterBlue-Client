import React from "react";
import backgroundImage from "../assets/banners/dashbord.jpg";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import{MdLogout}from"react-icons/md"

function Dashboard() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center opacity-60 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-64 w-64"><img src={logo} alt="" /></div>
      <div className="h-5 w-5">{MdLogout}</div>
      <div className="flex items-center justify-center">
        <div className="h-96 w-96 flex items-center justify-center">
          <div className="bg-yellow-50 h-80 w-80 rounded-lg">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
