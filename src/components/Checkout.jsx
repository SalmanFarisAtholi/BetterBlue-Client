import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { getStand } from "../api/adminApi";
// import { Razorpay } from "razorpay";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";

import { doPayment, verifyPayment } from "../api/userApi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useAuthStore, userAuthStore } from "../store/store";
import { useNavigate } from "react-router-dom";
const Checkout = (props) => {
  const navigate = useNavigate();
  const matchId = props.id;
  console.log(matchId);
  const [data, setData] = useState([]);
  const [ticketType, setTicketType] = useState(false);
  const [seat, setSeat] = useState("");
  const [price, setPrice] = useState(false);
  const { user } = useAuthStore((state) => state.auth);

  console.log(user);

  const handleTicketTypeChange = (e) => {
    const stand = e.target.value.split(",");
    setTicketType(stand[1]);
    setSeat(stand[0]);
  };
  useEffect(() => {
    let Data = getStand();
    Data.then((data) => {
      // console.log(data.data);
      setData(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  //   const toaster = useToaster();

  const initialValues = {
    email: user,
    // ticketType: "",
    members: [{ name: "", mobileNumber: "" }],
    // total: "",
  };

  const handleSubmit = async (values) => {
    let payment = doPayment(values, matchId, price, seat);
    payment
      .then(function (data) {
        const newData = data.data;
        console.log(newData);
        let options = {
          key: `rzp_test_NSRwAACcpYAe7D`,
          amount: newData.response.amount,
          currency: "INR",
          name: "Better Blue FC",
          handler: async (response) => {
            verifyPayment(response, newData)
              .then((status) => {
                console.log(status);
                if (status) {
                  setTimeout(() => {
                    navigate("/paymentSuccess");
                  }, 1000);
                } else {
                  toast.error("Payyment Failed");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          },
          theme: {
            color: "#17356C",
          },
        };
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        };
        document.body.appendChild(script);
      })
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="min-h-screen bg-darkPurple flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="max-w-md w-full px-6 py-8 bg-slate-50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Ticket Checkout
        </h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ticket Type:
                  </label>
                  <select
                    defaultValue={values.ticketType}
                    name="ticketType"
                    onChange={handleTicketTypeChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="">-Select-</option>
                    {data.map((item) => (
                      <option value={[item.standName, item.price]}>
                        {item.standName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price
                  </label>
                  <Field
                    name="Price"
                    value={ticketType ? `₹ ${ticketType}/-` : 0}
                    readOnly
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Field
                  name="email"
                  value={values.email}
                  required
                  type="email"
                  // readOnly
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Persons:
                </label>
                <FieldArray
                  onChange={setPrice(values.members.length * ticketType)}
                  name="members"
                >
                  {({ push, remove }) => (
                    <>
                      {values.members.map((member, index) => (
                        <div key={index} className="mb-4 ">
                          <div className="flex gap-1">
                            <Field
                              type="text"
                              name={`members[${index}].name`}
                              placeholder="Name"
                              required
                              className="w-1/2 px-4 py-2  border rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <Field
                              type="tel"
                              name={`members[${index}].mobileNumber`}
                              placeholder="Mobile Number"
                              required
                              className="w-1/2  px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {index >= 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className=" text-red-500 hover:text-red-600 text-2xl font-semibold"
                              >
                                &times;
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => push({ name: "", mobileNumber: "" })}
                          className="p-3 bg-litePurple text-white font-medium py-3 rounded hover:bg-darkPurple"
                        >
                          <BsFillPersonPlusFill />
                        </button>
                        <div className="px-6 text-lg font-semibold">
                          <h1>{`Total: ₹ ${price ? price : 0}`}</h1>
                        </div>
                      </div>
                    </>
                  )}
                </FieldArray>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-medium py-3 rounded hover:bg-red-700"
              >
                <h1>{`PAY ₹ ${price ? price : 0}`}</h1>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
