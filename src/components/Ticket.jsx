import React, { useState, useEffect } from "react";
import banner from "../assets/banners/ticket.png";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import vs from "../assets/banners/vs2.png";
import stadium from "../assets/Stadium/My project-1.png";
import { getStand, editStand } from "../api/adminApi";
import { Link, useNavigate } from "react-router-dom";

function Ticket() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    let Data = getStand();
    Data.then((data) => {
      // console.log(data.data);
      setData(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
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
        <div className="h-64 w-full text-white flex justify-evenly items-center bg-litePurple">
          <img className=" h-52 w-52" src={logo} alt="" />
          <img className=" h-52 w-52" src={vs} alt="" />
          <img className=" h-52 w-52" src={logo} alt="" />
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
            <img className="w-5/6 sm:w-3/6" src={stadium} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-5/6 bg-slate-300">
            <div className="bg-slate-50 w-11/12 m-5 flex items-center justify-center">
              <table className="table-auto w-full">
                <tbody className="font-semibold text-sm sm:text-base">
                  {data.map((item) => (
                    <tr className="flex text-center items-center justify-around p-3">
                      <td className="w-1/4">{item.standName}</td>
                      <td className="w-1/4">{item.capacity}</td>
                      <td className="w-1/4">₹ {item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-10 ">
          <div className="flex items-center justify-center w-5/6 bg-slate-300">
            <div className="bg-slate-50 w-11/12 m-5 text-center text-red-700 text-2xl font-semibold">
              <h1>*You cant Book VIP seats and Media seats</h1>
              <h1>
                *You cant Book NL stand seats.Because its for opposite team
                fans.
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center text-center pb-9">
          <div className="bg-litePurple w-5/6 p-5 rounded-xl ">
            <h1 className="font-bold text-5xl">Stadium Rules</h1>
            <div className="text-slate-200 mt-8 leading-loose font-sans flex justify-center text-start">
              <ol className="list-decimal pl-6">
                <li>
                  No Smoking: Smoking is not allowed in the stadium seating
                  areas.
                </li>
                <li>
                  No Outside Food and Beverages: Please do not bring outside
                  food or drinks into the stadium.
                </li>
                <li>
                  Security Checks: Be prepared for bag checks and metal detector
                  screenings at the entrance.
                </li>
                <li>
                  No Weapons or Dangerous Items: Weapons and any dangerous items
                  are strictly prohibited.
                </li>
                <li>
                  Alcohol Policies: Consume alcohol only in designated areas and
                  adhere to age restrictions.
                </li>
                <li>
                  No Unauthorized Recording Devices: Do not use cameras or
                  recording devices without permission.
                </li>
                <li>
                  Stay in Designated Areas: Respect restricted access areas and
                  stay in your designated seats or sections.
                </li>
                <li>
                  Respect Other Fans: Be courteous to fellow fans, players, and
                  stadium staff.
                </li>
                <li>
                  No Reentry: Once you leave the stadium, reentry may not be
                  allowed.
                </li>
                <li>
                  Follow Emergency Procedures: Familiarize yourself with
                  emergency procedures and exit routes.
                </li>
                <li>
                  Respect the Venue: Avoid damaging or defacing stadium property
                  or facilities.
                </li>
                <li>
                  Prohibited Items: Check for a list of prohibited items such as
                  large bags, umbrellas, etc.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
