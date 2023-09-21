import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import logo from "../assets/Logo/Better_Blue-removebg-preview.png";

import { FaTh, FaBars } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { MdStadium } from "react-icons/md";
import {
  TbPlayFootball,
  TbPlayerTrackNext,
  TbPlayerTrackPrev,
} from "react-icons/tb";
// import { BsTicketPerforated } from "react-icons/bs";
// import { TfiGallery } from "react-icons/tfi";
import { SlBadge } from "react-icons/sl";
import { GiVerticalBanner } from "react-icons/gi";
// import { BiLogOut } from "react-icons/bi";

function AdminSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 
  const menuItem = [
    {
      path: "adminside",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "players",
      name: "Players",
      icon: <TbPlayFootball />,
    },
    {
      path: "fixtures",
      name: "Fixtures",
      icon: <TbPlayerTrackNext />,
    },
    {
      path: "results",
      name: "Results",
      icon: <TbPlayerTrackPrev />,
    },
    {
      path: "stadium",
      name: "Stadium",
      icon: <MdStadium />,
    },
    {
      path: "opponent",
      name: "Opponent",
      icon: <GiVerticalBanner />,
    },
    {
      path: "news",
      name: "News",
      icon: <ImNewspaper />,
    },
    // {
    //   path: "tickets",
    //   name: "Tickets",
    //   icon: <BsTicketPerforated />,
    // },
    // {
    //   path: "gallary",
    //   name: "Gallary",
    //   icon: <TfiGallery />,
    // },
    {
      path: "sponsor",
      name: "Sponsor",
      icon: <SlBadge />,
    },
  ];
  return (
    <div className="flex">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="bg-darkPurple transition-all duration-500 text-white min-h-screen"
      >
        <div className="flex items-center py-5 px-4">
          {/* <h1 className="text-3xl"> */}
          <img
            style={{ display: isOpen ? "block" : "none" }}
            src={logo} 
            alt=""
            className="h-6 w-6"
          />
          {/* </h1> */}
          <div
            style={{ marginLeft: isOpen ? "50px" : "-5px" }}
            className="flex text-2xl ml-12"
          >
            <FaBars onClick={toggleSidebar} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="flex text-white gap-y-11 py-2 px-3 gap-3 transition-all duration-500 hover:bg-sky-400 hover:text-black hover:transition-all hover:duration-500"
            activeclassName="active"
          >
            <div className="text-xl flex items-center">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="text-xl"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
   
      <main className="w-full">{children}</main>
    </div>
  );
}

export default AdminSidebar;
