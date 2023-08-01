import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { useAuthStore } from "../store/store";
import {  verifyOTP } from "../api/userApi";
// import styles from '../styles/Username.module.css';
// import { generateOTP, verifyOTP } from '../helper/helper';
// import ge
import { useNavigate } from "react-router-dom";

function Otp() {
  // const { username } = useAuthStore((state) => state.auth);
  //   console.log(username);
  const [OTP, setOTP] = useState(793261);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     generateOTP(username).then((OTP) => {
  //       console.log(OTP)
  //       if(OTP) return toast.success('OTP has been send to your email!');
  //       return toast.error('Problem while generating OTP!')
  //     })
  //   }, [username]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ code: OTP });

      if (status === 201) {
        toast.success("Signup Successfull!");
        return navigate("/login");
      }
    } catch (error) {
      return toast.error("Wront OTP! Check email again!");
    }
  }

  return (
    <div className="bg-litePurple flex justify-center items-center h-screen">
      <form
        className="bg-darkPurple shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-white-400 text-sm font-bold mb-2"
            htmlFor="otp"
          >
            Enter OTP:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otp"
            type="text"
            placeholder="OTP"
            //   value={otp}
            //   onChange={handleOTPChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
}

export default Otp;
