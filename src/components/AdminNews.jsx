import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNews } from "../api/adminApi";
import { baseURL } from "../constants/constant";


function AdminNews() {
  // const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    let Data = getNews();
    Data.then((data) => {
      setData(data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div className="min-h-screen bg-litePurple">
      <div className="flex items-center justify-center">
        <div className="m-8 p-5 flex items-center justify-center font-semibold bg-darkPurple text-white hover:shadow-md  hover:shadow-black">
          <Link to="addNews">ADD LATEST NEWS</Link>
        </div>
      </div>
      {data.map((item) => (
        <div className="flex items-center justify-center">
          <div className="w-4/5 bg-darkPurple p-5 mb-4">
            <div className="flex items-center justify-center">
              <img className="w-4/5 max-h-72"
                  src={`${baseURL}/${item.image}`}
                  />
            </div>
            <div className="text-white flex justify-center py-3">
              <h1 className="text-3xl font-semibold"> {item.headline}</h1>
            </div>
            <div className="text-white flex justify-center p-6 px-8">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminNews;
