import React from "react";
import Announcement from "../components/Announcement";
import Catergories from "../components/Catergories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Catergories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
