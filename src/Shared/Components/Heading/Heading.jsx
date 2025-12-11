import React from "react";
import "./Heading.modules.css";

const Heading = () => {
  return (
    <div className="heading py-5">
      <div class="overlay overlay-bg"></div>
      <div className="container">
        <div className="content">
          <h1>We’re Industrial solution</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et <br></br>dolore magna aliqua.
            Ut enim ad minim. sed do eiusmod tempor incididunt.
          </p>
          <button className="btn text-uppercase">get started</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
