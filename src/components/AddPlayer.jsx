import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { addPlayer } from "../api/adminApi";
import { useNavigate } from "react-router-dom";
function AddPlayer() {
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
      toast.error("Please select a JPEG or PNG image.");
    }
  };
  const positions = [
    "Goal Keeper",
    "Right Back",
    "Center Back",
    "Left Back",
    "Defensive Midfielder",
    "Center Midfielder",
    "Attaking Midfielder",
    "Right Midfielder",
    "Left Midfielder",
    "Right Wing Forward",
    "Left Wing Forward",
    "Center Forward",
    "Second Striker",
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      nationality: "",
      dob: "",
      pob: "",
      position: "",
      link: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("photo", uploadedImage);
      formData.append("number", values.number);
      formData.append("nationality", values.nationality);
      formData.append("dob", values.dob);
      formData.append("pob", values.pob);
      formData.append("position", values.position);
      formData.append("link", values.link);

      let addPlayerPromise = addPlayer(formData);
      toast.promise(addPlayerPromise, {
        loading: "Creating",
        success: <b>Player Added</b>,
        error: message ? message : <b>Cant Add Player</b>,
      });
      addPlayerPromise
        .then(function () {
          setTimeout(() => {
            navigate("/admin/players");
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
            ADD PLAYER
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
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Date of Birth
                  </label>
                  <input
                    {...formik.getFieldProps("dob")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="date"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Nationality
                  </label>
                  <input
                    {...formik.getFieldProps("nationality")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Jersey Number
                  </label>
                  <input
                    {...formik.getFieldProps("number")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="number"
                    required
                  />
                </div>
              </div>

              <div className="m-5 w-6/12">
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Photo</label>
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
                    Place of Birth
                  </label>
                  <input
                    {...formik.getFieldProps("pob")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Position</label>
                  <select
                    {...formik.getFieldProps("position")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-sm"
                    type="text"
                    required
                  >
                    <option>--Select--</option>
                    {positions.map((position) => (
                      <option value={position}>{position}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">
                    Presentation Video Link
                  </label>
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

export default AddPlayer;
