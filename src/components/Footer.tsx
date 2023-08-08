// import React from "react";
import "./Footer.css";
import LogoImg from "../assets/img/logo-img.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="QuoteFooter">
        Dolce Far Niente Cabanas
        <p>Tel: 51 983365508</p>
        <p>
          Avenida Vila Eletra, 440
          <p>Distrito Eletra São Francisco de Paula / RS</p>
          <button className="SocialMedia">
            <a
              target="_blank"
              href="https://www.instagram.com/dolcefarnientecabanas/"
            >
              @dolcefarnientecabanas
            </a>
          </button>
        </p>
      </div>
      {/* <img src={LogoImg} alt="" className="LogoImg" /> */}
    </div>
  );
};

export default Footer;
