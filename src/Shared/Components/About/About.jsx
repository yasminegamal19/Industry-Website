import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-12 about-content">
            <h6>Brand new app to blow your mind</h6>
            <h1>
              We’ve made a life <br />
              that will change you
            </h1>
            <p className="sub">
              We are here to listen from you deliver exellence
            </p>
            <p className="pb-20 text-black-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod temp or incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim.
            </p>
            <a href="#" className="btn">
              Get Started Now
            </a>
          </div>
          <div className="col-xl-4 col-12 about-form">
            <form>
              <fieldset>
                <legend>Request a Quote</legend>
                <div class="mb-3 input">
                  <select id="disabledSelect" class="form-select">
                    <option>select Service</option>
                  </select>
                </div>
                <div class="mb-3 input">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Name"
                  />
                </div>
                <div class="mb-3 input">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="mb-3 input">
                  <input
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Email Adress"
                  />
                </div>
                <div class="mb-3 input">
                  <textarea
                    type="text"
                    id="disabledTextInput"
                    class="form-control"
                    placeholder="Message"
                  />
                </div>
                
                
                <button type="submit" class="btn">
                  Request Free Qute
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
