import React from "react";
import banner from "../assets/banners/home.png";

function UserHome() {
  return (
    <div>
      <div
        className="h-screen w-ful flex items-center bg-cover justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" text-center">
          <h1 className="text-lg font-semibold uppercase pb-10">We Are better blue FC</h1>
          <div className="text-darkPurple font-bold text-5xl">
            <h1>Teamwork makes the </h1>
            <h1> Dream work</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
