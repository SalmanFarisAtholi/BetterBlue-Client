import React from "react";
import banner from "../assets/banners/about.png";
import champions from "../assets/cups/champions.png";
import league from "../assets/cups/leage.png";
import kids from "../assets/cups/kids.png";
import women from "../assets/cups/women.png";
import jersey from "../assets/banners/jersey.png";
import academy from "../assets/banners/academy.png";
import womens from "../assets/banners/womens.png";
function About() {
  return (
    <div>
      <div
        className="w-ful h-4/5 flex items-center  bg-cover justify-start p-44"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-darkPurple">
          <h1 className="text-5xl">About Us</h1>
        </div>
      </div>
      <div className="flex h-40 p-6">
        <div className="text-4xl flex text-center w-2/5 justify-center">
          <h1>
            {" "}
            The History of <br /> Better Blue FC
          </h1>
        </div>
        <div className="w-3/5">
          <p>
            Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do
            eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercition ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      {/* <div className="flex items-center justify-evenly">
        <div>hi</div>
         <div>hi</div>
        <div>hi</div>
      </div> */}
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
      <div className="bg-darkPurple p-12">
        <div className="bg-litePurple px-10 my-5">
          <div className="p-8 flex">
            <img src={jersey} alt="" />
            <div className="text-white text-center m-10">
              <h1 className="text-6xl">Official Jersey Store</h1>
              <p>
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet. Sed
                pretium, ligulasolli laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh.
              </p>
              <h1 className="text-2xl">Link To Website >>>> </h1>
            </div>
          </div>
        </div>
        <div className="bg-litePurple px-10 my-5">
          <div className="p-8 flex">
            <div className="text-white text-center m-10">
              <h1 className="text-6xl">Women's Team</h1>
              <p>
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet. Sed
                pretium, ligulasolli laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh.
              </p>
              <h1 className="text-2xl">Link To Website >>>> </h1>
            </div>
            <img src={womens} alt="" />
          </div>
        </div>
        <div className="bg-litePurple px-10 my-5">
          <div className="p-8 flex">
            <img src={academy} alt="" />
            <div className="text-white text-center m-9">
              <h1 className="text-6xl">Better Blue Academy</h1>
              <p>
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet. Sed
                pretium, ligulasolli laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh.
              </p>
              <h1 className="text-2xl">Link To Website >>>> </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
