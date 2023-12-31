import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidate } from "../helper/validate";
import { registerUser } from "../api/userApi";

function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      cpassword: "",
      lastname: "",
      mobile: "",
      city: "",
      country: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating",
        success: <b>Register Success</b>,
        error: <b>Cant register</b>,
      });
      registerPromise
        .then(function () {
          navigate("/otp");
        })
        .catch(() => {
          console.log("signup error");
        });
    },
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-litePurple ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-4/5 h-2/3  bg-darkPurple ">
        <div className="text-center py-2">
          <h1 className="text-2xl  font-bold text-slate-100 mb-4">
            Register Now
          </h1>
        </div>
        <div className="flex items-center justify-evenly ">
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
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Email</label>
                  <input
                    {...formik.getFieldProps("email")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Password</label>
                  <input
                    {...formik.getFieldProps("password")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="password"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">Country</label>

                  <select
                    {...formik.getFieldProps("country")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    name="country"
                    id=""
                    required
                  >
                    <option value="India">-Select-</option>
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
                    required
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
                    required
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
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-200">City</label>
                  <input
                    {...formik.getFieldProps("city")}
                    className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-center py-2">
              <h3 className="text-1xl text-slate-100 mb-4">
                Already Have a Account?
                <Link className="font-bold text-red-400" to="/">
                  Login
                </Link>
              </h3>
            </div>
            <div className="flex items-center justify-center pb-3">
              <button
                className="px-4 py-2 bg-sky-700 text-white  shadow-md shadow-black hover:bg-slate-800"
                type="submit"
              >
                Let's Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
