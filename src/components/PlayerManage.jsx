import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPlayer } from "../api/adminApi";
import { baseURL } from "../constants/constant";

function PlayerManage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let Data = getPlayer();
    Data.then((data) => {
      setData(data.data);
      console.log(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div className="min-h-screen bg-litePurple">
      <div className="flex items-center justify-center">
        <div className="m-8 p-5 flex items-center justify-center font-semibold bg-darkPurple text-white hover:shadow-md  hover:shadow-black">
          <Link to="addPlayer">ADD NEW PLAYER</Link>
        </div>
      </div>
      {data.map((item, index) => (
        <div className="flex items-center justify-center">
          <div className="w-4/5 bg-darkPurple p-5 mb-4 text-white flex justify-evenly items-center">
            <div className="w-1/5 flex justify-center items-center">
              <img
                className="w-32 h-32"
                src={`${baseURL}/${item.photo}`}
                alt=""
              />
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <h1 className="text-xl">{item.name}</h1>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-5xl font-semibold">{item.number}</h1>
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <h1 className="text-xl">{item.position}</h1>
            </div>
            <div className="w-1/5 flex justify-center items-center">
              
              <h1 className="bg-red-700 p-1 text-lg font-semibold">
                <Link>REMOVE</Link>
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerManage;
