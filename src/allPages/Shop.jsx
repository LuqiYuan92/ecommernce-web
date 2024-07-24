import React from "react";
import allDatas from "../data/data_origin";
import "./Shop.css";
import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MyProductDetails from "./myProductDetails";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCarts,
  remove,
  setHover,
} from "../redux-shop/actions_shop/Action_shop";
import CheckIcon from "@mui/icons-material/Check";
import Footer from "../components/footer";

export default function Shop() {
  //redux
  let shopData = useSelector((state) => {
    return state.allproducts;
  });

  // let shopData = allDatas();

  //redux
  let cartproducts = useSelector((state) => state.cartItems);
  // console.log("allproducts", shopData);
  // console.log("cartproducts", cartproducts);

  let dispatch = useDispatch();

  let addToCarts_dispatch = (parameter, color, size) => {
    dispatch(addToCarts(parameter, color, size));
    console.log("add to carts");
  };

  let remove_dispatch = (parameter) => {
    dispatch(remove(parameter));
  };

  //toggle between add basket and remove basket

  //  const [isAdded, setAdded] = useState(false);
  //  const [isHover, setHover] = useState();

  // const handleAdded = () => {
  //   setAdded(!isAdded);
  // };

  //use dispatch instead of useState
  function handleMouseEnter(parameter) {
    dispatch(setHover(parameter));
    // setHover(true);
  }

  const handleMouseLeave = (parameter) => {
    dispatch(setHover(parameter));
    // setHover(false);
  };

  // useRef to get the li element; not functioning in app,just a try
  let listRefs = useRef([]);

  // useEffect(() => {
  //   shopData.map((item, index) => {
  //     listRefs.current[index].addEventListener("click", function () {
  //       listRefs.current[index].innerHTML = `${item.id}`;
  //       console.log("refclick", index);
  //     });
  //   });
  // }, []);

  //to={`/Shop/${shopitem.parameter}`} route path
  return (
    <div>
      <div className="shop">
        <div className="shopBox">
          <div className="displayShop">
            <ul>
              {shopData.map((shopitem, shopindex) => {
                return (
                  <li
                    key={shopindex}
                    className="displayli"
                    onMouseEnter={() => handleMouseEnter(shopitem.parameter)}
                    onMouseLeave={() => handleMouseLeave(shopitem.parameter)}
                    ref={(element) => (listRefs.current[shopindex] = element)}
                  >
                    <Link
                      to={`/Products/${shopitem.parameter}`}
                      key={shopitem.id}
                      className="mylink"
                    >
                      {shopitem.added ? (
                        <CheckIcon
                          sx={{
                            color: "green",
                            position: "absolute",
                            top: "10px",
                            right: "0px",
                          }}
                        ></CheckIcon>
                      ) : null}
                      <img
                        src={shopitem.img}
                        className="image"
                        alt="eyewear"
                      ></img>
                      <div className="infor">
                        <h2 className="name">{shopitem.name}</h2>
                        <h2 className="brand">{shopitem.brand}</h2>
                        <h2 className="price">${shopitem.price}</h2>
                      </div>
                    </Link>

                    {shopitem.hover ? (
                      <div className="btnBox">
                        <div className="shopbtn">
                          {!shopitem.added ? (
                            <button
                              className="addedBtn"
                              onClick={() => {
                                addToCarts_dispatch(
                                  shopitem.parameter,
                                  shopitem.color[0],
                                  shopitem.size[0]
                                );
                              }}
                            >
                              Add to Cart
                            </button>
                          ) : (
                            <button
                              className="removedBtn"
                              onClick={() => {
                                remove_dispatch(shopitem.parameter);
                              }}
                            >
                              Remove from Cart
                            </button>
                          )}
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <ShopContainer></ShopContainer> */}
      </div>
      <Footer></Footer>
    </div>
  );
}
