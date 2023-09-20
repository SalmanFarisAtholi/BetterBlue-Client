import React from "react";
import banner from "../assets/banners/home.png";
import champions from "../assets/cups/champions.png";
import league from "../assets/cups/leage.png";
import kids from "../assets/cups/kids.png";
import women from "../assets/cups/women.png";
import ucl from "../assets/banners/ucl.png";
import la from "../assets/banners/league.png";
import wla from "../assets/banners/wleague.png";
import junior from "../assets/banners/junior.png";
function UserHome() {
  return (
    <div>
      <div
        className="h-screen w-ful flex items-center bg-cover justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" text-center">
          <h1 className="text-lg font-semibold uppercase pb-10">
            We Are better blue FC
          </h1>
          <div className="text-darkPurple font-bold text-5xl">
            <h1>Teamwork makes the </h1>
            <h1> Dream work</h1>
          </div>
        </div>
      </div>

      {/* <div className="bg-darkPurple flex text-white">
        <div className="w-1/2 p-16">
          <div className="">
            <img src={banner} />
          </div>
        </div>
        <div className="w-1/2 p-36">
          <h1>Match result</h1>
          <h1>Watch our previous match Highlights</h1>
        </div>
      </div> */}

      <div className="bg-darkPurple">
        <div className="text-white text-center text-3xl py-14">
          <h1>Participating Tournaments</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 p-8">
            <h1 className="text-white text-center p-2 text-2xl">
              Premier League
            </h1>

            <div className="flex items-center justify-center">
              <img src={la} alt="" />
            </div>
          </div>
          <div className="w-1/2 p-8">
          <h1 className="text-white text-center p-2 text-2xl">
              Women's League
            </h1>
            <div className="flex items-center justify-center">
              <img src={wla} alt="" />
            </div>
          </div>
          <div className="w-1/2 p-8">
          <h1 className="text-white text-center p-2 text-2xl">
              Champion's Cup
            </h1>
            <div className="flex items-center justify-center">
              <img src={ucl} alt="" />
            </div>
          </div>
          <div className="w-1/2 p-8">
          <h1 className="text-white text-center p-2 text-2xl">
              Junior Champion's Cup
            </h1>
            <div className="flex items-center justify-center">
              <img src={junior} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 flex  justify-evenly py-4">
        <div className="text-center p-2">
          <div className="flex items-center justify-center">
            <img
              className="w-32 h-40 hover:cursor-pointer"
              src={champions}
              alt=""
            />
          </div>
          <h1 className="text-6xl">5</h1>
          <h1 className="text-2xl font-semibold">Champions Cup</h1>
        </div>
        <div className="text-center p-2">
          <div className="flex items-center justify-center">
            <img
              className="w-32 h-40 hover:cursor-pointer"
              src={women}
              alt=""
            />
          </div>
          <h1 className="text-6xl">13</h1>
          <h1 className="text-2xl font-semibold">League Cup</h1>
        </div>
        <div className="text-center p-2">
          <div className="flex items-center justify-center">
            <img
              className="w-32 h-40 hover:cursor-pointer "
              src={league}
              alt=""
            />
          </div>
          <h1 className="text-6xl">6</h1>
          <h1 className="text-2xl font-semibold">Domestic Cup</h1>
        </div>
        <div className="text-center p-2">
          <div className="flex items-center justify-center">
            <img className="w-32 h-40 hover:cursor-pointer" src={kids} alt="" />
          </div>
          <h1 className="text-6xl">10</h1>
          <h1 className="text-2xl font-semibold">Womens League</h1>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
