import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function AboutUs() {
  return (
    <div className="lg:py-20 w-[80vw] font-style mx-auto">
      <div className="mt-7 flex flex-col gap-1 items-center mb-8">
        <h1 className="text-2xl  font-bold">
          <span className="text-gray-700">ABOUT </span>US
          <hr className="h-1 border-none bg-gray-800 w-[120px]" />
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-16 mb-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col gap-5 mt-9">
          <p className="text-gray-500 font-[500]">
            Fab fashion was born out of a passion for innovation and a desire to
            revolutionize the way people shop online.Our journey began with
            simple idea to provide a platform where customers can easily
            discover,explore and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-gray-500 font-[500]">
            Since our inception,we've worked firelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference.From fashion and beauty to electronics and home
            essentials,we offer an extensive collection sourced from trusted
            brands and suppliers
          </p>
          <b className="text-[17px] mt-4">Our Mission</b>
          <p className="text-gray-700 font-[500]">
            Our mission at fab fashion is to empower customers with
            choice,convenience and confidence.We've dedicated to providing a
            seamless shopping experience that exceeds expectations,from browsing
            and ordering to delivery and beyond
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center mb-6">
        <div className="text-xl text-gray-400 font-[500]">
          WHY <span className="text-gray-800">CHOOSE US</span>
        </div>
        <hr className="h-1 w-6 bg-gray-800" />
      </div>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="flex flex-col gap-2 border px-8 py-10">
          <b>Quality Assurance</b>
          <p className="text-gray-700 text-[15px]">
            We meticulously select and vel each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex flex-col gap-2 border px-8 py-10">
          <b>Quality Assurance</b>
          <p className="text-gray-700 text-[15px]">
            We meticulously select and vel each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex flex-col gap-2 border px-8 py-10">
          <b>Quality Assurance</b>
          <p className="text-gray-700 text-[15px]">
            We meticulously select and vel each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
