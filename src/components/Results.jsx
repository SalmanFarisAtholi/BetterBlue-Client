import React, { useEffect, useState } from "react";
import banner from "../assets/banners/result.png";
import { getResult } from "../api/userApi";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { baseURL } from "../constants/constant";
import Footer from "./Footer";

function Results() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let Data = getResult();
    Data.then((data) => {
      setData(data.data);
      console.log(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div>
      <div
        className=" w-full flex items-center bg-cover justify-start p-44"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-darkPurple">
          <h1 className="text-5xl">Results</h1>
        </div>
      </div>
      <div className="bg-darkPurple pb-16">
        <div className="text-white text-center text-3xl py-14">
          <h1>Last Match Results</h1>
        </div>
        {data.map((item) => (
          <div  className="p-10 my-6 flex items-center justify-evenly gap-2 backdrop-blur-md  border-solid border-2 border-yellow-100 mx-20  bg-opacity-50 shadow-2xl shadow-black">
            <div className="flex items-center justify-center">
              <div className="text-center  text-white">
                <img className=" h-36 w-36" src={logo} alt="" />
                <h1>Better Blue FC</h1>
              </div>
              <div className="w-20 flex justify-center items-center">
                <div className="w-20 h-11  border-2 border-slate-300 flex justify-center items-center">
                  <h1 className="text-white">
                    {item.scored} - {item.conceded}
                  </h1>
                </div>
              </div>
              <div className="text-center  text-white ml-2">
                <img
                  className=" h-36 w-36"
                  src={`${baseURL}/${item.match.opponentId.logo}`}
                  alt=""
                />
                <h1>{item.match.opponentId.name}</h1>
              </div>
            </div>
            <div className="text-white text-center">
              <h1 className="p-2">{item.match.matchType}</h1>
              <h1 className="p-2">
                <Moment format="DD MMMM YYYY  hh:mm A">{item.match.matchTime}</Moment>
              </h1>
              <h1 className="p-2">{item.match.home}</h1>
            </div>
            <div className="text-white">
              <h1 className="hover:shadow-2xl shadow-white">
              <Link to={`/oneResult/${item._id}`}>More..</Link>             </h1>
            </div>
            <div className="text-white">
              <h1 className="hover:shadow-2xl shadow-white">
                <Link to={item.link} target="_blank">Watch Hilights</Link>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
