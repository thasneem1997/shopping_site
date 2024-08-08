import React from "react";
import "../components/Slider.css";

function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-content">
        <h1>
          Elevate Your Wardrobe
          <br />{" "}
          <span style={{ color: "red", fontWeight: "600", fontSize: "57px" }}>
            Shop the Latest
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste
          <br />
          consequatur animi quia recusandae quod, laborum nam eligendi
        </p>
        <button className="slider-btn">View Menu</button>
      </div>
    </div>
  );
}

export default Slider;
