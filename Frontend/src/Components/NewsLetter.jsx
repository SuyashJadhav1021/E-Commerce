import React from "react";

function NewsLetter() {
  return (
    <div className="flex flex-col gap-3 mt-14 mb-10 items-center w-[260px] md:w-full mx-auto">
      <p className="text-[13px] md:text-lg text-gray-900 font-bold">
        Subscribe now & get 15% off
      </p>
      <p className="text-[11px] md:text-sm text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut
      </p>
      <div className="flex">
        <input
          type="email"
          className="border px-2 py-1 text-sm  w-40 md:w-72 rounded-s-sm"
          placeholder="Enter your email"
        />
        <button className="bg-black text-white text-sm px-4 py-2 border-none rounded-e-sm hover:bg-gray-900 active:bg-gray-700">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
