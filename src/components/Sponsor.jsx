import React, { useEffect, useState } from "react";
import banner from "../assets/banners/Partner.png";
import { Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { baseURL } from "../constants/constant";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import { getPartner } from "../api/userApi";

function Sponsor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let Data = getPartner();
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
          <h1 className="text-5xl">Club Partners</h1>
        </div>
      </div>
      <div className="bg-slate-200 flex flex-wrap max-w-screen">
        {data.map((item,index) => (
          <div key={index} className="h-96 w-1/3 p-1 flex items-center justify-center ">
            <div className="bg-white h-5/6 w-5/6 drop-shadow-xl shadow-black">
              <div className="p-5 px-7">
                <div className="bg-slate-200 p-2 flex items-center justify-center">
                  <img className="h-20"
                  src={`${baseURL}/${item.logo}`}
                  alt="" />
                </div>
              </div>
              <div className="flex px-6 py-2">
                <div className="w-1/2 text-start">
                  <h1>Partners name:</h1>
                </div>
                <div className="w-1/2 text-end">
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div className="flex px-6 py-2">
                <div className="w-1/2 text-start">
                  <h1>Country:</h1>
                </div>
                <div className="w-1/2 text-end">
                  <h1>{item.place}</h1>
                </div>
              </div>
              <div className="flex px-6 py-2">
                <div className="w-1/2 text-start">
                  <h1>Joined:</h1>
                </div>
                <div className="w-1/2 text-end">
                <Moment format="YYYY MMMM">{item.date}</Moment>
                </div>
              </div>

              <div className="flex items-center justify-center p-3 text-blue-500 hover:text-blue-900 text-lg font-semibold">
                <Link to="https://youtu.be/uQkOtFDvCUU">Visit the Website</Link>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="h-72 w-1/3 p-1 flex items-center justify-center ">
          <div className="bg-white h-5/6 w-5/6">hi</div>
        </div>
        <div className="h-72 w-1/3 p-1 flex items-center justify-center ">
          <div className="bg-white h-5/6 w-5/6">hi</div>
        </div> */}
      </div>
    </div>
  );
}

export default Sponsor;
