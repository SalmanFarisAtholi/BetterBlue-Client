import React from "react";
import backgroundImage from "../assets/banners/dashbord.jpg";

function Dashboard() {
  return (
    <div
      className="h-full w-full bg-cover bg-center opacity-60 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-center">
        <div className="bg-yellow-300 h-96 w-10">hi</div>
        <div className="bg-yellow-300 h-96 w-10">hi</div>
        <div className="bg-yellow-300 h-96 w-10">hi</div>
      </div>
    </div>
  );
}

export default Dashboard;
