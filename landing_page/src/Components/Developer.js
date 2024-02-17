import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Developers = () => {
  return (
    <div className="developers-container">
      <div id="developers" className="process-section-wrapper">
        <div className="process-section-top">
          <p className="primary-subheading">Developers</p>
          <h1 className="primary-heading">The Team</h1>
        </div>
        <div className="developer-section-bottom">
          {/* Developer 1 */}
          <div className="developer">
            <div>
              <h2>Koech <br /> Shadrack</h2>
              <p>
                <a href="https://github.com/Shadkoech"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/koechshadrack"><FaLinkedin size={24} /></a>
              </p>
            </div>
          </div>
          {/* Developer 2 */}
          <div className="developer">
            <div>
              <h2>Joseph <br /> Kibuchi</h2>
              <p>
                <a href="https://github.com/kibuchijw"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/joseph-k-25a17a78"><FaLinkedin size={24} /></a>
              </p>
            </div>
          </div>
          {/* Developer 3 */}
          <div className="developer">
            <div>
              <h2>Jukunye <br /> Shira</h2>
              <p>
                <a href="https://github.com/Jukunye"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/jukunye"><FaLinkedin size={24} /></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
