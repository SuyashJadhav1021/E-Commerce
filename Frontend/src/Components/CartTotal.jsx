import React, { useContext } from "react";
import { shopContext } from "../Context/context";
import { Link } from "react-router-dom";

function CartTotal() {
  const { totalCart, shipping_fee } = useContext(shopContext);
  return (
    <div className="w-full">
      <div className="text-xl mb-3 font-bold">
        <h1>CART TOTAL</h1>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between text-gray-400 font-[500] border-b pb-3 border-gray-200">
          <p>Subtotal</p>
          <p>${totalCart()}.00</p>
        </div>
        <div className="flex justify-between font-[500] text-gray-400 border-b pb-3 border-gray-200">
          <p>Shipping fee</p>
          <p>${shipping_fee}.00</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>${totalCart() === 0 ? 0 : totalCart() + shipping_fee}.00</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
