import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendURL } from "../App";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await axios.get(backendURL + "/api/product/all");
      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const res = await axios.post(
        backendURL + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (res.data.success) {
        toast.success(res.data.msg);
        await fetchList();
      } else {
        toast.success(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div>
      <p className="mb-2">All Products</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Remove</b>
        </div>
        {list.map((item, i) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={i}
          >
            <img className="w-14" src={item.images[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>

            <IoClose
              onClick={() => removeProduct(item._id)}
              className="text-right text-lg  md:text-center cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
