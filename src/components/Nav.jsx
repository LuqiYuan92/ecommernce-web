import React from "react";
import logoE from "../images/logo-ecom.png";
import "./Nav.css";
import { Link, Outlet } from "react-router-dom";
// import { LuShoppingBag } from "react-icons/lu";
import ShopDrawer from "./Drawer";
import SearchIcon from "@mui/icons-material/Search";

function Nav() {
  return (
    <div>
      <div className="navBox">
        <nav className="topnav">
          <div className="logo">
            <a href="https://salinaka-ecommerce.web.app/shop">
              <img src={logoE} alt="logo"></img>
            </a>
          </div>
          <div className="nav_menu">
            <ul>
              <li>
                <Link to="/" className="mylink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Shop" className="mylink">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/featuredProducts" className="mylink">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="Recommend" className="mylink">
                  Recommended
                </Link>
              </li>
            </ul>
          </div>
          <div className="searchBar">
            <div className="icon">
              <SearchIcon
                sx={{
                  color: "grey",
                  position: "relative",
                  top: "15px",
                  left: "30px",
                }}
              ></SearchIcon>
            </div>
            <form action="">
              <input
                className="searchInput"
                type="text"
                id="search"
                placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search product..."
              ></input>
            </form>
          </div>
          <div className="basketBox">
            <ShopDrawer></ShopDrawer>
          </div>
          <div className="signBox">
            <button className="signupBox">
              <a
                href="https://salinaka-ecommerce.web.app/signup"
                className="signup"
              >
                Sign Up
              </a>
            </button>
            <button className="signinBox">
              <a
                href="https://salinaka-ecommerce.web.app/signin"
                className="signin"
              >
                Sign In
              </a>
            </button>
          </div>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Nav;
