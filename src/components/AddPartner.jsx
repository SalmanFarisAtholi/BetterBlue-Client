import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPartner } from "../api/adminApi";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
function AddPartner() {
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
      name: "",
      place: "",
      link: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("logo", uploadedImage);
      formData.append("place", values.place);
      formData.append("link", values.link);

      let addPartnerPromise = addPartner(formData);
      toast.promise(addPartnerPromise, {
        loading: "Creating",
        success: <b>New Partner Added</b>,
        error: message ? message : <b>Cant Add Partner</b>,
      });
      addPartnerPromise
        .then(function () {
          setTimeout(() => {
            navigate("/admin/sponsor");
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
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">
            ADD SPONCERS
          </h1>
        </div>
        <div className="flex items-center justify-evenly ">
          <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Name</label>
                  <input
                    {...formik.getFieldProps("name")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
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
                    type="file"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="md:flex sm:flex items-center justify-center">
              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Place</label>
                  <input
                    {...formik.getFieldProps("place")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Link</label>
                  <input
                    {...formik.getFieldProps("link")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
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

export default AddPartner;
