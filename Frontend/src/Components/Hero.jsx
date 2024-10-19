import React from "react";
import banner from "../assets/frontend_assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-[100vh] font-display background lg:py-20 w-[100vw]">
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mx-auto lg:mt-20">
        <img
          src={banner}
          alt=""
          className="w-full max-h-[400px] md:max-w-[460px] md:max-h-[580] object-contain mr-28 md:mr-0"
        />
        <div className="flex flex-col gap-3 md:gap-6 px-8 items-center md:px-14 ">
          <h1 className="text-3xl md:text-4xl">
            Explore,shop,repeat <span className="text-green-700">again</span>
          </h1>
          <p className="text-lg md:text-xl">
            Your One-stop Destination For All Things Fashion And Style. Shop
            Latest Fashion On FashionFab. Shop The Latest Fashion Trends And
            Exclusive Brands At FashionFab Lorem ipsum dolor sit amet..
          </p>
          <div className="flex justify-center">
            <Link to={"/collection"}>
              <button className="text-[15px] bg-green-700 text-gray-100 border-none px-5 py-2 rounded-md md:px-6 md:py-3 hover:bg-green-600 active:bg-green-600 transition-all duration-500">
                Explore Collections
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// <p className="text-base my-2 lg:text-lg lg:mx-1 lg:py-2">
// Your One-stop Destination For All Things Fashion And Style. Shop
// Latest Fashion On FashionFab. Shop The Latest Fashion Trends And
// Exclusive Brands At FashionFab.
// </p>

// <h1 className="text-3xl font-bold lg:text-5xl">
// </span>

// <button className="px-3 py-2 bg-black text-white rounded-xl hover:bg-gray-800 active:bg-slate-600 lg:text-lg">
// Latest collection
// </button>
