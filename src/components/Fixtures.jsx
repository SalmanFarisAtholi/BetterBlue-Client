import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Fixtures() {
  return (
    <div className="min-h-screen bg-litePurple">
      <div className="flex items-center justify-center">
        <div className="m-8 p-5 flex items-center justify-center font-semibold bg-darkPurple text-white hover:shadow-md  hover:shadow-black">
        <Link to="addMatch">ADD NEW MATCH</Link>
        </div>
      </div>
      <div>
        <div className="flex h-80 items-center justify-center bg-darkPurple my-5 mx-32 gap-2">
          <div className="w-1/2 flex h-3/4 gap-2">
            <img
              className="w-3/4"
              src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/cf9fb280-9620-4468-cb14-9c0d52a63f00/preview"
              alt=""
            />
            <img
              className="w-3/4"
              src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/cf9fb280-9620-4468-cb14-9c0d52a63f00/preview"
              alt=""
            />
          </div>
          <div className="w-1/2 flex h-3/4 gap-2">
            <img
              className="w-3/4"
              src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/cf9fb280-9620-4468-cb14-9c0d52a63f00/preview"
              alt=""
            />
            <img
              className="w-3/4"
              src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/cf9fb280-9620-4468-cb14-9c0d52a63f00/preview"
              alt=""
            />
          </div>
        </div>
        <div className="h-36 flex items-center justify-center bg-darkPurple my-14 mx-32">
          <h1>
            ncaught Invariant Violation: Too many re-renders. React limits the
            number of renders to prevent an infinite loop
          </h1>
        </div>
        <div className="h-36 flex items-center justify-center bg-darkPurple my-14 mx-32">
          <h1>
            ncaught Invariant Violation: Too many re-renders. React limits the
            number of renders to prevent an infinite loop
          </h1>
        </div>
        <div className="h-36 flex items-center justify-center bg-darkPurple my-14 mx-32">
          <h1>
            ncaught Invariant Violation: Too many re-renders. React limits the
            number of renders to prevent an infinite loop
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Fixtures;
