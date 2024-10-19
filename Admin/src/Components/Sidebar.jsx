import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";
import { MdAddCircleOutline } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-5 pt-6 text-[15px] pr-[10%] pl-[10%]">
        <NavLink
          to={"/"}
          className="flex items-center gap-3 border border-gray-300 border-r-0 border-l-0 px-3 py-2 "
        >
          <MdAddCircleOutline className="text-xl" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className="flex items-center gap-3 border border-gray-300 border-r-0 border-l-0 px-3 py-2 "
        >
          <BsBagCheckFill className="text-xl" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to={"/orders"}
          className="flex items-center gap-3 border border-gray-300 border-r-0 border-l-0 px-3 py-2 "
        >
          <BsBagCheckFill className="text-xl" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
