import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { addOpponent } from "../api/adminApi";
import { useNavigate } from "react-router-dom";
function AddOpponent() {
  const navigate = useNavigate();

  const [uploadedImage, setUploadedImage] = useState("");
  const [message, setMessage] = useState("");
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setUploadedImage(selectedFile);
      setMessage(null);
    } else {
      setUploadedImage(null);
      setMessage("Please select a JPEG or PNG image.");
      toast.error(message);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      shortName: "",
      totalMatch: "",
      win: "",
      draw: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("logo", uploadedImage);
      formData.append("shortName", values.shortName);
      formData.append("totalMatch", values.totalMatch);
      formData.append("win", values.win);
      formData.append("draw", values.draw);
      let addOpponentPromise = addOpponent(formData);
      toast.promise(addOpponentPromise, {
        loading: "Creating",
        success: <b>Opponent Created</b>,
        error: message ? message : <b>Cant Create Opponent</b>,
      });
      addOpponentPromise
        .then(function () {
          setTimeout(() => {
            navigate("/admin/opponent");
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
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">
            ADD OPPONENT
          </h1>
        </div>
        <div className="flex items-center justify-evenly ">
          <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Opponent</label>
                  <input
                    {...formik.getFieldProps("name")}
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
                  <label className="block mb-2 text-slate-200">Win</label>
                  <input
                    {...formik.getFieldProps("win")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  />
                </div>
              </div>
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Logo</label>
                  <input
                    onChange={handleFileChange}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm text-white"
                    accept=".jpg, .jpeg, .png"
                    type="file"
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

export default AddOpponent;
