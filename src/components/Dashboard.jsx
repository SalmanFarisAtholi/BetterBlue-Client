import React from "react";
import backgroundImage from "../assets/banners/dashbord.jpg";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
// import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  function userLogout() {
    localStorage.removeItem("admintoken");
    navigate("/admin");
  }
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-64 w-64">
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-96 flex items-center justify-center">
          <div className="bg-darkPurple">
            <div className="hover:cursor-pointer bg-litePurple">
              <h3 className="text-1xl text-slate-100 text-2xl font-bold">
                <button
                  className="bg-darkPurple p-3 hover:shadow-xl"
                  onClick={userLogout}
                >
                  Log Out
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
