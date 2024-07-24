import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import FeaturedProducts from "./allPages/featuredProducts";
import Shop from "./allPages/Shop";
import Nav from "./components/Nav";
import Home from "./allPages/home";
import MyProductDetails from "./allPages/myProductDetails";
import PageNotFound from "./allPages/PageNotFound";
import { Provider } from "react-redux";
import store_shop from "./redux-shop/store_shop/Store_shop";
import Products from "./allPages/Products";
import Recommend from "./allPages/Recommend";
import Footer from "./components/footer";
import { useNavigate } from "react-router-dom";

//Route index is the default page + nav
//outlet in <Nav></Nav>

function App() {
  let mynavi = useNavigate();

  // every fresh the page nagvi to the defaulted page
  useEffect(() => {
    mynavi("/");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* put nav before Routes */}
      {/* <Nav /> */}
      <Provider store={store_shop}>
        <Routes>
          <Route path="/" element={<Nav></Nav>}>
            <Route index element={<Home></Home>}></Route>
            <Route
              path="featuredProducts"
              element={<FeaturedProducts></FeaturedProducts>}
            ></Route>
            <Route path="Shop" element={<Shop></Shop>}></Route>
            <Route path="Recommend" element={<Recommend></Recommend>}></Route>
            <Route path="Products">
              <Route
                path=":myParameter"
                element={<MyProductDetails></MyProductDetails>}
              ></Route>
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

//another way to write routes--in APP: only write nav,footer,outlet
//routes  put in the index.js file
{
  /* <div>
  <nav></nav>
  <Outlet></Outlet>
  <footer></footer>
</div>; */
}
