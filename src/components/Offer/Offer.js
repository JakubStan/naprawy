import "../../pages/Realization/Realization.scss";
import { Link } from "react-router-dom";

import construction from "./img/construction.jpg";
import electrician from "./img/electrician.jpg";
import engineer from "./img/engineer.jpg";
import electric from "./img/electric.jpg";
import laying from "./img/laying.jpg";
import wallpainting from "./img/wall-painting.jpg";

import bathroom from "./icons/bathroom-white.png";
import plumbing from "./icons/plumbing-white.png";
import renovation from "./icons/renovation-white.png";
import repairtols from "./icons/repairtols-white.png";
import tools from "./icons/tools-white.png";
import wrench from "./icons/wrench-white.png";

const Offer = () => {
  return (
    <>
      <section id="offert">
        <h2 className="section-title offert-heading">OFERTA</h2>

        <div className="container">
          <div className="items">
            <div className="item">
              <img src={construction} alt="NAPRAWY PILNE" />
              <div className="WorkName">
                <img src={repairtols} alt="NAPRAWY PILNE" />
                <h3>NAPRAWY PILNE</h3>
              </div>
              <Link className="more-btn" to="/UrgentRepairs">
                WIĘCEJ
              </Link>
            </div>

            <div className="item">
              <img src={electrician} alt="PRZERÓBKI ELEKTRYCZNE" />
              <div className="WorkName">
                <img src={tools} alt="PRZERÓBKI ELEKTRYCZNE" />
                <h3>PRZERÓBKI ELEKTRYCZNE</h3>
              </div>
              <Link className="more-btn" to="/ElectricalModifications">
                WIĘCEJ
              </Link>
            </div>

            <div className="item">
              <img src={engineer} alt="PRZERÓBKI HYDRAULICZNE" />
              <div className="WorkName">
                <img src={wrench} alt="PRZERÓBKI HYDRAULICZNE" />
                <h3>PRZERÓBKI HYDRAULICZNE</h3>
              </div>
              <Link className="more-btn" to="/HydraulicModifications">
                WIĘCEJ
              </Link>
            </div>

            <div className="item">
              <img src={laying} alt="ŁAZIENKI" />
              <div className="WorkName">
                <img src={bathroom} alt="ŁAZIENKI" />
                <h3>ŁAZIENKI</h3>
              </div>
              <Link className="more-btn" to="/Bathrooms">
                WIĘCEJ
              </Link>
            </div>

            <div className="item">
              <img src={wallpainting} alt="REMONTY I WYKOŃCZENIA" />
              <div className="WorkName">
                <img src={renovation} alt="REMONTY I WYKOŃCZENIA" />
                <h3>REMONTY I WYKOŃCZENIA</h3>
              </div>
              <Link className="more-btn" to="/InteriorFinishing">
                WIĘCEJ
              </Link>
            </div>

            <div className="item">
              <img src={electric} alt="WYMIANY" />
              <div className="WorkName">
                <img src={plumbing} alt="WYMIANY" />
                <h3>WYMIANY</h3>
              </div>
              <Link className="more-btn" to="/Exchange">
                WIĘCEJ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
