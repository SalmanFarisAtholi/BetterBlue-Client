import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMatch } from "../api/adminApi";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import Moment from "react-moment";
import { baseURL } from "../constants/constant";

function Fixtures() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let Data = getMatch(); 
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
          <Link to="addMatch">ADD NEW MATCH</Link>
        </div>
      </div>
      {data.map((item) => (
          <div className="flex h-72 items-center justify-center border-2 border-slate-500 bg-darkPurple my-5 mx-32 gap-2 ">
            <div className="w-1/2 flex h-3/4 gap-2 items-center justify-evenly ">
              <div className="text-center text-white">
                <img className="w-40 h-40" src={logo} alt="" />
                <h1>Better Blue FC</h1>
              </div>
              <div className="w-12 flex justify-center items-center">
                <div className="w-12 h-8 bg-red-600 border-2 border-slate-300 flex justify-center items-center">
                  <h1 className="text-white">VS</h1>
                </div>
              </div>
              <div className="text-center text-white">
                <img className="w-40 h-40" src={`${baseURL}/${item.opponentId.logo}`} alt="" />
                <h1 className="pt-2">{item.opponentId.name}</h1>

              </div>
            </div>

            <div className="w-1/2  h-3/4 gap-2 p-5">
              <div className="text-center text-white font-serif my-6">
                <h1>{item.matchType}</h1>
              </div>
              <div className="text-center text-white font-mono my-6">
                <h1>
                  <Moment format="DD MMMM YYYY  hh:mm A">
                    {item.matchTime}
                  </Moment>
                </h1>
              </div>
              <div className="text-center text-white font-sans my-6 hover:py-1 hover:cursor-pointer">
                <h1>{item.home}</h1>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Fixtures;
