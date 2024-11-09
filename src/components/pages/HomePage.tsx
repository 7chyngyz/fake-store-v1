import React from "react";
import Welcome from "./HomeSections/Welcome";
import Cart from "./HomeSections/Cart";
import BrowseByCategories from "./HomeSections/BrowseByCategories";
import Music from "./HomeSections/Music";
import ExploreProducts from "./HomeSections/ExploreProducts";
import Commerce from "./HomeSections/Commerce";
import BestProducts from "./HomeSections/BestProducts";
import FeaturedPage from "./HomeSections/Feature/Feature";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Cart />
      <BrowseByCategories />
      <BestProducts />
      <Music />
      <ExploreProducts />
      <FeaturedPage />
      <Commerce />
    </>
  );
};

export default HomePage;
