import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useFormik, Field } from "formik";
import { addResult, getMatch } from "../api/adminApi";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { HiOutlineViewGridAdd } from "react-icons/hi";

function AddResult() {
  const [match, setMatch] = useState([]);
  const [goals, setGoals] = useState([{ scorer: "", team: "", time: "" }]);

  const handleAddMember = () => {
    setGoals([...goals, { scorer: "", team: "", time: "" }]);
  };

  const handleRemoveMember = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedGoals = [...goals];
    updatedGoals[index][field] = value;
    setGoals(updatedGoals);
  };
  useEffect(() => {
    let team = getMatch();
    team.then((data) => {
      setMatch(data.data);
    });
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      ballPosition: "",
      match: "",
      result: "",
      scored: "",
      link: "",
      conceded: "",
      ourShots: "",
      thereShots: "",
      ourTarget: "",
      thereTarget: "",
      ourCorner: "",
      thereCorner: "",
      ourFoules: "",
      thereFoules: "",
    },
    onSubmit: async (values) => {
      let addResultPromise = addResult(values,goals);
      toast.promise(addResultPromise, {
        loading: "Creating",
        success: <b>Result Added</b>,
        error: <b>Cant Add Result</b>,
      });
      addResultPromise
        .then(function () {
          setTimeout(() => {
            navigate("/admin/playerUpdate");
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
      <div className="w-4/5  bg-darkPurple my-24 shadow-md shadow-black ">
        <div className="text-center py-3">
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">
            ADD RESULT
          </h1>
        </div>
        <div className="flex items-center justify-evenly ">
          {/* {({ values }) => ( */}
          <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Match</label>
                  <select
                    {...formik.getFieldProps("match")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  >
                    <option>--Select--</option>
                    {match.map((item) => (
                      <option value={item._id}>
                        {item.opponentId.name},
                        <Moment format="DD MMMM">{item.matchTime}</Moment>
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Our Ball Position
                  </label>
                  <input
                    {...formik.getFieldProps("ballPosition")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Scored Goals
                  </label>

                  <input
                    {...formik.getFieldProps("scored")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  ></input>
                </div>
              </div>
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Match Result
                  </label>
                  <select
                    {...formik.getFieldProps("result")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    required
                  >
                    <option value="">--Select--</option>

                    <option value="win">Win</option>
                    <option value="draw">Draw</option>
                    <option value="lose">Lose</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Highlight Link
                  </label>

                  <input
                    {...formik.getFieldProps("link")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Conceded Goals
                  </label>

                  <input
                    {...formik.getFieldProps("conceded")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <div className="w- text-center text-white text-2xl font-semibold">
                  <h1>Shots</h1>
                </div>
                <div className="">
                  <div className="w-full flex justify-between">
                    <div className="pl-4">
                      <label className="block text-white">Our Team</label>
                      <input
                        {...formik.getFieldProps("ourShots")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                       
                      ></input>
                    </div>
                    <div className="pr-4">
                      <label className="block text-white">Opponent Team</label>
                      <input
                        {...formik.getFieldProps("thereShots")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                        
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="w- text-center text-white text-2xl font-semibold">
                  <h1>Shots On Target</h1>
                </div>
                <div className="">
                  <div className="w-full flex justify-between">
                    <div className="pl-4">
                      <label className="block text-white">Our Team</label>
                      <input
                        {...formik.getFieldProps("ourTarget")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                       
                      ></input>
                    </div>
                    <div className="pr-4">
                      <label className="block text-white">Opponent Team</label>
                      <input
                        {...formik.getFieldProps("thereTarget")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                       
                      ></input>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="mb-3">
                <div className="w- text-center text-white text-2xl font-semibold">
                  <h1>Corners</h1>
                </div>
                <div className="">
                  <div className="w-full flex justify-between">
                    <div className="pl-4">
                      <label className="block text-white">Our Team</label>
                      <input
                        {...formik.getFieldProps("ourCorner")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                      
                      ></input>
                    </div>
                    <div className="pr-4">
                      <label className="block text-white">Opponent Team</label>
                      <input
                        {...formik.getFieldProps("thereCorner")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                       
                      ></input>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="mb-3">
                <div className="w- text-center text-white text-2xl font-semibold">
                  <h1>Fouls</h1>
                </div>
                <div className="">
                  <div className="w-full flex justify-between">
                    <div className="pl-4">
                      <label className="block text-white">Our Team</label>
                      <input
                        {...formik.getFieldProps("ourFoules")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                        
                      ></input>
                    </div>
                    <div className="pr-4">
                      <label className="block text-white">Opponent Team</label>
                      <input
                        {...formik.getFieldProps("thereFoules")}
                        className="px-1 py-1 border border-gray-300 rounded-sm"
                        type="number"
                       
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-center text-white text-xl p-3">
                <h1>Goal Detailes</h1>
              </div>
              <div>
                {goals.map((member, index) => (
                  <div key={index} className="mb-4 ">
                    <div className="flex gap-1">
                      <input
                        type="text"
                        placeholder="Goalscorer"
                        value={member.scorer}
                        onChange={(e) =>
                          handleMemberChange(index, "scorer", e.target.value)
                        }
                        required
                        className="w-1/4 p-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                      />
                      <select
                        type="text"
                        placeholder="Team"
                        value={member.team}
                        onChange={(e) =>
                          handleMemberChange(index, "team", e.target.value)
                        }
                        required
                        className="w-1/4 p-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                      >
                        <option value="">Select Team</option>
                        <option value="our">Our Team</option>
                        <option value="opponent">Opposite Team</option>
                      </select>
                      <input
                        type="number"
                        placeholder="Goal Time"
                        value={member.time}
                        onChange={(e) =>
                          handleMemberChange(index, "time", e.target.value)
                        }
                        required
                        className="w-1/4 p-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
                      />{" "}
                      {index >= 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(index)}
                          className="text-red-500 hover:text-red-600 text-2xl font-semibold"
                        >
                          &times;
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="p-3 bg-litePurple text-white font-medium py-3 rounded hover:bg-darkPurple"
                  >
                    <HiOutlineViewGridAdd />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center pb-3">
              <button
                className="px-4 py-2 bg-litePurple text-white  shadow-md shadow-black hover:bg-slate-800"
                type="submit"
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddResult;
