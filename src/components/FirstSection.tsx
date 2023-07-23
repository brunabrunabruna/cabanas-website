import "./FirstSection.css";
import Img1 from "../assets/img/first-section-1.png";
import Img2 from "../assets/img/first-section-2.png";
import Img3 from "../assets/img/first-section-3.png";
import Img4 from "../assets/img/first-section-4.png";

const FirstSection = () => {
  return (
    <div className="FirstSection">
      <div className="Quote">
        Bem vindos às nossas <br />
        cabanas na Serra Gaúcha.
        <p>
          Cercada por uma natureza exuberante, local perfeito para relaxar e
          recarregar as energias.
        </p>
        <div className="btns">
          <button className="btn-sobre">SOBRE NÓS</button>
          <button className="btn-reserve">FAÇA SUA RESERVA</button>
        </div>
      </div>

      <div className="Grid">
        <div className="GridItem">
          <img src={Img1} alt="" />
        </div>
        <div className="GridItem">
          Muito ar puro, paz e tranquilidade para relaxar e passar alguns dias
          conectados com a natureza.
        </div>
        <div className="GridItem Landscape">
          <img src={Img2} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img3} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
