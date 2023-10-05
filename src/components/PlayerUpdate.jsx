import React, { useState, useEffect } from "react";
import { getPlayer, playerUpdate } from "../api/adminApi";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function PlayerUpdate() {
  const [players, setPlayers] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [options1, setOptions1] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState("");

  useEffect(() => {
    let Data = getPlayer();
    Data.then((data) => {
      setPlayers(data.data);
      console.log(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  const navigate = useNavigate();

  const addOption = () => {
    if (selectedOption.trim() !== "") {
      setOptions([...options, selectedOption]);
      setSelectedOption("");
    }
  };

  const addOption1 = () => {
    if (selectedOption1.trim() !== "") {
      setOptions1([...options1, selectedOption1]);
      setSelectedOption1("");
    }
  };

  const render = () => {
    navigate("/admin/results");
  };
  const statusUpdate = () => {
    playerUpdate(options, options1)
      .then(() => {
        toast.success("Player Update Success");
        setTimeout(() => {
          navigate("/admin/results");
        }, 2000);
      })
      .catch(() => {
        toast.error("Couldn't update Players..");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-litePurple">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-4/5 h-2/3  bg-darkPurple my-24 shadow-md shadow-black">
        <div className="text-center py-3">
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">
            PLAYER UPDATE
          </h1>
        </div>
        <div className="text-white text-center">
          <h1>Goals</h1>
        </div>
        <div className="container mx-auto p-4">
          <div className="mb-4">
            <select
              className="border rounded px-3 py-2"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled>
                Select a player
              </option>
              {players.map((player) => (
                <option key={player.id} value={player.name}>
                  {player.name}
                </option>
              ))}
            </select>
            <button
              className=" ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={addOption}
            >
              Add
            </button>
          </div>
          <ul className="list-disc ml-6 text-white">
            {options.map((option, index) => (
              <li key={index} className="mb-2">
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white text-center">
          <h1>Assists</h1>
        </div>
        <div className="container mx-auto p-4">
          <div className="mb-4">
            <select
              className="border rounded px-3 py-2"
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
            >
              <option value="" disabled>
                Select a player
              </option>
              {players.map((player) => (
                <option key={player.id} value={player.name}>
                  {player.name}
                </option>
              ))}
            </select>
            <button
              className=" ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={addOption1}
            >
              Add
            </button>
          </div>
          <ul className="list-disc ml-6 text-white">
            {options1.map((option, index) => (
              <li key={index} className="mb-2">
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 items-center justify-center pb-3">
          <button
            onClick={statusUpdate}
            className="px-4 py-2 bg-litePurple text-white  shadow-md shadow-black hover:bg-slate-800"
          >
            UPDATE
          </button>
          <button
            onClick={render}
            className="px-4 py-2 bg-litePurple text-white  shadow-md shadow-black hover:bg-slate-800"
          >
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerUpdate;
