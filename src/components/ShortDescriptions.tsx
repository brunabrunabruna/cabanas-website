import React from "react";
import "./ShortDescriptions.css";
import Img1 from "../assets/img/garden-1.png";

const ShortDescriptions = () => {
  return (
    <div className="ShortDescriptions">
      <section>
        <div className="DescriptionItem">
          <p className="DescriptionItemTitle">Trilhas e caminhada</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            cum assumenda vel rerum debitis ex repudiandae est quaerat animi
            dignissimos.
          </p>
        </div>
        <div className="DescriptionItem">
          <p className="DescriptionItemTitle">Trilhas e caminhada</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            cum assumenda vel rerum debitis ex repudiandae est quaerat animi
            dignissimos.
          </p>
        </div>
        <div className="DescriptionItem">
          <p className="DescriptionItemTitle">Trilhas e caminhada</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            cum assumenda vel rerum debitis ex repudiandae est quaerat animi
            dignissimos.
          </p>
        </div>
      </section>

      <img src={Img1} alt="garden picture" />
    </div>
  );
};

export default ShortDescriptions;
