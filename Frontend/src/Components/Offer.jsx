import React from "react";
import offer from "../assets/frontend_assets/offer-img.png";
function Offer() {
  return (
    <div className="offer h-[552px] w-max[1180px] flex flex-col font-display lg:flex-row lg:h-[412px] lg:w-[90%] lg:mx-auto">
      <div
        id="left"
        className="flex flex-col items-center py-3 lg:w-[50%] lg:items-center lg:justify-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#171717] ">
          Exclusive Offers For You
        </h1>
        <p className="text-[#171717] text-base font-semibold py-2">
          ONLY ON BEST SELLING PRODUCTS
        </p>
        <button className="bg-black text-white px-3 py-2 rounded-xl  hover:bg-gray-800 active:bg-slate-600 lg:text-lg">
          Check Now
        </button>
      </div>
      <div id="right" className="lg:flex lg:items-center lg:justify-center">
        <img src={offer} alt="offer" />
      </div>
    </div>
  );
}

export default Offer;
