import React from "react";
import AboutBackgroundImage from "../Assets/side.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Revolutionizing Operational Efficiency Through Automation
        </h1>
        <p className="primary-text">
          Material Flow Management System (Kibhoret) is a revolutionary web
          application designed to automate and streamline the process of
          handling incoming raw within industrial and logistical settings. The
          app optimizes the flow of trucks from gate entry to final offloading
          by seamlessly integrating with existing backend systems and employing
          intuitive user interfaces.
        </p>
        <p className="primary-text">
          By implementing timely and stepwise monitoring, the system achieves
          heightened efficiency, accuracy, and overall increased operational
          productivity, resulting in significant savings of both time and
          resources.
        </p>
        <div className="about-buttons-container">
          <a
            href="https://github.com/Shadkoech/Kibhoret_LandingPage/blob/master/README.md"
            className="secondary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
