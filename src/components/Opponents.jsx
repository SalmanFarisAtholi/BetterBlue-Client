import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import { getOpponent } from "../api/adminApi";
import { baseURL } from "../constants/constant";

function Opponents() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let Data = getOpponent();
    Data.then((data) => {
      setData(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div className="min-h-screen bg-litePurple">
      <div className="flex items-center justify-center">
        <div className="m-8 p-5 flex items-center justify-center font-semibold bg-darkPurple text-white hover:shadow-md  hover:shadow-black">
          <Link to="addOpponent">ADD NEW OPPONENT</Link>
        </div>
      </div>
      {data.map((item) => (
        <div className="bg-darkPurple rounded flex justify-evenly mx-32 p-2 my-4 text-white text-center">
          <div className="">
            <div className="flex items-center justify-center h-36 w-36">
              <img src={`${baseURL}/${item.logo}`} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-40">
              <h1 className="font-bold text-lg">{item.name}</h1>
              <h1 className="font-bold text-lg text-slate-400">
                {item.shortName}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="font-bold text-xl">TOTAL</h1>
              <h1 className="text-6xl font-bold text-green-500">
                {item.totalMatch}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="font-bold text-xl">WINS</h1>
              <h1 className="text-6xl font-bold text-blue-400">{item.win}</h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="font-bold text-xl ">DRAW</h1>
              <h1 className="text-6xl font-bold text-yellow-500">
                {item.draw}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="font-bold text-xl">LOSE</h1>
              <h1 className="text-6xl font-bold text-red-600">
                {item.totalMatch - item.win - item.draw}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <button
                className="w-10 sm:w-12 rounded bg-amber-600"
              >
                <Link to={`editOpponent/${item._id}`}>EDIT</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Opponents;
