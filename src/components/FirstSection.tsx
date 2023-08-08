import "./FirstSection.css";
import Img1 from "../assets/img/first-section-1.png";
import Img2 from "../assets/img/first-section-6.png";
import Img3 from "../assets/img/first-section-3.png";
import Img4 from "../assets/img/first-section-4.png";
import Img5 from "../assets/img/first-section-5.png";

const FirstSection = () => {
  return (
    <div className="FirstSection">
      <div className="Quote">
        Bem vindos às nossas <br />
        cabanas na Serra Gaúcha.
        <p>
          Cercado por uma natureza exuberante, somos o local perfeito para
          relaxar e recarregar as energias.
        </p>
        <p>
          Na Barragem do Salto, localizada a apenas 17km do centro de Canela,
          você encontra muito ar puro, paz e tranquilidade.
        </p>
        <div className="btns">
          {/* <button className="btn-sobre">SOBRE NÓS</button> */}
          <button className="btn-reserve">
            <a
              href="https://www.airbnb.com.br/rooms/933206395690318249?adults=1&guests=1&viralityEntryPoint=1&s=76&source_impression_id=p3_1691520775_YrKhz7HIOJIeXmBt"
              target="_blank"
            >
              {" "}
              FAÇA SUA RESERVA
            </a>
          </button>
        </div>
      </div>

      <div className="Grid">
        <div className="GridItem">
          <img src={Img1} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img2} alt="" />
        </div>
        <div className="GridItem Landscape">
          <img src={Img3} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img4} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
