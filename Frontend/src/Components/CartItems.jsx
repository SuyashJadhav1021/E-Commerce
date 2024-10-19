import React, { useContext } from "react";
import { shopContext } from "../Context/context";

function CartItems() {
  const { products, cartItems } = useContext(shopContext);
  return (
    <div className="w-[80vw] mx-auto">
      <div id="cartitems-header" className="main-format">
        <div>Products</div>
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Remove</div>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-none" />
      {products.map((item) => {
        if (cartItems[item.id] > 0)
          return (
            <div id="cartitems-main" className="main-format">
              <img src={item.image} alt="" />
              <div>{item.name}</div>
              <div>${item.new_price}</div>
              <button className="bg-[#eeeeee] w-12 h-10">
                {cartItems[item.id]}
              </button>
              <div>${item.new_price * cartItems[item.id]}</div>
              <div></div>
            </div>
          );
      })}
    </div>
  );
}

export default CartItems;
