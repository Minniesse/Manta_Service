import style from "./Landing.module.css";
import React from "react";
import Map from "../../asset/Map.svg";
import logoSquare from "../../asset/logoSquare.svg";
import clickButton from "../../asset/clickButton.svg";

export default function Landing() {
  return (
    <div className="container">
      <div className="content">
        <ul>
          <li>
            <h1>Manta</h1>
          </li>
          <li>
            <p>The highest level of care for Thailand's roads</p>
          </li>
          <li>
            <img
              src={logoSquare}
              alt="logo"
              style={{ width: "150px", height: "150px" }}
            />
          </li>
          <li>
            <img
              src={clickButton}
              alt="click button"
              style={{ width: "200px", height: "50", cursor: "pointer" }}
            />
          </li>

          <ul>
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>About Us</li>
          </ul>
        </ul>
      </div>
      <div className="map-container ">
        <img src={Map} alt="map" style={{ width: "520px", height: "520px" }} />
      </div>
    </div>
  );
}
