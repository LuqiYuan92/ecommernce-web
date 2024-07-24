import React from "react";
import "./Display.css";
import ShareFeatured from "../data/homeData";
import { Link } from "react-router-dom";

export default function DisplayFea() {
  let data0 = ShareFeatured();
  let data = data0.filter((item) => item.id > 3);
  console.log("6 products", data);
  return (
    <div className="productBox">
      <div className="display">
        <ul>
          {data.map((items, index) => {
            return (
              <li key={index}>
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
