import { useSelector, useDispatch } from "react-redux";
import { addToCarts } from "../actions_shop/Action_shop";
import React from "react";

export default function ShopContainer() {
  let allproducts = useSelector((state) => state.allproducts);
  let cartproducts = useSelector((state) => state.cartItems);
  console.log("allproducts", allproducts);
  console.log("cartproducts", cartproducts);

  let dispatch = useDispatch();

  let addToCarts_dispatch = (parameter) => {
    dispatch(addToCarts(parameter));
    console.log("add to carts");
  };

  return (
    <div>
      Shop
      <hr></hr>
      <ul className="uls">
        {allproducts.map((item, index) => {
          return (
            <li key={index} className="listShow">
              <h1>{item.brand}</h1>
              <button
                onClick={() => {
                  addToCarts_dispatch(item.parameter);
                }}
              >
                点击添加至购物车
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
