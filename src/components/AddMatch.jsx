import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { addMatch, getOpponent } from "../api/adminApi";
import { useNavigate } from "react-router-dom";
function AddMatch() {
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    let team = getOpponent();
    team.then((data) => {
      setTeams(data.data);
    });
  }, []);

  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      opponent: "",
      matchTime: "",
      matchType: "League",
     
      formhome: "",
      formaway: "",
      home: "Estadio Radolf,Atholi",
    },
    onSubmit: async (values) => {
      console.log(values);
      // const formData = new FormData();
      // formData.append("opponent", values.opponent);
      // formData.append("matchTime", values.matchTime);
      // formData.append("matchType", values.matchType);
      // formData.append("home", values.home);

      let addMatchPromise = addMatch(values);
      toast.promise(addMatchPromise, {
        loading: "Creating",
        success: <b>Match Added</b>,
        error: message ? message : <b>Cant Add Match</b>,
      });
      addMatchPromise
        .then(function () {
          setTimeout(() => {
            navigate("/admin/fixtures");
          }, 2000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-litePurple ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-4/5 h-2/3  bg-darkPurple my-24 shadow-md shadow-black ">
        <div className="text-center py-3">
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">ADD MATCH</h1>
        </div>
        <div className="flex items-center justify-evenly ">
          <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Opponent</label>
                  <select
                    {...formik.getFieldProps("opponent")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  >
                    <option>--Select--</option>

                    {teams.map((item) => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                  </select>
                </div>
            
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Match Type
                  </label>
                  <select
                    {...formik.getFieldProps("matchType")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    required
                  >
                    <option value="League">League</option>
                    <option value="Domestic Cup">Domestic Cup</option>
                    <option value="Champions Cup">Champions Cup</option>
                    <option value="Friendly">Friendly</option>
                  </select>
                </div>
            

              
              </div>
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Match Time
                  </label>
                  <input
                    {...formik.getFieldProps("matchTime")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="datetime-local"
                    required
                  />
                </div>
              
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Select Venue
                  </label>

                  <input
                    {...formik.getFieldProps("home")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  ></input>
                </div>
                      
                
       
              </div>
            </div>
            <div className="flex items-center justify-center pb-3">
              <button
                className="px-4 py-2 bg-litePurple text-white  shadow-md shadow-black hover:bg-slate-800"
                type="submit"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMatch;
