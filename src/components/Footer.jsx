import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkPurple text-white py-4 h-28 mt-1 ">
      <div className="container mx-auto text-center">
        <div className="container mx-auto text-center lg:flex lg:justify-between lg:items-center">
          <div className="container mx-auto text-center lg:flex lg:justify-between lg:items-center">
            <div className="text-sm mb-2 lg:mb-0">
              &copy; {new Date().getFullYear()} Better Blue FC . All rights
              reserved.
            </div>
            <div className="space-x-4">
              <a  className="text-white hover:text-gray-400">
                Facebook
              </a>
              <a className="text-white hover:text-gray-400">
                Twitter
              </a>
              <a className="text-white hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
