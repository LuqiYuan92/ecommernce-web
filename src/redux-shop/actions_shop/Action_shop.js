import { ADDTOCARTS } from "./ActionTypes";
import { ADDMORE } from "./ActionTypes";
import { DECREASE } from "./ActionTypes";
import { CLEAR } from "./ActionTypes";
import { REMOVE } from "./ActionTypes";
import { SETHOVER } from "./ActionTypes";

//use brackets

// const addToCarts = (parameter) => ({
//   type: ADDTOCARTS,
//   payload: parameter,
// });

//use {return }

//myColor, mySize
const addToCarts = (parameter, myColor, mySize) => {
  return {
    type: ADDTOCARTS,
    payload: { parameter, myColor, mySize },
  };
};

const addMore = (parameter) => {
  return {
    type: ADDMORE,
    payload: parameter,
  };
};

const decrease = (parameter) => {
  return {
    type: DECREASE,
    payload: parameter,
  };
};

const remove = (parameter) => {
  return {
    type: REMOVE,
    payload: parameter,
  };
};

const clear = (parameter) => {
  return {
    type: CLEAR,
    payload: parameter,
  };
};

const setHover = (parameter) => {
  return {
    type: SETHOVER,
    payload: parameter,
  };
};

export { addToCarts, addMore, decrease, remove, clear, setHover };
//function that returns actino as an object
