import allDatas from "../../data/data_origin";

import { ADDTOCARTS, ADDMORE, DECREASE } from "../actions_shop/ActionTypes";

import { REMOVE, CLEAR, SETHOVER } from "../actions_shop/ActionTypes";

//ADDTOCARTS IS a string;addToCarts is an object
let shopdata = allDatas();

console.log("reducerdata", shopdata);

let initialState = {
  allproducts: shopdata,
  cartItems: [],
};

let Reducer_shop = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCARTS:
      //   let { id, name, price } = state.allproducts.find(
      //     (item, index) => item.parameter === action.payload);

      //find only return one item that satifsfy condition
      let findCartItem = state.allproducts.find(
        (item, index) => item.parameter === action.payload.parameter
      );
      findCartItem = {
        ...findCartItem,
        quantity: 1,
        added: true,
        color: action.payload.myColor,
        size: action.payload.mySize,
      };

      return {
        allproducts: state.allproducts.map((item, index) =>
          item.parameter === action.payload.parameter
            ? { ...item, added: true }
            : item
        ),
        cartItems: [...state.cartItems, findCartItem],
      };
    case ADDMORE:
      return {
        ...state,
        cartItems: state.cartItems.map((item, index) =>
          item.parameter === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE:
      let searchCartItem = state.cartItems.find(
        (item, index) => item.parameter === action.payload
      );

      if (searchCartItem.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item, index) =>
            item.parameter === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          allproducts: state.allproducts.map((item, index) =>
            item.parameter === action.payload ? { ...item, added: false } : item
          ),
          cartItems: state.cartItems.filter(
            (item, index) => item.parameter !== action.payload
          ),
        };
      }

    case REMOVE:
      let remainItems = state.cartItems.filter(
        (item, index) => item.parameter !== action.payload
      );
      return {
        ...state,
        allproducts: state.allproducts.map((item, index) =>
          item.parameter === action.payload ? { ...item, added: false } : item
        ),
        cartItems: remainItems,
      };

    case CLEAR:
      return {
        ...state,
        allproducts: state.allproducts.map((item, index) => {
          return { ...item, added: false };
        }),

        cartItems: [],
      };

    case SETHOVER:
      return {
        ...state,
        allproducts: state.allproducts.map((item, index) =>
          item.parameter === action.payload
            ? { ...item, hover: true }
            : { ...item, hover: false }
        ),
      };

    default:
      return state;
  }
};
export default Reducer_shop;
