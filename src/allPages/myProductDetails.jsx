import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../data/data_origin";
import { useNavigate } from "react-router-dom";
import "./myProductDetails.css";
// import { MdExpandMore } from "react-icons/md";
// import { MdExpandLess } from "react-icons/md";
import { Box, TextField, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector, useDispatch } from "react-redux";
import { addToCarts, remove } from "../redux-shop/actions_shop/Action_shop";
import DisplayRecom from "../components/DisplayRecom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SEARCH } from "../redux-shop/actions_shop/ActionTypes";
import Footer from "../components/footer";

// import { IconContext } from "react-icons";
//change style of material design icons

export default function MyProductDetails() {
  //keep the page to the very beginning after navigate to the current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //redux

  // let shopData = allDatas();

  let cartproducts = useSelector((state) => state.cartItems);

  console.log("cartproductsdetails", cartproducts.color);

  let dispatch = useDispatch();

  //myColor, mySize passed to action payload
  let addToCarts_dispatch = (parameter, myColor, mySize) => {
    dispatch(addToCarts(parameter, myColor, mySize));
    console.log("add to carts");
  };

  //useParams from Routes path//path=":myParameter" in routes
  let myparams = useParams();
  console.log(" myparams ", myparams);
  //getData is the self-defined function using filter
  let currentData = getData(myparams.myParameter);

  //MUST USE useSelector to change the data in database;currentData Cannot change the database
  let shopData = useSelector((state) => {
    return state.allproducts;
  });

  //. find() returns the first matching element, while . filter() returns an array of all matching elements.
  // find-->searcheditems.added;
  // filter-->searcheditems[0].added
  let searcheditems = shopData.filter(
    (item, index) => item.parameter === myparams.myParameter
  );

  console.log("searched", searcheditems);

  // <Link to={`/Products/${shopitem.parameter}`} key={shopitem.id}> in shop
  // useParams() returned an object with key:myParameter,values: ${shopitem.parameter}

  console.log("currentData", currentData);
  //mydata is the object from data Array with certain parameters

  let mynavigate = useNavigate();

  const returnFun = () => {
    mynavigate("/shop");
  };

  //control the dropdown

  const [isOpen, setOpen] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const [myColor, setColor] = useState();
  const [mySize, setSize] = useState();

  const handleAdded = () => {
    setAdded(!isAdded);
    console.log("mycolorsize", myColor, mySize);
  };

  // setOpen((prev) => {
  //   !prev;
  // });

  const handleOpen = () => {
    setOpen(!isOpen);
    //two approaches both work
  };

  const handleChange = (e) => {
    setSize(e.target.value);
    console.log("targetvalue", e.target.value);
  };

  return (
    <div className="container_details">
      <div className="return" onClick={returnFun}>
        <span>
          <ArrowBackIcon
            sx={{ position: "relative", top: "5px" }}
          ></ArrowBackIcon>
        </span>
        <span>Back to shop</span>
      </div>

      <div className="detailBox">
        <div className="imgSmallWrap">
          <div className="imgSmall">
            <img src={currentData.img} alt="eyewear"></img>
          </div>
        </div>

        <div className="imgBig">
          <img src={currentData.img} alt="eyewear"></img>
        </div>

        <div className="details">
          <div className="detailBrand">
            <h5 className="brandText">{currentData.brand}</h5>
          </div>
          <div className="detailName">
            <h3 className="nameText">{currentData.name}</h3>
          </div>
          <div className="description">
            <h5 className="descText">{currentData.desc}</h5>
          </div>
          <div className="divider"></div>
          <div className="Size">
            <h5 className="sizeText">Lens Width and Frame Size</h5>

            <div className="dropdown">
              <div className="dropMenu">
                <TextField
                  label="--Select Size--"
                  value={mySize}
                  select
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    width: "450px",
                    "& .MuiFormLabel-root": {
                      lineHeight: "1.2em",
                      fontSize: "1rem",
                    },
                    "& .MuiInputBase-root": {
                      height: "45px",
                    },
                  }}
                  // InputProps={{
                  //   sx: { height: "50px" },
                  // }}
                >
                  {currentData.size.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}mm
                    </MenuItem>
                  ))}
                </TextField>

                {/* menuItem is the dropdown list box */}
              </div>
            </div>
          </div>
          <div className="colorPalatte">
            <h6 className="colorText">Choose Color</h6>
            <div className="circleBox">
              {currentData.color.map((curColor, index) => {
                return (
                  <button
                    className="colorCircle"
                    key={index}
                    onClick={() => setColor(curColor)}
                    style={{ backgroundColor: `${curColor}` }}
                  >
                    {myColor === curColor ? (
                      <CheckIcon sx={{ color: "#FFF" }} />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="price">
            <h3 className="priceText">
              ${currentData.price}
              {currentData.added}
            </h3>
          </div>

          {!searcheditems[0].added ? (
            <button
              className="basketbutton_add"
              type="button"
              onClick={() => {
                handleAdded();
                addToCarts_dispatch(currentData.parameter, myColor, mySize);
              }}
            >
              Add To Basket
            </button>
          ) : (
            <button
              className="basketbutton_remove"
              onClick={() => {
                handleAdded();
                dispatch(remove(currentData.parameter, myColor, mySize));
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>

      <div className="displaySection">
        <h1 className="displayTitle">Recommended</h1>
        <DisplayRecom></DisplayRecom>
      </div>
      <Footer></Footer>
    </div>
  );
}

//function in the onClick, require use arrowsign if parameters being passed
