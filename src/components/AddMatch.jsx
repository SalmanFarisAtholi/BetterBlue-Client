import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { createStand } from "../api/adminApi";
import { useNavigate, Link } from "react-router-dom";
function AddMatch() {
  const formik = useFormik({
    initialValues: {
      opponent: "",
      logo: "",
      shortName: "",
      matchTime: "",
      matchType: "",
      totalMatch: "",
      win: "",
      draw: "",
      winProbability: "",
      home: "",
    },
    onSubmit: async (values) => {
    console.log(values);
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
          <form onSubmit={formik.handleSubmit}>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Opponent</label>
                  <input
                    {...formik.getFieldProps("opponent")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Short Name
                  </label>
                  <input
                    {...formik.getFieldProps("shortName")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  />
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
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Win</label>
                  <input
                    {...formik.getFieldProps("win")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Select Venue
                  </label>

                  <select
                    {...formik.getFieldProps("home")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    required
                  >
                    <option value="Home">Home</option>
                    <option value="Away">Away</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Logo</label>
                  <input
                    {...formik.getFieldProps("logo")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="file"
                    required
                  />
                </div>
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
                    Total Match
                  </label>
                  <input
                    {...formik.getFieldProps("totalMatch")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Draw</label>
                  <input
                    {...formik.getFieldProps("draw")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Win Probability
                  </label>
                  <input
                    {...formik.getFieldProps("winProbability")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  />
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
