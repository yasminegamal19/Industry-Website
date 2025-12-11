import React from "react";
import "./Footer.modules.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content p-5">
          <div className="row text-white">
          <div className="col-xl-5 col-12">
            <h6>About Us</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
            <p className="pt-3">
              Copyright ©2025 All rights reserved | This template is made with <br />
              <span>
                <i class="bi bi-heart"></i>
              </span>{" "}
              by <span>Colorlib</span>
            </p>
          </div>
          <div className="col-xl-5 col-12">
            <h6>Newsletter</h6>
            <p>Stay update with our latest</p>
            <form action="">
              <input type="email" placeholder="Enter Email" />
              <button className="arr">
                <i class="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="col-xl-2 col-12">
            <h6>Follow Us</h6>
            <p>Let us be social</p>
            <div className="icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-dribbble"></i>
                <i class="bi bi-behance"></i>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
