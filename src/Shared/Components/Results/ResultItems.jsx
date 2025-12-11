import React from "react";
import './Results.modules.css';

const ResultItems = () => {
  const ResultData = [
    {
      id: 1,
      title: "2K+",
      des: "Projects Completed",
    },
    {
      id: 2,
      title: "5.5K",
      des: "Total Employees",
    },
    {
      id: 3,
      title: "959",
      des: "Happy clints",
    },
    {
      id: 4,
      title: "367",
      des: "Projects Completed",
    },
  ];

  return (
    <>
      {ResultData.map((result, index) => (
        <div className="result-item col-xl-3 col-12 text-center" key={result.id}>
          <div className="result-data my-3 mx-3">
            <div className="item-content text-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay={index * 300}>
              <div className="circle">
                <div className="inner"></div>
              </div>
              <h5 className="text-white">{result.title}</h5>
              <p className="text-white">{result.des}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResultItems;
