import React from "react";
import "./Footer.css";
import LogoImg from "../assets/img/logo-img.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Quote">
        Dolce far Niente Cabanas
        <p>tel: 5938794</p>
        <p>av salto RS - Brasil</p>
      </div>
      <img src={LogoImg} alt="" className="LogoImg" />
    </div>
  );
};

export default Footer;
