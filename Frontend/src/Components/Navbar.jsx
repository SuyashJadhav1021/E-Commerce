import React, { useContext, useState } from "react";
import logo from "../assets/frontend_assets/clothing_logo.png";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { shopContext } from "../Context/context";

function Navbar() {
  const Location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const {
    setShowSearch,
    showSearch,
    getCartCount,
    menu,
    setMenu,
    token,
    setToken,
    setCartData,
  } = useContext(shopContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartData({});
    navigate("/login");
  };

  return (
    <>
      <div
        id="sidebar"
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: showSidebar ? 1 : 0,
          visibility: showSidebar ? "visible" : "hidden",
        }}
        onClick={() => setShowSidebar(false)}
      >
        <div
          className="w-[320px] bg-white h-full absolute duration-300 p-2 z-50"
          style={{
            left: showSidebar ? "0%" : "-100%",
            zIndex: showSidebar ? 999 : 0,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center border-b-2 px-2 py-3">
            <div className="flex items-center gap-1 z-50">
              <FaUser />
              <span className="text-xl font-display font-semibold cursor-pointer">
                Log in
              </span>
            </div>
            <div>
              <IoClose
                className="text-2xl cursor-pointer"
                onClick={() => setShowSidebar(false)}
              />
            </div>
          </div>
          <ul className="flex flex-col list-none px-4 py-5 gap-5 cursor-pointer font-display">
            <Link to={"/"}>
              <li
                className="text-lg hover:text-gray-600"
                onClick={() => setShowSidebar(false)}
              >
                Shop
              </li>
            </Link>
            <Link to={"/collection"}>
              <li
                className=" text-lg hover:text-gray-600"
                onClick={() => setShowSidebar(false)}
              >
                Collections
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li
                className="text-lg hover:text-gray-600"
                onClick={() => setShowSidebar(false)}
              >
                About us
              </li>
            </Link>
            <Link to={"/contact-us"}>
              <li
                className=" text-lg hover:text-gray-600"
                onClick={() => setShowSidebar(false)}
              >
                Contact us
              </li>
            </Link>
          </ul>
          <div className="flex items-center justify-center px-2 gap-4 text-lg  my-16">
            <FaTwitter className="cursor-pointer" />
            <FaInstagramSquare className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaPinterest className="cursor-pointer" />
          </div>
        </div>
      </div>
      <nav className="flex p-2 text-black shadow-lg justify-between items-center lg:fixed lg:top-0 lg:bg-white lg:z-[1000] z-40 w-[100vw]">
        <Link to={"/"}>
          {" "}
          <div
            id="logo"
            className="flex items-center max-h-[70px] max-w-[75px]"
          >
            <img src={logo} alt="logo" className="h-full w-full object-fill" />
            <span className="font-bold font-logo hidden sm:block">
              FabFashion
            </span>
          </div>
        </Link>
        <div
          id="nav-links"
          className="hidden lg:flex items-center gap-6 list-none font-display font-semibold text-lg"
        >
          <Link to={"/"}>
            <li
              className={
                menu === "shop"
                  ? "active"
                  : `cursor-pointer hover:text-[#1c1c4e]`
              }
              onClick={() => setMenu("shop")}
            >
              Shop
            </li>
          </Link>

          <Link to={"/collection"}>
            <li
              className={
                menu === "collection"
                  ? "active"
                  : `cursor-pointer hover:text-[#1c1c4e]`
              }
              onClick={() => setMenu("collection")}
            >
              Collection
            </li>
          </Link>

          <Link to={"/about-us"}>
            <li
              className={
                menu === "about us"
                  ? "active"
                  : `cursor-pointer hover:text-[#1c1c4e]`
              }
              onClick={() => setMenu("about us")}
            >
              About us
            </li>
          </Link>
          <Link to={"/contact-us"}>
            <li
              className={
                menu === "contact us"
                  ? "active"
                  : `cursor-pointer hover:text-[#1c1c4e]`
              }
              onClick={() => setMenu("contact us")}
            >
              Contact us
            </li>
          </Link>
        </div>
        <div id="nav-right" className="flex items-center gap-7 px-2 mr-6 ">
          {Location.pathname === "/collection" ? (
            <IoSearch
              className="text-2xl font-semibold cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />
          ) : (
            ""
          )}
          <div className="group relative">
            <IoPersonSharp
              onClick={() => (token ? null : navigate("/login"))}
              className={`text-xl mr-2 ${showSidebar ? "hidden" : ""}`}
            />

            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu -right-1 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link to={"/cart"}>
            <div className="flex items-center justify-center mr-3 relative">
              <HiOutlineShoppingBag
                className={`lg:block text-2xl  cursor-pointer absolute ${
                  showSidebar ? "hidden" : ""
                }`}
                onClick={() => setMenu("women")}
              />
              <span
                className="absolute h-[16px] w-[16px] rounded-full bg-black flex items-center justify-center text-white top-0 left-0 text-[12px]"
                style={{
                  visibility: getCartCount() === 0 ? "hidden" : "visible",
                }}
              >
                {getCartCount()}
              </span>
            </div>
          </Link>

          <IoIosMenu
            className="flex items-center text-2xl lg:hidden cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
