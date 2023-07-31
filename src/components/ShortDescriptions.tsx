// import React from "react";
import "./ShortDescriptions.css";
import Img1 from "../assets/img/garden-2.png";

const ShortDescriptions = () => {
  return (
    <div className="ShortDescriptions">
      <section>
        <div className="DescriptionItem">
          <p className="DescriptionItemTitle">Energia Renovavel</p>
          <p>
            Toda energia que abastece as cabanas é proveniente de geração de
            painéis solares, gerando uma energia 100% limpa.
          </p>
        </div>
        <div className="DescriptionItem">
          <p className="DescriptionItemTitle">Jardim e paisagismo</p>
          <p>
            Alem de um jardim com a flora da regiao, contamos com um espaço para
            descanso debaixo das árvores com bancos de madeira.
          </p>
        </div>
        <div className="DescriptionItem">
          <p className="DescriptionItemTitle">fogo de chao</p>
          <p>
            Curta um momento unico sob as estrelas junto ao nosso espaco fogo de
            chao.
          </p>
        </div>
      </section>

      <img src={Img1} alt="garden picture" />
    </div>
  );
};

export default ShortDescriptions;
