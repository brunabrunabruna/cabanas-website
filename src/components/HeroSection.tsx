import React from "react";
import HeroImg from "../assets/hero-img.png";
import "./HeroSection.css";
import Logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <img src={HeroImg} alt="" className="HeroImg" />
      <img src={Logo} alt="" className="Logo" />
    </div>
  );
};

export default HeroSection;
