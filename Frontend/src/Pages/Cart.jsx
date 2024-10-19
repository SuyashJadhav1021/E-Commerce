import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { shopContext } from "../Context/context";
import { FaRegTrashCan } from "react-icons/fa6";
import CartTotal from "../Components/CartTotal";
import { Link } from "react-router-dom";

function Cart() {
  const { products, cartData, updateCart } = useContext(shopContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let tempData = [];

      for (const items in cartData) {
        for (const item in cartData[items]) {
          if (cartData[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartData[items][item],
            });
          }
        }
      }
      setCartItems(tempData);
    }
  }, [cartData, products]);

  return (
    <div className="lg:py-24 font-style w-[80vw] mx-auto">
      {cartItems.map((item) => {
        let productData = products.find((prod) => prod._id === item._id);
        return (
          <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
            <div className="flex items-start gap-6">
              <img
                src={productData.images[0]}
                alt=""
                className="w-16 sm:w-20"
              />
              <div>
                <p className="text-xs sm:text-lg font-medium">
                  {productData.name}
                </p>
                <div className="flex items-center gap-5 mt-2">
                  <p>${productData.price}</p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                    {item.size}
                  </p>
                </div>
              </div>
            </div>
            <input
              type="number"
              min={1}
              defaultValue={item.quantity}
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              onClick={(e) =>
                e.target.value === " " || e.target.value === 0
                  ? null
                  : updateCart(item._id, item.size, Number(e.target.value))
              }
            />
            <FaRegTrashCan
              className="cursor-pointer text-lg"
              onClick={() => updateCart(item._id, item.size, 0)}
            />
          </div>
        );
      })}
      <div className="flex justify-end my-8">
        <div className="flex flex-col">
          <div className="w-full sm:w-[420px]">
            <CartTotal />
          </div>
          <div className="text-end mt-5">
            <Link to={"/place-order"}>
              <button className="bg-black text-white text-sm px-6 py-2 rounded-sm hover:bg-gray-900 active:bg-gray-700">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
