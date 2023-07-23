import React from "react";
import "./Location.css";
const Location = () => {
  return (
    <div className="Location">
      <div className="Quote">
        Veja as distâncias para as principais cidades:
        <p>
          <b> Canela:</b> 17,8km utilizando a RS 235
        </p>
        <p>
          <b> Gramado:</b> 25,2km utilizando a RS 235
        </p>
        <p>
          <b> Nova Petrópolis:</b> 58,8km utilizando a RS 235
        </p>
        <p>
          <b> São Francisco de Paula:</b> 22,6km utilizando a RS 235
        </p>
        <div className="Quote2">
          Também ficamos muito próximos do maior parque de flores da America
          Latina, o Mátria Parque de Flores. A apenas 12,1km o trajeto pode ser
          feito em apenas 14 minutos pela RS 235
        </div>
      </div>
    </div>
  );
};

export default Location;
