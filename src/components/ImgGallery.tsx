// import React from "react";
import "./ImgGallery.css";
import Img1 from "../assets/img/bedroom-1.png";
import Img2 from "../assets/img/first-section-7.png";
import Img3 from "../assets/img/garden-1.png";

const ImgGallery = () => {
  return (
    <div className="ImgGallery">
      <div className="ImgGalleryItem Landscape">
        <img src={Img1} alt="" />
      </div>
      <div className="ImgGalleryItem">
        <img src={Img2} alt="" />
      </div>
      <div className="ImgGalleryItem">
        <img src={Img3} alt="" />
      </div>
    </div>
  );
};

export default ImgGallery;
