import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { createStand } from "../api/adminApi";
import { useNavigate } from "react-router-dom";

function CreateStadium() {
  const navigate=useNavigate()

  const formik = useFormik({
    initialValues: {
      standName: "",
      capacity: "",
      price: "",
    },
    onSubmit: async (values) => {
      let createPromise = createStand(values);
      toast.promise(createPromise, {
        loading: "Creating",
        success: <b>Stand Created</b>,
        error: <b>Cant Create</b>,
        
      });
      createPromise.then(function () {
        setTimeout(()=>{
          navigate("/admin/stadium")

        },2000)
      }).catch((e)=>{
        console.log(e);
      })
    },
  });

  return (
    <div className="flex items-center justify-center h-full w-full bg-litePurple">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-3/4 h-screen flex items-center justify-center ">
        <div className="w-full h-3/4 flex items-center justify-center bg-darkPurple shadow-md shadow-black">
          {/* <div> */}
          <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
            <h1 className="text-3xl font-bold text-white mb-4">ADD STAND</h1>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Stand Name
              </label>
              <input
                type="text"
                {...formik.getFieldProps("standName")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Capacity
              </label>
              <input
                type="number"
                {...formik.getFieldProps("capacity")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">
                Ticket Price
              </label>
              <input
                {...formik.getFieldProps("price")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-litePurple text-white  shadow-md shadow-black hover:bg-darkPurple"
              >
                ADD STAND
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default CreateStadium;
