import React, { useEffect } from "react";

import PicRecom from "../components/PicRecom";
import DisplayRecom from "../components/DisplayRecom";
import Footer from "../components/footer";

export default function Recommend() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="productBox">
      <PicRecom></PicRecom>
      <DisplayRecom></DisplayRecom>
      <Footer></Footer>
    </div>
  );
}
