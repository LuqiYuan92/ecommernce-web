import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import {Routes, Route } from "react-router-dom";
// import FeaturedProducts from "./components/featuredProducts";
// import Shop from "./components/Shop";
// import Nav from "./components/Nav";
// import Home from "./components/home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
      {/* <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="Shop" element={<Shop></Shop>}></Route>
          <Route
            path="featuredProducts"
            element={<FeaturedProducts></FeaturedProducts>}
          ></Route>
        </Route>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
