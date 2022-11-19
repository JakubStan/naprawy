import react from "react";
import "./Realization.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Tools from "./hammer-tool.png";

import SingleFamilyHouse3 from "./photos/album1/SingleFamilyHouse22.jpg";
import HomeFinishing from "./photos/album2/HomeFinishing4.jpg";
import Kitchen from "./photos/album3/KitchenRenovation1.png";
import Toilet from "./photos/album4/Toilet13.png";
import Flat from "./photos/album5/ToiletFlat5.png";
import SingleFamilyHouse4 from "./photos/album6/SingleFamilyHouse8.jpg";
import PressureWall from "./photos/album7/PressureWall2.jpg";
import CeilingEnlargement from "./photos/album8/CeilingEnlargement1.jpg";
import SingleFamilyHouse from "./photos/album9/SingleFamilyHouse1.jpg";
import SingleFamilyHouse2 from "./photos/album11/SingleFamilyHouse1.jpg";
import BathroomRenovation from "./photos/album10/BathroomRenovation1.jpg";
import BathroomFinish from "./photos/album12/BathroomFinish2.jpg";

const Realization = () => {
  const { pathname } = useLocation();

  if (pathname === "/UrgentRepairs") {
    return null;
  } else if (pathname === "/Bathrooms") {
    return null;
  } else if (pathname === "/ElectricalModifications") {
    return null;
  } else if (pathname === "/Exchange") {
    return null;
  } else if (pathname === "/HydraulicModifications") {
    return null;
  } else if (pathname === "/InteriorFinishing") {
    return null;
  } else if (pathname === "/Filling") {
    return null;
  } else if (pathname === "/Renovations") {
    return null;
  } else if (pathname === "/Contact") {
    return null;
  } else if (pathname === "/Toilet") {
    return null;
  } else if (pathname === "/Offer") {
    return null;
  } else if (pathname === "/Abaut") {
    return null;
  }

  return (
    <>
      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section className="realization">
        <div className="items">
          <div className="item">
            <img src={SingleFamilyHouse3} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
            </div>
            <Link className="more-btn" to="/SingleFamilyHouse3">
              WIĘCEJ
            </Link>
          </div>

          <div className="item">
            <img src={HomeFinishing} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
            </div>
            <Link to="/HomeFinishing">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={Kitchen} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>REMONT KUCHNI</h3>
            </div>
            <Link to="/Kitchen">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={Toilet} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>REMONT ŁAZIEKI I WC</h3>
            </div>
            <Link to="/Toilet">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={Flat} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>REMONT MIESZKANIA I ŁAZIĘKI</h3>
            </div>
            <Link to="/Flat">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={PressureWall} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>ŚCIANKA DOCISKOWA</h3>
            </div>
            <Link to="/PressureWall">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={CeilingEnlargement} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>WYKONANIE POWIĘKSZENIA STROPU</h3>
            </div>
            <Link to="/CeilingEnlargement">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={SingleFamilyHouse} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>WYKOŃCZENIE ŁAZIEKI</h3>
            </div>
            <Link to="/SingleFamilyHouse">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={SingleFamilyHouse2} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
            </div>
            <Link to="/SingleFamilyHouse2">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={BathroomRenovation} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>REMONT ŁAZIĘKI</h3>
            </div>
            <Link to="/BathroomRenovation">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={SingleFamilyHouse4} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
            </div>
            <Link to="/SingleFamilyHouse4">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <img src={BathroomFinish} />
            <div className="WorkName">
              <img className="tools" src={Tools} />
              <h3>WYKOŃCZENIE ŁAZIEKI</h3>
            </div>
            <Link to="/BathroomFinish">
              <div className="more-btn">
                <h4>WIĘCEJ</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Realization;
