// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import SideImage from "../assets/photos/Overview.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { loginValidate } from "../helper/validate";

export default function AdminLogin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen  bg-indigo-900 ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className=" w-4/5 h-2/3  bg-sky-800 rounded-3xl">
        <div className="text-center py-2">
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">
            ADMIN LOGIN
          </h1>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="p-5 hidden sm:block justify-center  ">
            <img src={SideImage} alt="" />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-slate-200">Email</label>
              <input
                {...formik.getFieldProps("email")}
                className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-slate-200">Password</label>
              <input
                {...formik.getFieldProps("password")}
                className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                type="password"
              />
            </div>

            <div className="flex items-center justify-center pb-3">
              <button
                className="px-4 py-2  bg-indigo-900 text-white  shadow-md shadow-black hover:bg-slate-800"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
