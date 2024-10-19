import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import Offer from "../Components/Offer";
import BestSeller from "../Components/BestSeller";
import Policy from "../Components/Policy";
import NewsLetter from "../Components/NewsLetter";

function Shop() {
  return (
    <div className="w-full">
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <Offer></Offer>
      <BestSeller></BestSeller>
      <Policy></Policy>
      <NewsLetter></NewsLetter>
    </div>
  );
}

export default Shop;
