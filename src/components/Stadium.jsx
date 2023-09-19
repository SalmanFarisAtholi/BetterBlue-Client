import React, { useEffect } from "react";
import stadium from "../assets/Stadium/My project-1.png";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { getStand, editStand } from "../api/adminApi";
function Stadium() {
  const [data, setData] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    let Data = getStand();
    Data.then((data) => {
      // console.log(data.data);
      setData(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  
  // const submit = (event) => {
  //   event.preventDefault();
  //   setId(id);
  // };

  return (
    <div className="min-h-screen bg-litePurple">
      <div className="flex items-center justify-center p-10">
        <div className="flex-row items-center justify-center">
          <h1 className="text-slate-50 text-lg sm:text-4xl font-bold">
            ESTADIO RADOLF
          </h1>
          <h1 className="text-stone-400 text-lg sm:text-4xl font-bold">
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
        <div className="w-5/6 bg-slate-300 flex items-center justify-center">
          <button className="bg-darkPurple text-rose-50 font-bold rounded-sm w-24 h-14 hover:bg-litePurple drop-shadow-2xl ">
            <Link  to="addStadium">ADD</Link>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center pb-32 ">
        <div className="flex items-center justify-center w-5/6 bg-slate-300">
          <div className="bg-slate-50 w-11/12 m-5 flex items-center justify-center">
            <table className="table-auto w-full">
              {/* <thead>
                <tr>
                  <th>Stand Name</th>
                  <th>Capacity</th>
                  <th>Ticket Price</th>
                  <th>Option</th>
                </tr>
              </thead> */}
              <tbody className="font-semibold text-sm sm:text-base">
                {data.map((item) => (
                  <tr className="flex text-center items-center justify-around p-3">
                    <td className="w-1/4">{item.standName}</td>
                    <td className="w-1/4">{item.capacity}</td>
                    <td className="w-1/4">₹ {item.price}</td>
                    <td className="w-1/4">
                      <button
                        // onClick={submit(item._id)}
                        className="w-10 sm:w-12 rounded bg-amber-600"
                      >
                        {/* EDIT */}
                        <Link to={`editStand/${item._id}`}>EDIT</Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stadium;
