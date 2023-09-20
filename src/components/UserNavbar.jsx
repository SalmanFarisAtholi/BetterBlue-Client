import React, { useState } from "react";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";
import { Link } from "react-router-dom";

function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);

 

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

   const [secoundDropdown,setSecoundDropdown]=useState(false)
   const toggleSecoundDropdown = () => {
    setSecoundDropdown(!secoundDropdown);
  };

  return (
    <nav className="bg-darkPurple">
      <div className="w-full">
        <div className="flex items-center justify-evenly h-28">
          <div className="hidden md:block">
            <div className="flex items-center justify-evenly">
              <div className="flex items-center justify-evenly">
                <span className="px-14 py-2">
                  <p className="text-gray-300 hover:underline hover:text-white rounded-md text-lg font-medium">
                    <Link to={"/home"}>Home</Link>
                  </p>
                </span>
                <span  className="px-14 py-2">
                  <p className="text-gray-300 hover:underline hover:text-white rounded-md text-lg font-medium">
                    <span>
                      <div className="dropdown">
                        <ul
                          className=""
                          onMouseEnter={toggleDropdown}
                          onMouseLeave={toggleDropdown}
                        >
                          <span className="hover:cursor-pointer">Pages</span>
                          {isDropdownOpen && (
                            <div className="dropdown-content absolute bg-darkPurple rounded-md p-1">
                               <div className="hover:bg-white p-2 hover:text-black ">
                                <Link to={"/players"}>Players</Link>

                              </div>
                              <div className="hover:bg-white p-2 hover:text-black ">
                                <Link to={"/news"}>News</Link>

                              </div>
                              <div className="hover:bg-white p-2 hover:text-black">
                              <Link to={"/sponsors"}>Sponsors</Link>
                              </div>
                             
                            </div>
                          )}
                        </ul>
                      </div>
                    </span>
                  
                  </p>
                </span>
                <span  className="px-14 py-2">
                  <p className="text-gray-300 hover:underline hover:text-white rounded-md text-lg font-medium">
                  <Link to={"/about"}> About Us</Link>

                   
                  </p>
                </span>
              </div>
              <div className="h-28 w-28">
                <img src={logo} alt="" />
              </div>
              <div className="flex items-center justify-evenly">
                <span  className="px-14 py-2">
                  <p className="text-gray-300 hover:underline hover:text-white rounded-md text-lg font-medium">
                    <span>
                      <div className="dropdown">
                        <ul
                          className=""
                          onMouseEnter={toggleSecoundDropdown}
                          onMouseLeave={toggleSecoundDropdown}
                        >
                          <span className="hover:cursor-pointer">Matches</span>
                          {secoundDropdown && (
                            <div className="dropdown-content absolute bg-darkPurple rounded-md p-1">
                              <div className="hover:bg-white p-2 hover:text-black ">
                              <Link to={"/fixtures"}>Fixtures</Link>

                              </div>
                              <div className="hover:bg-white p-2 hover:text-black">
                              <Link to={"/results"}>Results</Link>
                              </div>
                             
                            </div>
                          )}
                        </ul>
                      </div>
                    </span>
                  </p>
                </span>
                <span  className="px-14 py-2">
                  <p className="text-gray-300 hover:underline hover:text-white rounded-md text-lg font-medium">
                    <Link to={"/profile"}>Profile</Link>
                  </p>
                </span>
                <span  className="px-14 py-2">
                  <p className="text-gray-300 hover:underline hover:text-white rounded-md text-lg font-medium">
                  <Link to={"/ticket"}>Ticket</Link>
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <span
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </span>
          <span
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </span>
          <span
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </span>
          {/* Add more links as needed */}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          {/* Add additional elements like user profile, notifications, etc. */}
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
