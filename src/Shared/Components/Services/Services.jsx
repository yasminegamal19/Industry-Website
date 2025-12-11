import React from "react";
import ServiceItem from "./ServiceItem";
import './Services.css';

const Services = () => {
  return (
    <div className="service py-5 pb-2">
      <div className="container">
        <div className="row content">
          <h1 className="text-center">Our Capturing Market Sectors</h1>
          <p className="text-black-50 text-center">Who are in extremely love with eco friendly system..</p>
          <ServiceItem />
        </div>
      </div>
    </div>
  );
};

export default Services;
