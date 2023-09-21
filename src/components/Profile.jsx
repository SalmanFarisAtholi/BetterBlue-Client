import React, { useState, useEffect } from "react";
import { useAuthStore } from "../store/store";
import {  useNavigate } from "react-router-dom";
import {  Toaster } from "react-hot-toast";
import { getUser } from "../api/userApi";
// import { useFormik } from "formik";
import { BsPerson } from "react-icons/bs";

export default function Profile() {
  const { user } = useAuthStore((state) => state.auth);

  console.log(user);
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  useEffect(() => {
    let Data = getUser(user);
    Data.then((data) => {
      setUserData(data.data);
    }).catch((error) => {
      console.log(error);
    });
  },[user] );
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  // const formik = useFormik({
  //   initialValues: {
  //     email:user,
  //     password: "",
  //     firstname: "",
  //     cpassword: "",
  //     lastname: "",
  //     mobile: "",
  //     city: "",
  //     country: "",
  //   },
  //   validateOnBlur: false,
  //   validateOnChange: false,
  //   onSubmit: async (values) => {
  //     console.log(values);
  //     // let registerPromise = registerUser(values);
  //     // toast.promise(registerPromise, {
  //     //   loading: "Creating",
  //     //   success: <b>Register Success</b>,
  //     //   error: <b>Cant register</b>,
  //     // });
  //     // registerPromise.then(function () {
  //     //   console.log("hi");
  //     // });
  //   },
  // });
  return (
    <div className="flex items-center justify-center h-screen bg-darkPurple ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-4/5 bg-litePurple mb-52">
        <div className="text-center py-2">
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">Profile</h1>
        </div>
       
        <div className="flex items-center justify-evenly p-7">
        <div className="flex items-center justify-center h-24">
          <BsPerson className="h-full w-full" />
        </div>
          <div className="text-center text-white">
            <h2 className="uppercase">{userData?.firstName} {userData?.lastName}</h2>
            <p>{userData?.email}</p>
            <p>{userData?.city}</p>
            <p>{userData?.country}</p>

            <p>{userData?.phone}</p>

          </div>
        </div>
        <div className="text-center py-2">
          <h3 className="text-1xl text-slate-100 mb-4">
            <button className="bg-darkPurple p-3 hover:shadow-xl" onClick={userLogout}>Log Out</button>
          </h3>
        </div>

        {/* <div className="flex items-center justify-evenly ">
          <form onSubmit={formik.handleSubmit}>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    First Name
                  </label>
                  <input
                    {...formik.getFieldProps("firstname")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="text"
                  />
                </div>
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
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Country</label>

                  <select
                    {...formik.getFieldProps("country")}
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
                    {...formik.getFieldProps("lastname")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Mobile Number
                  </label>
                  <input
                    {...formik.getFieldProps("mobile")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="tel"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Confirm Password
                  </label>
                  <input
                    {...formik.getFieldProps("cpassword")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="password"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">City</label>
                  <input
                    {...formik.getFieldProps("city")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="text-center py-2">
              <h3 className="text-1xl text-slate-100 mb-4">
               <button onClick={userLogout}>Log Out</button>
              </h3>
            </div>
            <div className="flex items-center justify-center pb-3">
              <button
                className="px-4 py-2 bg-sky-700 text-white  shadow-md shadow-black hover:bg-slate-800"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}
