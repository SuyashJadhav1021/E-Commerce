import React from "react";
import Item from "../Components/Item";
import { IoIosArrowForward } from "react-icons/io";
import { shopContext } from "../Context/context";
import { useContext, useEffect, useState } from "react";

function CollectionsContainer() {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const applyFilter = () => {
    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (search && showSearch) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilterProducts(productCopy);
  };

  const sortProduct = () => {
    let filterProdCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProdCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProdCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, products]);

  return (
    <div className="flex flex-col text-black lg:flex-row lg:gap-5">
      <div className="m-2">
        <div
          className="flex items-center gap-1"
          onClick={() => setShowFilter(!showFilter)}
        >
          <button className="text-xl font-style font-bold my-3 mt-7 cursor-pointer lg:block">
            FILTERS
          </button>
          <IoIosArrowForward
            className="text-lg lg:hidden  mt-4"
            style={{ transform: showFilter ? "rotate(90deg)" : "" }}
          />
        </div>
        <div
          className={`min-w-60 border  border-gray-400 p-3 mt-3 ${
            showFilter ? "" : "hidden"
          } lg:block`}
        >
          <h1 className="font-bold">CATEGORIES</h1>
          <div className="flex gap-2 text-gray-500 font-[500]">
            <input type="checkbox" value={"Men"} onChange={toggleCategory} />
            Men
          </div>
          <div className="flex gap-2 text-gray-500 font-[500]">
            <input type="checkbox" value={"Women"} onChange={toggleCategory} />
            Women
          </div>
          <div className="flex gap-2 text-gray-500 font-[500]">
            <input type="checkbox" value={"Kids"} onChange={toggleCategory} />
            Kids
          </div>
        </div>
        <div
          className={`min-w-60 border  border-gray-400 p-3 mt-4 ${
            showFilter ? "" : "hidden"
          } lg:block`}
        >
          <h1 className="font-bold">TYPE</h1>
          <div className="flex gap-2 text-gray-500 font-[500]">
            <input
              type="checkbox"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            Topwear
          </div>
          <div className="flex gap-2 text-gray-500 font-[500]">
            <input
              type="checkbox"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />
            Bottomwear
          </div>
          <div className="flex gap-2 text-gray-500 font-[500]">
            <input
              type="checkbox"
              value={"Winterwear"}
              onChange={toggleSubCategory}
            />
            Winterwear
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-3 justify-between mt-8 mb-2 ">
          <h1 className="font-semibold text-2xl">
            <span className="text-gray-500">ALL </span>COLLECTIONS{" "}
          </h1>
          <select
            className="border-2 border-gray-300 w-36 text-sm px-1 py-1 "
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by:Relevant</option>
            <option value="low-high">Sort by:Low to high</option>
            <option value="high-low">Sort by:High to low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:grid-cols-4 lg:gap-6">
          {filterProducts.map((item, i) => {
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
    </div>
  );
}

export default CollectionsContainer;
