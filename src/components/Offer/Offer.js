import react from "react";
import "./Offer.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import construction from "../SliderTop/sliders/construction.jpg";
import electrician from "../SliderTop/sliders/electrician.jpg";
import engineer from "../SliderTop/sliders/engineer.jpg";
import electric from "../SliderTop/sliders/electric.jpg";
import laying from "../SliderTop/sliders/laying.jpg";
import wallpainting from "../SliderTop/sliders/wall-painting.jpg";


import bathroom from './icons/bathroom-white.png';
import paintroller from './icons/paintroller-white.png';
import plumbing from './icons/plumbing-white.png';
import renovation from './icons/renovation-white.png';
import repairtols from './icons/repairtols-white.png';
import tools from './icons/tools-white.png';
import trowel from './icons/trowel-white.png'
import wrench from './icons/wrench-white.png';

const Offer = () => {
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
  } else if (pathname === "/Realization") {
    return null;
  } else if (pathname === "/SingleFamilyHouse3") {
    return null;
  } else if (pathname === "/HomeFinishing") {
    return null;
  } else if (pathname === "/Kitchen") {
    return null;
  } else if (pathname === "/Toilet") {
    return null;
  } else if (pathname === "/PressureWall }") {
    return null;
  } else if (pathname === "/CeilingEnlargement") {
    return null;
  } else if (pathname === "/SingleFamilyHouse ") {
    return null;
  } else if (pathname === "/SingleFamilyHouse2") {
    return null;
  } else if (pathname === "/SingleFamilyHouse4 ") {
    return null;
  } else if (pathname === "/BathroomRenovation") {
    return null;
  } else if (pathname === "/PressureWall") {
    return null;
  } else if (pathname === "/SingleFamilyHouse") {
    return null;
  } else if (pathname === "/SingleFamilyHouse4") {
    return null;
  } else if (pathname === "/BathroomFinish") {
    return null;
  }  else if (pathname === "/Flat") {
    return null;
  }
  
  

  return (
    <>
      <section id="offert">
        <h2 className="section-title offer-bf">OFERTA</h2>

        <div className="container">
          <div className="item">
            <img src={construction} />
            <div className="WorkName">
              <img src={repairtols}/>
              <h3>NAPRAWY PILNE</h3>              
            </div>
            <Link className="more-btn" to="/UrgentRepairs">
              WIĘCEJ              
            </Link>
          </div>

          <div className="item">
            <img src={electrician} />
            <div className="WorkName">
              <img src={tools}/>
              <h3>PRZERÓBKI ELEKTRYCZNE</h3>
            </div>
            <Link className="more-btn" to="/ElectricalModifications">
              WIĘCEJ
            </Link>
          </div>

          <div className="item">
            <img src={engineer} />
            <div className="WorkName">
              <img src={wrench}/>
              <h3>PRZERÓBKI HYDRAULICZNE</h3>
            </div>
            <Link className="more-btn" to="/HydraulicModifications">
              WIĘCEJ
            </Link>
          </div>

          <div className="item">
            <img src={laying} />
            <div className="WorkName">
              <img src={bathroom}/>
              <h3>ŁAZIENKI</h3>
            </div>
            <Link className="more-btn" to="/Bathrooms">
              WIĘCEJ
            </Link>
          </div>

          <div className="item">
            <img src={wallpainting} />
            <div className="WorkName">
              <img src={renovation}/>
              <h3>REMONTY I WYKOŃCZENIA</h3>
            </div>
            <Link className="more-btn" to="/InteriorFinishing">
              WIĘCEJ
            </Link>
          </div>

          <div className="item">
            <img src={electric} />
            <div className="WorkName">
              <img src={plumbing}/>
              <h3>WYMIANY</h3>
            </div>
            <Link className="more-btn" to="/Exchange">
              WIĘCEJ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
