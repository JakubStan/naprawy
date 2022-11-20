import React from "react";
import check from "../icons/check.png";

export function Exchange() {
  return (
    <>



      <div className="header-bg bg-Exchange">
        <div className="page-name">
          <h2>WYMIANY</h2>
        </div>
      </div>

      <div className="offer-content">


        <div className="offer-details">
          <div className="list">
            <h4> Wymiana: </h4>
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
              <p>Kinkietów</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Wodomierzy</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Zaworów wody</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Baterii prysznicowych umywalkowych i zlewowych </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exchange;
