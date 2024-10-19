import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import {
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#201e1e] text-white p-3 flex justify-evenly flex-col gap-5 md:flex-row font-body">
        <div className="flex flex-col w-[330px] p-3">
          <h1 className="font-bold">ABOUT US</h1>
          <p className="text-[14px] py-2 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            perferendis porro exercitationem quia vitae odio dignissimos
            corrupti nemo sint soluta?
          </p>
        </div>

        <div className="flex flex-col w-[330px] p-3">
          <h1 className="font-bold">NEED HELP</h1>
          <p className="text-[14px] py-2 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quisquam reprehenderit veritatis mollitia sit praesentium vitae quo
            explicabo distinctio
          </p>
        </div>
        <div className="flex flex-col w-[330px] p-3">
          <h1 className="font-bold">CONTACT US</h1>
          <li className="list-none flex gap-2 items-center py-1 text-[14px] text-gray-300">
            <FaLocationDot />
            <span>Bandra,Mumbai,400605</span>
          </li>
          <li className="list-none flex gap-2 items-center py-1 text-[14px] text-gray-300">
            <BsFillTelephoneFill />
            <span>+01235446753</span>
          </li>
          <li className="list-none flex gap-2 items-center py-1 text-[14px] text-gray-300">
            <IoMdMail />
            <span>fabfashion@gmail.com</span>
          </li>
        </div>
      </footer>
      <div className="bg-[#201e1e]">
        <div
          id="social-icons"
          className="px-5 py-3 flex gap-3  lg:justify-center"
        >
          <span className="w-[30px] h-[30px] rounded-full bg-pink-400 flex items-center justify-center hover:bg-pink-600 cursor-pointer">
            <FaInstagramSquare className="text-white" />
          </span>
          <span className="w-[30px] h-[30px] rounded-full bg-pink-400 flex items-center justify-center  hover:bg-pink-600 cursor-pointer">
            <FaTwitter className="text-white" />
          </span>
          <span className="w-[30px] h-[30px] rounded-full bg-pink-400 flex items-center justify-center  hover:bg-pink-600 cursor-pointer">
            <FaLinkedin className="text-white" />
          </span>
          <span className="w-[30px] h-[30px] rounded-full bg-pink-400 flex items-center justify-center  hover:bg-pink-600 cursor-pointer">
            <FaPinterest className="text-white" />
          </span>
        </div>
        <hr className="h-[3px] bg-[#c7c7c7] w-[80%] mx-auto border-none my-2" />
        <div className="flex justify-center items-center py-2">
          <span className="text-white text-[14px]">
            Copyrights @ 2024 - All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
