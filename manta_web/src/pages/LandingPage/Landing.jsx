import style from "./Landing.module.css";
import React from "react";
import Map from "../../assets/Map.svg";
import logoSquare from "../../assets/logoSquare.svg";
import clickButton from "../../assets/clickButton.svg";
import Lottie from 'react-lottie';
import animationData from '../..//assets/Maps_Lottie'
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/OverviewMaps');
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <div className={style.entire}>
        <div className={style.Left}>
          <h1 className={style.title}>Manta</h1>
          <p className={style.subtitle}>The highest level <br /> of care for thailand’s roads</p>
          <img src={logoSquare} alt="Map" className={style.map} />
          <div className={style.button} onClick={handleButtonClick}>
            <img src={clickButton} alt="Button" className={style.button} />
          </div>
          <div className={style.info}>
            <p className={style.buttonText}>Privacy</p>
            <p className={style.buttonText}>Terms of Use</p>
            <p className={style.buttonText}>About Us</p>
          </div>
        </div>
        <div className={style.Right}>
            <Lottie options={defaultOptions}
            height={550}
            width={550}
            />
        </div>
      </div>
    </>
  );
}
