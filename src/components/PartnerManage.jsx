import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import test from "../assets/News/tedlesso.png";
import { getPartner } from "../api/adminApi";
import { baseURL } from "../constants/constant";
function PartnerManage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let Data = getPartner();
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
          <Link to="addSponsor">ADD NEW PARTNER</Link>
        </div>
      </div>
      {data.map((item, index) => (
        <div className="flex items-center justify-center">
          <div className="w-4/5 bg-darkPurple p-5 mb-4 text-white flex justify-evenly items-center">
            <div className="w-28 h-28 flex justify-center items-center">
              <img
                  src={`${baseURL}/${item.logo}`}
                  alt="" />
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <h1 className="">{item.name}</h1>
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <h1 className="">{item.place}</h1>
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

export default PartnerManage;
