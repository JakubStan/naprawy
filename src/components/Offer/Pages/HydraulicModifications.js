import React from "react";
import check from "../icons/check.png";

export function HydraulicModifications() {
  return (
    <>
      <div className="header-bg bg-HydraulicModifications">
        <div className="page-name">
          <h2>PRZERÓBKI HYDRAULICZNE</h2>
        </div>
      </div>

      <div className="offer-content">
        <div className="offer-details">
          <div className="list">
            <div className="list-item">
              <img className="check" src={check} />
              <p>Przenoszenie i zakładanie nowych punktów wod-kan</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Montaż stelaży WC</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Montaż stelaży pod wannę</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Montaż odpływów liniowych typu walk – in</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Wymiana instalacji żeliwnych na PCV</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>
                Instalacje wodociągowe na materiałach typu PEX, PP i metalowych
              </p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Biały montaż pryszniców i kabin prysznicowych</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Biały montaż umywalek i muszli</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HydraulicModifications;
