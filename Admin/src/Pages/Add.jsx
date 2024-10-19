import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCat, setSubcat] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState([]);
  const [bestseller, setBestSeller] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);
      formData.append("name", name);
      formData.append("description", desc);
      formData.append("category", category);
      formData.append("subCategory", subCat);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(size));
      formData.append("bestseller", bestseller);

      const res = await axios.post(backendURL + "/api/product/add", formData, {
        headers: { token },
      });
      if (res.data.success) {
        toast.success(res.data.msg);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setDesc("");
        setName("");
        setSize([]);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p>Upload Images</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20 cursor-pointer"
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20 cursor-pointer"
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20 cursor-pointer"
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20 cursor-pointer "
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p>Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p>Product Description</p>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write here"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub category</p>
          <select
            onChange={(e) => setSubcat(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Men">Topwear</option>
            <option value="Women">Bottomwear</option>
            <option value="Kids">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="$100"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSize((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item != "S")
                  : [...prev, "S"]
              )
            }
          >
            <p
              className={`${
                size.includes("S") ? "bg-gray-600 text-white" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSize((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item != "M")
                  : [...prev, "M"]
              )
            }
          >
            <p
              className={`${
                size.includes("M") ? "bg-gray-600 text-white" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSize((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item != "L")
                  : [...prev, "L"]
              )
            }
          >
            <p
              className={`${
                size.includes("L") ? "bg-gray-600 text-white" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSize((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item != "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <p
              className={`${
                size.includes("XL") ? "bg-gray-600 text-white" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSize((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item != "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            <p
              className={`${
                size.includes("XXL") ? "bg-gray-600 text-white" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onClick={() => setBestSeller((prev) => !prev)}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button className="w-28 py-2 bg-black text-white text-sm" type="submit">
        ADD
      </button>
    </form>
  );
};

export default Add;
