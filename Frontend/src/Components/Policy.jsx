import React from "react";
import { assets } from "../assets/frontend_assets/assets";
function Policy() {
  return (
    <div className="w-[70vw] mx-auto my-7 mb-9 flex gap-4 flex-col lg:justify-between lg:flex-row ">
      <div className="flex flex-col ">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto" />
        <p className="text-center font-bold font-body">Easy exchange policy</p>
        <p className="text-gray-400 text-[15px] text-center">
          We offer hassle free exchange policy
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto" />
        <p className="text-center font-bold font-body">7 days return policy</p>
        <p className="text-gray-400 text-[15px] text-center">
          We provide 7 days free return policy
        </p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className="w-12 m-auto" />
        <p className="text-center font-bold font-body">Best costumer support</p>
        <p className="text-gray-400 text-[15px] text-center">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
}

export default Policy;
