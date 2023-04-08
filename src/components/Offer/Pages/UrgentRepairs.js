import React from "react";

import check from "../icons/check.png";

export function UrgentRepairs() {
  return (
    <>
      <div className="header-bg bg-ElectricalModifications">
        <div className="page-name">
          <h2>NAPRAWY PILNE</h2>
        </div>
      </div>

      <div className="offer-content">
        <div className="offer-details">
          <div className="list">
            <div className="list-item">
              <img className="check" src={check} />
              <p>Przeciekające krany</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Syfony</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Baterie</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Wymiana liczników wody</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Cieknące rury</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Zawory</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Wymiana grzejników</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Wymiana gniazdek, lamp, włączników</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UrgentRepairs;
