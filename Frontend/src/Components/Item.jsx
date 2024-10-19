import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../Context/context";
function Item({ image, name, price, id }) {
  const { setMenu } = useContext(shopContext);

  return (
    <div className="w-[140px] md:w-[190px] hover:scale-105 duration-500 my-4 cursor-pointer">
      <div id="item-img" className="w-full ">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt=""
            className="w-full object-cover"
            onClick={() => {
              window.scrollTo(0, 0);
              setMenu("");
            }}
          />
        </Link>
      </div>
      <div id="item-footer" className="w-full py-2">
        <p id="item-desc" className="text-sm  font-medium">
          {name}
        </p>
        <div className="flex gap-2 py-1">
          <span id="new-price" className="text-sm  font-medium">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Item;
