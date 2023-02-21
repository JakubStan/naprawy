import React from "react";
import check from "../icons/check.png";

export function InteriorFinishing() {
  return (
    <>
      <div className="header-bg bg-InteriorFinishing">
        <div className="page-name">
          <h2>REMONTY I WYKOŃCZENIA</h2>
        </div>
      </div>

      <div className="offer-content">


        <div className="offer-details">
          <div className="list">
            <div className="list-item">
              <img className="check" src={check} />
              <p>
                Remonty mieszkań z rynku wtórnego oraz wykończenia mieszkań i
                domów deweloperskich
              </p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>
                Ustawianie ścianek działowych oraz przedścianek na profilach
                oraz płytach GK
              </p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Podwieszane sufity</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Szpachlowanie</p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Układanie paneli i listew przypodłogowych</p>
            </div>
 
            <div className="list-item">
              <img className="check" src={check} />
              <p>
                Wykończenia wnętrz od podstaw z przeróbkami instalacyjnymi wody,
                kanalizacji, elektryki
              </p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>
                Szpachlowanie (używamy tylko szpachli Flugger) ścian z gk oraz
                całych powierzchni
              </p>
            </div>

            <div className="list-item">
              <img className="check" src={check} />
              <p>Malowanie</p>
            </div>

             
            
          </div>
        </div>
      </div>
    </>
  );
}

export default InteriorFinishing;
