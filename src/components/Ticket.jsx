import React, { useState, useEffect } from "react";
import banner from "../assets/banners/ticket.png";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import vs from "../assets/banners/vs2.png";
import stadium from "../assets/Stadium/My project-1.png";
import { getStand } from "../api/adminApi";
import { getOneMatch } from "../api/userApi";
import { baseURL } from "../constants/constant";
import Checkout from "../components/Checkout";
import Moment from "react-moment";

import { useParams } from "react-router-dom";

function Ticket() {
  const [data, setData] = useState([]);
  const { id } = useParams(); 
  const [match, setMatch] = useState([]);

  useEffect(() => {
    let Data = getStand();
    Data.then((data) => {
      // console.log(data.data);
      setData(data.data);
    }).catch((error) => {
      console.log(error);
    });

    let matchData = getOneMatch(id);
    matchData
      .then((data) => {
        console.log(data.data);
        setMatch(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <div
        className=" w-full flex items-center justify-start p-44"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-darkPurple">
          <h1 className="text-5xl font-semibold">Tickets</h1>
        </div>
      </div>
      <div>
        <div className="h-80 w-full text-white flex justify-evenly items-center bg-litePurple">
          <div className="text-center">
            <img className=" h-52 w-52" src={logo} alt="" />
            <h1 className="text-xl font-semibold">Better Blue FC</h1>
          </div>
          <div className="text-center">
            <img className=" h-52 w-52" src={vs} alt="" />
            <h1 className="p-2 text-2xl">{match.matchType}</h1>

            <Moment format="DD MMMM YYYY  hh:mm A">{match.matchTime}</Moment>
          </div>
          <div className="text-center">
            <img
              className=" h-52 w-52"
              src={`${baseURL}/${match.opponentId?.logo}`}
              alt=""
            />
            <h1 className="text-xl font-semibold">{match.opponentId?.name}</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center p-10">
          <div className="flex-row items-center justify-center">
            <h1 className="text-darkPurple text-lg sm:text-4xl font-bold">
              ESTADIO RADOLF
            </h1>
            <h1 className="text-black text-lg sm:text-4xl font-bold">
              CAPACITY-46800
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-5/6 bg-slate-300">
            <img className="w-5/6 sm:w-3/6 pt-3" src={stadium} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-5/6 bg-slate-300">
            <div className="bg-slate-50 w-1/2 m-5 flex items-center justify-center">
              <table className="table-auto w-full">
                {/* <tbody className="font-semibold text-sm sm:text-base">
                  {data.map(
                    (item) =>
                      item.price !== 0 && (
                        <tr className="flex text-center items-center justify-around p-3">
                          <td className="w-1/4">{item.standName}</td>
                          <td className="w-1/4">₹ {item.price}</td>
                          <td className="w-1/4">
                            <button className="bg-darkPurple text-white rounded-sm p-2">
                              BOOK
                            </button>
                          </td>
                        </tr>
                      )
                  )}
                </tbody> */}
                <tbody className="font-semibold text-sm sm:text-base">
                  {data.map(
                    (item) =>
                      item.price !== 0 && (
                        <tr className="flex text-center items-center justify-around p-3">
                          <td className="w-1/4">{item.standName}</td>
                          <td className="w-1/4">₹ {item.price}</td>
                          {/* <td className="w-1/4">
                            <button className="bg-darkPurple text-white rounded-sm p-2">
                              BOOK
                            </button>
                          </td> */}
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-10 ">
          <div className="flex items-center justify-center w-5/6 bg-slate-300">
            <div className="bg-slate-50 w-11/12 m-5 text-center text-red-700 text-2xl font-semibold">
              <h1>*You can't Book VIP seats and Media seats</h1>
              <h1>
                *You can't Book NL stand seats.Because its for opposite team
                fans.
              </h1>
            </div>
          </div>
        </div>

     

        <div></div>
      </div>
      <Checkout id={id} />
    </div>
  );
}

export default Ticket;
