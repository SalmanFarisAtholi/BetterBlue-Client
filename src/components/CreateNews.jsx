import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNews } from "../api/adminApi";

import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
function CreateNews() {
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
    }
  };
  const formik = useFormik({
    initialValues: {
      headline: "",
      description: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("headline", values.headline);
      formData.append("image", uploadedImage);
      formData.append("description", values.description);
      let addNewsPromise = addNews(formData)
      toast.promise(addNewsPromise, {
        loading: "Creating",
        success: <b>News Added</b>,
        error: message ? message : <b>Cant Add News</b>,
      });
      addNewsPromise
        .then(function () {
          setTimeout(() => {
            navigate("/admin/news");
          }, 1500);
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
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">ADD NEWS</h1>
        </div>
        <div className="flex items-center justify-evenly ">
          <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Headline</label>
                  <input
                    {...formik.getFieldProps("headline")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Image</label>
                  <input
                    onChange={handleFileChange}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm text-white"
                    accept=".jpg, .jpeg, .png"
                    type="file"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="m-5 w-full">
              <div className="">
                <label className="block mb-2 text-slate-200">Description</label>
                <textarea
                  {...formik.getFieldProps("description")}
                  className=" border border-gray-300 rounded-sm w-5/6 "
                  rows="10"
                  type="text"
                  required
                />
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

export default CreateNews;
