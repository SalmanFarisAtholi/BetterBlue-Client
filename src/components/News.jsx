import { baseURL } from "../constants/constant";
import React, { useState, useEffect } from "react";
import { getNews } from "../api/adminApi";
import banner from "../assets/banners/news.png";

function News() {
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
    <div>
      <div
        className=" w-ful flex items-center bg-cover justify-start p-44"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-darkPurple">
          <h1 className="text-5xl">Club News</h1>
        </div>
      </div>
      <div className=" bg-litePurple">
        <div className="flex items-center justify-center">
          {/* <div className="m-8 p-5 flex items-center justify-center font-semibold bg-darkPurple text-white hover:shadow-md  hover:shadow-black">
          <Link to="addNews">ADD LATEST NEWS</Link>
        </div> */}
        </div>
        {data.map((item) => (
          <div className="flex items-center justify-center mt-6">
            <div className="w-4/5 bg-darkPurple p-5 mb-4">
              <div className="flex items-center justify-center">
                <img
                  className="w-4/5 max-h-72"
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
    </div>
  );
}

export default News;
