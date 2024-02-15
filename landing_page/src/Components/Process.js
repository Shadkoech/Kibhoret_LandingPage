import React from "react";
import Gate from "../Assets/gateentry.png";
import WeighIn from "../Assets/Weighbridge.png";
import Lab from "../Assets/Analysis.png";
import Tankfarm from "../Assets/tankfarmpic.jpg";
import WeighOut from "../Assets/wbout.png"

const Process = () => {
  const processInfoData = [
    {
      image: Gate,
      title: "Gate",
      text: "Truck gets into the company premise. Key info such as registration number, delivery number, arrival time etc recorded",
    },
    {
      image: WeighIn,
      title: "Weighbridge In",
      text: "Each individual truck then proceeds to the weighbridge for the first weight record",
    },
    {
      image: Lab,
      title: "Sampling & QC",
      text: "The trucks then proceeds to the next stage of sampling and quality control. Samples are taken and analyzed against set quality standards",
    },
    {
      image: Tankfarm,
      title: "Offloading",
      text: "Once the truck passes the quality checks, it proceeds to the offload the payload"
    },
    {
    image: WeighOut,
    title: "Weighbridge Out",
    text: "Finally the truck takes the second weight before leaving the company premise"
    }
  ];
  return (
    <div id="process" className="process-section-wrapper">
      <div className="process-section-top">
        <p className="primary-subheading">Process</p>
        <h1 className="primary-heading">Material flow</h1>
        <p className="primary-text">
            Kibhoret monitors truck payload as it moves from one department to the next.
            Each department in an organization plays a crucial role in material validation process.
        </p>
      </div>
      <div className="process-section-bottom">
        {processInfoData.map((data) => (
          <div className="process-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;