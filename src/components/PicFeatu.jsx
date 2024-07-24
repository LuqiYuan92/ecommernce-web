import React from "react";

export default function PicFeatu() {
  return (
    <div>
      <div className="bannerBox">
        <div className="banner">
          <h1>
            <strong>Featured Products</strong>
          </h1>
        </div>
        <div className="image">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/58/85/88/1000_F_158858886_yEsPUJbvNycjzFXp5Faf1LqMutikav5O.jpg"
            alt="Eyewear"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
