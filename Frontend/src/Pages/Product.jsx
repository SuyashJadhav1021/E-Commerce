import React, { useContext, useEffect, useState } from "react";

import { shopContext } from "../Context/context";
import { useParams } from "react-router-dom";

import Description from "../Components/Description";
import RelatedProducts from "../Components/RelatedProducts";
import { assets } from "../assets/frontend_assets/assets";

function Product() {
  const { products, addToCart } = useContext(shopContext);
  const { id } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchSingleProduct = async () => {
    products.map((item) => {
      if (item._id === id) {
        setProductData(item);
        setImage(item.images[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return productData ? (
    <div className="lg:py-24 font-style w-[85vw] mx-auto mt-5 lg:w-[80vw]">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div id="left" className=" flex gap-2 w-[600px] h-[350px] lg:h-[480px]">
          <div
            id="img-list"
            className="w-[10%] h-full flex flex-col gap-2 lg:w-[90px]"
          >
            {productData.images.map((item, index) => {
              return (
                <img
                  src={item}
                  alt=""
                  className="h-[100px] w-full object-cover cursor-pointer "
                  onClick={() => setImage(item)}
                />
              );
            })}
          </div>
          <div
            id="main-img"
            className="w-[50%] h-[350px] lg:w-[350px] lg:h-[426px]"
          >
            <img src={image} alt="" className="h-full w-full" />
          </div>
        </div>
        <div id="right" className="flex-col gap-2 ">
          <div id="title">
            <h1 className="text-2xl font-bold mt-2">{productData.name}</h1>
          </div>
          <div
            id="ratings"
            className="flex items-center text-[14px] gap-1 mt-1"
          >
            <img src={assets.star_icon} alt="" className="h-[15px]" />
            <img src={assets.star_icon} alt="" className="h-[15px]" />
            <img src={assets.star_icon} alt="" className="h-[15px]" />
            <img src={assets.star_icon} alt="" className="h-[15px]" />
            <img src={assets.star_dull_icon} alt="" className="h-[15px]" />
            <div className="ml-2 font-semibold">(122)</div>
          </div>
          <div id="price" className="text-[18px] font-semibold my-2">
            ${productData.price}
          </div>
          <div id="desc" className="text-[14px] text-gray-600 font-[500] my-1">
            {productData.description}
          </div>
          <div id="sizes" className="my-3">
            <div className="text-[16px] font-semibold text-gray-700 my-1">
              Select Size
            </div>
            <div id="size" className="flex gap-3">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`bg-gray-100 px-2 py-1 mt-1 text-[15px] text-gray-950 font-semibold font-display ${
                      size === item ? "border border-gray-800" : ""
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div id="btn" className="mb-6">
            <button
              className="bg-black text-white text-[12px] px-5 py-2 font-[500] my-2 hover:bg-[#363636] active:bg-gray-700"
              onClick={() => addToCart(productData._id, size)}
            >
              ADD TO CART
            </button>
          </div>
          <hr className="h-1 bg-gray-50" />
          <div
            id="info"
            className="flex flex-col p-2 text-[14px] text-gray-500 mb-5 lg:mb-3"
          >
            <span>100% original product.</span>
            <span>Cash on delivery is available on this product.</span>
            <span>Easy return and exchange policy within 7 days.</span>
          </div>
        </div>
      </div>
      <Description />
      <RelatedProducts
        category={productData.category}
        subcategory={productData.subCategory}
      />
    </div>
  ) : null;
}

export default Product;

// lg:h-[420px]
