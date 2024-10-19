import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { shopContext } from "../Context/context";

function LatestCollection() {
  const { products } = useContext(shopContext);
  const [latestCollection, setLatestCollection] = useState([]);

  useEffect(() => {
    setLatestCollection(products.slice(0, 10));
  }, [products]);
  return (
    <div className="flex flex-col items-center my-4 font-style">
      <div id="popular-heading" className="my-3">
        <h1 className="text-3xl font-bold border-b-4 border-[#171717]">
          LATEST COLLECTION
        </h1>
      </div>
      <div
        id="popular-items"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-2 w-[80vw] mx-auto"
      >
        {latestCollection.map((item, i) => {
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

export default LatestCollection;
