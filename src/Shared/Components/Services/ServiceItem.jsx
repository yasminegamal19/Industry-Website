import React from "react";
import img1 from "./assets/s1.jpg.webp";
import img2 from "./assets/s2.jpg.webp";
import img3 from "./assets/s3.jpg.webp";
import '../Services/Services.css';

const ServiceItem = () => {
  const ItemData = [
    {
      id: 1,
      img: img1,
      title: "Automotive Engineering",
      des: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
    },
    {
      id: 2,
      img: img2,
      title: "Construction & Engineering",
      des: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
    },
    {
      id: 3,
      img: img3,
      title: "Industrial Engineering",
      des: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
    },
  ];

  return (
    <>
      {ItemData.map((item) => (
        <div className=" service-item col-xl-4 col-12" key={item.id}>
          <div className="item-data my-3 mx-3">
            <div className="img-box">
              <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p className="text-black-50">{item.des}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceItem;
