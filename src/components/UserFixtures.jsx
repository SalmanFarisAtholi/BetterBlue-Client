import React, { useEffect, useState } from "react";
import banner from "../assets/banners/userFixture.png";
import { getMatch } from "../api/userApi";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { baseURL } from "../constants/constant";
import Footer from "./Footer";
function UserFixtures() {
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
    <div>
      <div
        className=" w-ful flex items-center bg-cover justify-start p-44"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-darkPurple">
          <h1 className="text-5xl">Fixtures</h1>
        </div>
      </div>
      <div className="bg-darkPurple pb-16">
        <div className="text-white text-center text-3xl py-14">
          <h1>Upcoming Games</h1>
        </div>

        {data.map((item) => (
          <div className="p-10 my-6 flex items-center justify-evenly gap-2 backdrop-blur-md  border-solid border-2 border-sky-500 mx-20  bg-opacity-50 shadow-2xl shadow-black">
            <div className="flex items-center justify-center">
              <div className="text-center  text-white">
                <img className=" h-36 w-36" src={logo} alt="" />
                <h1>Better Blue FC</h1>
              </div>
              <div className="w-12 flex justify-center items-center">
                <div className="w-12 h-8  border-2 border-slate-300 flex justify-center items-center">
                  <h1 className="text-white">VS</h1>
                </div>
              </div>
              <div className="text-center  text-white ml-2">
                <img
                  className=" h-36 w-36"
                  src={`${baseURL}/${item.opponentId.logo}`}
                  alt=""
                />
                <h1>{item.opponentId.name}</h1>
              </div>
            </div>
            <div className="text-white text-center">
              <h1 className="p-2">{item.matchType}</h1>
              <h1 className="p-2">
                {" "}
                <Moment format="DD MMMM YYYY  hh:mm A">{item.matchTime}</Moment>
              </h1>
              <h1 className="p-2">{item.home}</h1>
            </div>
            <div className="text-white">
              <h1 className="hover:shadow-2xl shadow-white">
                <Link to={`/headToHead/${item._id}`}>
                  More & Get Tickets Now
                </Link>
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default UserFixtures;
