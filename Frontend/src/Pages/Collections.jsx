import React from "react";
import CollectionsContainer from "../Components/CollectionsContainer";
import Search from "../Components/Search";

function Collections() {
  return (
    <div className="lg:py-16 font-style w-[80vw] mx-auto opacity-100">
      <Search />
      <CollectionsContainer />
    </div>
  );
}

export default Collections;
