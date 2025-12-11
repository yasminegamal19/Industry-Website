import React from "react";
import './CatArea.css';

const CatCard = () => {
  const catData = [
    {
      id: 1,
      icon: { iconName: "bi-pen", iconLink: "www.example.com" },

      title: "Maintenance",
      des: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.",
    },
    {
      id: 2,
      icon: { iconName: "bi-rocket-takeoff", iconLink: "www.example.com" },

      title: "Residental Service",
      des: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.",
    },
    {
      id: 3,
      icon: { iconName: "bi-bug", iconLink: "www.example.com" },

      title: "Commercial Service",
      des: "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.",
    },
  ];

  return (
    <>
      {catData.map((card) => (
        <div className=" cat-card col-xl-4 col-12 text-center" key={card.id}>
          <div className="cat-data my-3">
            <div className="row d-flex flex-column">
              <div className="icon"><i className={`bi ${card.icon.iconName}` }></i></div>
              <h3>{card.title}</h3>
              <p className="text-black-50">{card.des}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CatCard;
