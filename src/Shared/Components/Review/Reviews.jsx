import React from "react";
import "./Reviews.modules.css";

const Reviews = () => {
  return (
    <div className="review py-5">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="content text-white">
          <div className="header text-center">
            <h1>Enjoy our Client’s Feedback</h1>
            <p>Who are in extremely love with eco friendly system..</p>
          </div>
          <div className="row justify-content-center align-items-center review-content">
            <div className="img col-xl-6 col-12" data-aos="fade-right" data-aos-delay="300">
              <img src="./video-bg.jpg.webp" alt="" className="h-80"/>
            </div>
            <div className="feedback col-xl-6 col-12" data-aos="fade-left" data-aos-delay="300">
                <div className="stars d-flex  align-items-center ">
                <h4>Fannie Rowe</h4>
                <div className="icons">
                   <i class="bi bi-star-fill active"></i>
                   <i class="bi bi-star-fill active"></i>
                   <i class="bi bi-star-fill active"></i>
                   <i class="bi bi-star-fill"></i>
                   <i class="bi bi-star-fill"></i>
                </div>
                </div>
                <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
