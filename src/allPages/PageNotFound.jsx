import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";

export default function PageNotFound() {
  const mynavi = useNavigate();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       mynavi("/");
  //     }, 2000);
  //   });

  const back = () => {
    mynavi("/");
  };
  return (
    <div style={{ marginLeft: "500px", marginTop: "100px" }}>
      <h1>:( Page you are looking for doesn't exists.</h1>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={back}
        style={{
          width: "100px",
          height: "30px",
          backgroundColor: "black",
          color: "#fff",
        }}
      >
        Go back
      </button>
    </div>
  );
}
