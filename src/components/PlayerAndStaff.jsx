import React, { useEffect, useState } from "react";
import banner from "../assets/banners/playerpage.png";
import { getPlayer } from "../api/userApi";
import { Link } from "react-router-dom";
import { baseURL } from "../constants/constant";

function PlayerAndStaff() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let Data = getPlayer();
    Data.then((data) => {
      console.log(data.data);
      setData(data.data);
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
          <h1 className="text-5xl">Players</h1>
        </div>
      </div>
      <div className="bg-darkPurple">
        <div className="flex flex-wrap max-w-screen">
          {data.map((item) => (
            <div className="hover:bg-litePurple w-1/3 p-5 text-white text-center text-3xl">
                <Link to={`/getOnePlayer/${item._id}`}>
                  <div className="flex justify-center items-center">
                    <img
                      className="h-80 w-5/6 "
                      src={`${baseURL}/${item.photo}`} alt=""
                    />
                  </div>
                  <div className="">
                    <h1>{item.name}</h1>
                    <h1>{item.number}</h1>{" "}
                  </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayerAndStaff;
