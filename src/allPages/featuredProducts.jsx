import React from "react";
import ShareFeatured from "../data/homeData";
import PicFeatu from "../components/PicFeatu";
import DisplayFea from "../components/DisplayFea";
import Footer from "../components/footer";

//function name start with uppercase
//Each child in a list should have a unique "key" prop.
//html dom must used with return

function FeaturedProducts() {
  return (
    <div className="productBox">
      <PicFeatu></PicFeatu>
      <DisplayFea></DisplayFea>
      <Footer></Footer>
    </div>
  );
}

export default FeaturedProducts;
