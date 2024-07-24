import React from "react";
import logoE from "../images/logo-ecom.png";

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          width: "100%",
          height: "100px",
          background: "#f9f9f9",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="logo">
          <img src={logoE} alt="logo"></img>
          <div style={{ marginLeft: "80px" }}>@2024</div>
        </div>
      </footer>
    </div>
  );
}
