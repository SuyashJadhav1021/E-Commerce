import React from "react";

function Description() {
  return (
    <div className="mb-4">
      <div id="descBox" className="flex">
        <div
          id="descBox-desc"
          className="border border-[#d0d0d0] h-[40px] w-[120px] flex justify-center items-center font-[600] text-[14px] lg:h-[50px] "
        >
          Description
        </div>
        <div
          id="descBox-reviews"
          className="border border-[#d0d0d0] h-[40px] w-[120px] flex justify-center items-center text-[14px] bg-[#fbfbfb] text-[#555] font-semibold lg:h-[50px] "
        >
          Reviews (122)
        </div>
      </div>
      <div
        id="desc"
        className="flex flex-col gap-5 border border-[#d0d0d0] p-3 lg:p-4"
      >
        <p className="text-[14px] text-gray-800">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet.It serves
          as a virtual marketplace where businesses and individuals can showcase
          their products,interact with customers,and conduct transactions
          without the need for a physical presence.E-commerce websites have
          gained immense popularity due to their convenience,accessibility,and
          the global reach they offer.
        </p>
        <p className="text-[14px] text-gray-800 pb-4">
          E-commerce website typically display products or services along with
          detailed descriptions,images,prices,and any available variations
          (e.g.sizes.colors) dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
}

export default Description;
