import React, { useEffect } from "react";
import allDatas from "../data/data_origin";
import "./Display.css";
import { Link } from "react-router-dom";

export default function DisplayRecom() {
  let data0 = allDatas();
  let data = data0.filter((item) => item.id < 7);
  console.log("6 products", data);
  return (
    <div className="productBox">
      <div className="display">
        <ul>
          {data.map((items, index) => {
            return (
              <li key={index} onClick={() => window.scrollTo(0, 0)}>
                <Link
                  to={`/Products/${items.parameter}`}
                  key={items.id}
                  className="mylink"
                >
                  <img src={items.img} alt="" />
                  <h2>{items.name}</h2>
                  <h3>{items.brand}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
