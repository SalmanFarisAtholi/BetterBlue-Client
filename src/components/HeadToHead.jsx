import React from "react";
import banner from "../assets/banners/headtohead1.png";
import vs from "../assets/banners/vs.png";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/Logo/Better_Blue-removebg-preview.png";

function HeadToHead() {
  return (
    <div>
      <div
        className=" w-full flex items-center bg-no-repeat bg-cover justify-center p-44"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" w-3/4 text-white flex justify-between">
          <img className=" h-52 w-52" src={logo} alt="" />
          <img className=" h-52 w-52" src={vs} alt="" />
          <img className=" h-52 w-52" src={logo} alt="" />
        </div>
      </div>
      <div className="bg-slate-400 flex items-center justify-center w-full py-20">
        <div className="bg-yellow-50  w-4/5">
          <div className="flex items-center justify-evenly p-16 text-black text-3xl font-semibold uppercase">
            <div className="w-72 text-center">
              <h1>Head To Head</h1>
              <h1 className="pt-3">34</h1>
            </div>
            <div className="w-72 text-center">
              <h1>Draws</h1>
              <h1 className="pt-3">34</h1>
            </div>
          </div>

          <div className="flex text-center justify-evenly text-lg font-semibold p-14 pt-0">
            <div className="text-center w-1/3 border-solid border-2 border-sky-50 shadow-sm shadow-black">
              <h1>Wins</h1>
              <div className="flex items-center justify-evenly py-4">
                <div className="text-blue-900">
                  <h1 className="text-5xl">14</h1>
                  <h2>Better Blue FC</h2>
                </div>
                <div className="text-red-600">
                  <h1 className="text-5xl">10</h1>
                  <h2>Better Blue FC</h2>
                </div>
              </div>
            </div>
            <div className=" text-center w-1/3 border-solid border-2 border-sky-50 shadow-sm shadow-black">
              <h1> Win Probability</h1>
              <div className="flex items-center justify-evenly py-4">
                <div className="text-blue-900">
                  <h1 className="text-5xl">14%</h1>
                  <h2>Better Blue FC</h2>
                </div>
                <div className="text-red-600">
                  <h1 className="text-5xl">10%</h1>
                  <h2>Better Blue FC</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-400 h-16 w-full px-36 text-end text-3xl">
        <Link to={"/ticket"}>
          <h1 className="text-darkPurple font-bold">Get Tickets Now</h1>
        </Link>
      </div>
    </div>
  );
}

export default HeadToHead;
