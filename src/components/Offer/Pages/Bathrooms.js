import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MenuLeft } from "./MenuLeft";
import "./pages.scss";
import check from "../icons/check.png";

export function Bathrooms() {
  return (
    <>
      <div className="header-bg bg-Bathrooms">
        <div className="page-name">
          <h2>ŁAZIĘKI</h2>
        </div>
      </div>

      <div className="offer-content">
        <div className="offer-menu">
          <MenuLeft />
        </div>

        <div className="offer-details">
          <div className="list">
            <div className="list-item">
              <img className="check" src={check} />
              <p>Remont łazienek od podstaw</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Przeróbki instalacyjne</p>
            </div>
            <div className="list-item">
              <img className="check" src={check} />
              <p>Układanie płytek</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Układanie gresu</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Układanie ceramiki</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>cięcie płytek pod kątem 45 stopni</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Biały montaż</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bathrooms;
