import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore, userAuthStore } from "../store/store";

export default function Profile() {
  const { username } = useAuthStore(state => state.auth)
  console.log(username);
  const navigate = useNavigate();

  function usreLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-600 ">
      {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}
      <div className="w-4/5 h-2/3  bg-indigo-900 rounded-3xl">
        <div className="text-center py-2">
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">Profile</h1>
        </div>
        <div className="flex items-center justify-evenly ">
          <div className="md:flex sm:flex items-center justify-center">
            <div className="m-5 w-6/12">
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">First Name</label>
                <input
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">Email</label>
                <input
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">Password</label>
                <input
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">Country</label>

                <select
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  name="country"
                  id=""
                >
                  <option value="India">India</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                </select>
              </div>
            </div>
            <div className="m-5 w-6/12">
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">Last Name</label>
                <input
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">
                  Mobile Number
                </label>
                <input
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  type="tel"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">
                  Confirm Password
                </label>
                <input
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-slate-200">City</label>
                <input
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pb-3">
            <button
              onClick={usreLogout}
              className="px-4 py-2 bg-red-700 text-white  shadow-md shadow-black hover:bg-slate-800"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
