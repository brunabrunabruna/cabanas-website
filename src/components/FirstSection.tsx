import "./FirstSection.css";
import Img1 from "../assets/img/first-section-1.png";
import Img2 from "../assets/img/first-section-2.png";

const FirstSection = () => {
  return (
    <div className="FirstSection">
      <div className="Quote">
        Seja muito bem vindo ao espaço Dolce Far Niente Cabanas
        <p>
          Estamos com o nosso site em construção, mas já estamos
          disponibilizando algumas informações sobre nossas cabanas. O que
          fazer, proximidade com principais cidades da Serra Gaúcha, passeios e
          uma breve ideia do que voce irá encontrar.
        </p>
      </div>
      <div className="Grid">
        <div className="GridItem">
          <img src={Img1} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img1} alt="" />
        </div>
        <div className="GridItem Landscape">
          <img src={Img2} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img1} alt="" />
        </div>
        <div className="GridItem">
          <img src={Img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
