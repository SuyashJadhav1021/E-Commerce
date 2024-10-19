import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context/context";
import Item from "../Components/Item";

function RelatedProducts({ category, subcategory }) {
  const [related, setRelated] = useState([]);
  const { products } = useContext(shopContext);

  const fetchRelatedProd = () => {
    if (products.length > 0) {
      let prodCopy = products.slice();
      prodCopy = prodCopy.filter((item) => category === item.category);
      prodCopy = prodCopy.filter((item) => subcategory === item.subCategory);
      setRelated(prodCopy.slice(0, 5));
    }
  };

  useEffect(() => {
    fetchRelatedProd();
  }, [products]);

  return (
    <div className="mt-8">
      <div
        id="popular-heading"
        className="my-2 flex items-center justify-center"
      >
        <h1 className="text-3xl font-bold border-b-4 border-[#171717]">
          RELATED PRODUCTS
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {related.map((item, i) => {
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

export default RelatedProducts;
