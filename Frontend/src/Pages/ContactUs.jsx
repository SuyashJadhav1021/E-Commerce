import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../Components/NewsLetter";

function ContactUs() {
  return (
    <div className="lg:py-20 w-[80vw] mx-auto font-style">
      <div className="mt-7 flex flex-col gap-1 items-center mb-8">
        <h1 className="text-2xl  font-bold">
          <span className="text-gray-700">CONTACT </span>US
          <hr className="h-1 border-none bg-gray-800 w-[148px]" />
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <img src={assets.contact_img} alt="" className="w-full md:w-[420px]" />
        <div className="flex flex-col gap-3 mt-6 mb-6">
          <b className="text-[16px] text-gray-800">Our Store</b>
          <p className="text-gray-600">Hiranandani Estate</p>
          <p className="text-gray-600">Bandra,Mumbai</p>
          <p className="text-gray-600">Tel:(415) 555-0132</p>
          <p className="text-gray-600">Email:fabfashion@gmail.com</p>
          <b className="text-[16px] mt-2 text-gray-800">
            Careers at FabFashion
          </b>
          <p className="text-gray-600">
            Learn more about our teams and job openings
          </p>
          <div>
            <button className="bg-white text-gray-900 text-sm px-3 py-2 border border-gray-800 mb-2 mt-2 hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default ContactUs;
