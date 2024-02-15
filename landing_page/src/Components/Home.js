import React from "react";
// import BannerBackground from "../Assets/WallPaper.png";
import BannerImage from "../Assets/tanker_1.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Streamline Your Internal Material Flow with Our Automated System
          </h1>
          <p className="primary-text">
          Say goodbye to manual data entry and streamline your material flow 
          process from truck arrival to offloading with our intuitive web application.
          </p>
          <button className="secondary-button">
            Visit us <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;