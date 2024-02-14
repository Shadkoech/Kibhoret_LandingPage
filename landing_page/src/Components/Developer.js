import React from "react";
import { AiFillStar } from "react-icons/ai";

const Developers = () => {
  return (
    <div className="process-section-wrapper">
      <div className="process-section-top">
        <p className="primary-subheading">Developers</p>
        <h1 className="primary-heading">The Team</h1>
      </div>
      <div className="developer-section-bottom">
        <div>
          <h2>Name: Koech Shadrack</h2>
          <p>Github: <a href="https://github.com/Shadkoech">link</a><br />LinkedIn: <a href="https://www.linkedin.com/in/koechshadrack">link</a></p>
        </div>
        <div className="developers-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div>
          <h2>Name: Joseph Kibuchi</h2>
          <p>Github: <a href="https://github.com/kibuchijw">link</a><br />LinkedIn: <a href="https://www.linkedin.com/in/joseph-k-25a17a78">link</a></p>
        </div>
        <div className="developers-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div>
          <h2>Name: Jukunye Shira</h2>
          <p>Github: <a href="https://github.com/Jukunye">link</a><br />LinkedIn: <a href="https://www.linkedin.com/in/jukunye">link</a></p>
        </div>
        <div className="developers-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default Developers;
