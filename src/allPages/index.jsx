import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import FeaturedProducts from "./featuredProducts";
import Recommend from "./Recommend";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DisplayFea from "../components/DisplayFea";
import DisplayRecom from "../components/DisplayRecom";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="home">
      <div className="bannerBox">
        <div className="banner">
          <h1>
            <strong>SEE</strong>&nbsp;everything with&nbsp;
            <strong>Clarity</strong>
          </h1>
          <p>
            Buying eyewear should leave you happy and good-looking, with money
            in your pocket. Glasses, sunglasses, and contacts—we’ve got your
            eyes covered.
          </p>
          <Link to="/Shop">
            <button className="btn">
              <h4>Shop Now</h4>
              <div className="arrowShop">
                <KeyboardDoubleArrowRightIcon color="#fff" />
              </div>
            </button>
          </Link>
        </div>
        <div className="image">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/93/06/77/1000_F_293067788_k6pzfuciWZHLql9rvF23kNRxkLVpSyz2.jpg"
            alt="Eyewear"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="displaySection">
        <h1 className="displayTitle">Featured Products</h1>

        <DisplayFea></DisplayFea>
        <h1 className="displayTitle">Recommended Products</h1>

        <DisplayRecom></DisplayRecom>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
