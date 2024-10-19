import React from "react";
import logo from "../assets/clothing_logo.png";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between py-2 px-[2%] items-center shadow-md">
      <div className="flex items-center gap-0">
        <img src={logo} alt="" className="w-[max(10%,70px)]" />
        <span className="font-logo font-bold hidden sm:block">Fabfashion</span>
      </div>

      <button
        onClick={() => {
          setToken("");
        }}
        className="text-white text-sm bg-gray-900 px-5 py-2 sm:py-2 rounded-full hover:bg-gray-600 active:bg-gray-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
