import React from "react";
import stadium from "../assets/Stadium/My project-1.png";

function Stadium() {
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
        <div className="w-5/6 bg-slate-300">
          <button className="bg-slate-800 text-rose-50 font-bold rounded-md">ADD</button>
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
                <tr className="flex justify-evenly p-3">
                  <td>EAST UPPER</td>
                  <td>12000 Person</td>
                  <td>₹ 450</td>
                  <td>
                    <button className="w-10 sm:w-12 rounded bg-amber-600">
                      EDIT
                    </button>
                  </td>
                </tr>
                <tr className="flex justify-evenly p-3">
                  <td>WEST UPPER</td>
                  <td>4000 Person</td>
                  <td>₹ 360</td>
                  <td>
                    <button className="w-10 sm:w-12 rounded bg-amber-600">
                      EDIT
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            ​
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stadium;
