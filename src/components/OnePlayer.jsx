import React, { useState, useEffect } from "react";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import { IoFootballSharp } from "react-icons/io5";
import { PiTShirtFill } from "react-icons/pi";
import { GiBootKick } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { getOnePlayer } from "../api/userApi";
import { baseURL } from "../constants/constant";
import Footer from "./Footer";
import Moment from "react-moment";

function OnePlayer() {
  const { id } = useParams();
  const [player, setplayer] = useState([]);
  useEffect(() => {
    let Data = getOnePlayer(id);
    Data.then((data) => {
      console.log(data.data);
      setplayer(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div className="bg-darkPurple">
      <div className="flex p-5 ">
        <div className="w-5/12 flex items-center justify-center">
          <img className="border border-sky-500 w-5/6 " 
            src={`${baseURL}/${player.photo}`}
            />
        </div>
        <div className="w-7/12 text-white">
          <h1 className="text-5xl">{player.name}</h1>
          <h1 className="mt-3 text-4xl text-slate-400 border-r-4 border-white">
            {player.number} | <span className="text-white">{player.position}</span>
          </h1>
          <div className="flex justify-start items-center h-full">
            <div className="flex flex-col gap-3">
              <h1 className="uppercase text-slate-400">Date of Birth:</h1>
              <Moment format="YYYY MMMM DD">{player.DOB}</Moment>
              <h1 className="uppercase text-slate-400">Place of Birth:</h1>
              <h1 className="text-xl">{player.place}</h1>
              <h1 className="uppercase text-slate-400">Nationality:</h1>
              <h1 className="text-xl">{player.nationality}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-14">
        <div className="bg-glassy flex items-center justify-evenly text-white h-28">
          <div className="flex gap-4">
            <div className="text-6xl">
              <PiTShirtFill />
            </div>
            <div>
              <h1 className="text-4xl">{player.totalMatch}</h1>
              <h1>Appearances</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-6xl">
              <IoFootballSharp />
            </div>
            <div>
              <h1 className="text-4xl">{player.goal}</h1>
              <h1>Goals</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-6xl">
              <GiBootKick />
            </div>
            <div>
              <h1 className="text-4xl">{player.assist}</h1>
              <h1>Assists</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OnePlayer;
