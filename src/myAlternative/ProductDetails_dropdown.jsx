import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../data/data_origin";
import { useNavigate } from "react-router-dom";
import "./ProductDetails_dropdown.css";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { IconContext } from "react-icons";
import { Box, TextField, MenuItem } from "@mui/material";
//change style of material design icons

export default function ProductDetails_UI() {
  let myparams = useParams();
  let currentData = getData(myparams.myParameter);
  //path=":myParameter" in routes
  // <Link to={`/Shop/${shopitem.parameter}`} key={shopitem.id}> in shop
  // useParams() returned an object with key:myParameter,values: ${shopitem.parameter}
  console.log(" myparams ", myparams.myParameter);
  console.log("currentData", currentData);
  //mydata is the object from data Array with certain parameters

  let mynavigate = useNavigate();
  const returnFun = () => {
    mynavigate("/shop");
  };

  //control the dropdown

  const [isOpen, setOpen] = useState(false);
  const [myitem, setMyItem] = useState("--Select Size--");

  // setOpen((prev) => {
  //   !prev;
  // });

  const handleOpen = () => {
    setOpen(!isOpen);
    //two approaches both work
  };

  return (
    <div className="container_details">
      <div className="return" onClick={returnFun}>
        Back to shop
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
          <div className="Size">
            <h5 className="sizeText">Lens Width and Frame Size</h5>
            <div className="dropdown">
              <button className="dropdown-button" onClick={handleOpen}>
                <div className="dropdown-text">{myitem}</div>
                <div className="sizeIcons">
                  {!isOpen ? (
                    <MdExpandMore color="blue" size="2em" />
                  ) : (
                    <MdExpandLess color="blue" size="2em" />
                  )}

                  {/* use rotate to change icon */}
                  {/* <MdExpandMore
                    style={{
                      transform: `rotate(${isOpen ? 180 : 0}deg)`,
                      transition: "all 0.5s",
                    }}
                  ></MdExpandMore> */}
                </div>
              </button>

              {isOpen ? (
                <ul className="menu">
                  {currentData.size.map((item, index) => (
                    <button
                      onClick={() => {
                        handleOpen();
                        setMyItem(item + "mm");
                      }}
                      className="item-btn"
                    >
                      <li className="menu-item" key={index}>
                        {item} mm
                      </li>
                    </button>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          <div className="colorPalatte">
            <h6 className="colorText">Choose Color</h6>
            {currentData.color.map((item, index) => {
              return (
                <div
                  className="color"
                  key={index}
                  style={{ backgroundColor: `${item}` }}
                ></div>
              );
            })}
          </div>
          <div className="price">
            <h3 className="priceText">${currentData.price}</h3>
          </div>

          <button class="basketbutton" type="button">
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
}
