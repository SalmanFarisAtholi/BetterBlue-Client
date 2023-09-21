import React, { useState, useEffect } from "react";
import { getUserTicket } from "../api/userApi";
import { useAuthStore } from "../store/store";
import Moment from "react-moment";

function UserTickets() {
  const [data, setData] = useState();
  const { user } = useAuthStore((state) => state.auth);

  useEffect(() => {
    let Data = getUserTicket(user);
    Data.then((data) => {
      console.log(data.data);
      setData(data.data);
    }).catch((error) => {
      console.log(error);
    }); 
  }, [user]);

  return (
    <div className="bg-slate-300 p-3">
      <table className="table-auto w-full">
        <tbody className="font-semibold text-sm sm:text-base">
          <tr className="flex text-center items-center justify-around p-3">
            <th>Stand</th>
            <th>Opponent</th>
            <th>Match Time</th>
          <th>Total</th>
          </tr>
          {data.map((item) => (
            <tr className="flex text-center items-center justify-around p-3">
              <td className="w-1/4">{item.stand}</td>
              <td className="w-1/4">VS {item.matchId.opponentId.name}</td>
              <td className="w-1/4">
                <Moment format="DD MMMM YYYY">{item.matchId.matchTime}</Moment>
              </td>
              <td className="w-1/4">₹ {item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTickets;
