import React from "react";

import check from "../icons/check.png";

export function ElectricalModifications() {
  return (
    <>



      <div className="header-bg bg-ElectricalModifications">
        <div className="page-name">
          <h2>PRZERÓBKI ELEKTRYCZNE</h2>
        </div>
      </div>

      <div className="offer-content">


        <div className="offer-details">
          <div className="list">
            <h4>Przenoszenie istniejących i instalowanie nowych:</h4>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Gnizdek</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Włączników</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Lamp</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Bruzdowanie, zakładanie nowej instalacji elektrycznej</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ElectricalModifications;
