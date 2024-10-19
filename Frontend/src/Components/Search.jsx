import React, { useContext } from "react";
import { shopContext } from "../Context/context";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Search() {
  const { showSearch, setShowSearch, setSearch, search } =
    useContext(shopContext);
  const closeSearch = () => {
    setShowSearch(false);
    setSearch("");
  };
  return showSearch ? (
    <div className="mb-2 border-b border-gray-400 flex justify-center items-center flex-col h-32">
      <div className="flex items-center justify-center mt-10 w-[50%] mx-auto  h-9 lg:mt-16 lg:w-[45%]">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="border border-gray-300 flex-1 h-full rounded-s-lg  bg-gray-50 outline-none"
        />
        <div className="w-9  rounded-e-lg h-full flex justify-center items-center bg-gray-100 outline-none border border-gray-300">
          <IoSearch className="text-lg font-semibold" />
        </div>
        <IoMdClose
          className="ml-3 text-xl font-semibold cursor-pointer"
          onClick={() => closeSearch()}
        />
      </div>
    </div>
  ) : null;
}

export default Search;
