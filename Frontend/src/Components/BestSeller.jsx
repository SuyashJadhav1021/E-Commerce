import React, { useContext, useEffect, useState } from "react";

import Item from "./Item";
import { shopContext } from "../Context/context";

function BestSeller() {
  const { products } = useContext(shopContext);

  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const product = products.filter((item) => item.bestseller);
    setBestProducts(product.slice(0, 5));
  }, [products]);
  return (
    <div className="flex flex-col items-center my-4 font-body w-[80vw] mx-auto">
      <div id="newCol-heading" className="my-3">
        <h1 className="text-3xl font-bold border-b-4 border-[#171717]">
          BEST SELLERS
        </h1>
      </div>
      <div
        id="newCol-items"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-[80vw] mx-auto"
      >
        {bestProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item._id}
              image={item.images[0]}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BestSeller;
