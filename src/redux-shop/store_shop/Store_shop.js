import { createStore } from "redux";
import Reducer_shop from "../reducer_shop/Reducer_shop";
let store_shop = createStore(Reducer_shop);

console.log("currentState", store_shop.getState());

export default store_shop;

// let unsubscribe = store_shop.subscribe(() => {
//   console.log("currentState0", store_shop.getState());
// });

// unsubscribe();
