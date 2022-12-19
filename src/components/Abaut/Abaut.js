import react from "react";
import "./abaut.scss";
import { useLocation } from "react-router-dom";
import worker from "../../images/worker.jpg";
import React, { useState } from "react";

export function Abaut() {
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
  }
  else if (pathname === "/Flat") {
  return null;
} 

  return (
    <>
      <section id="abaut">
        <div className="abaut">
          <div className="description">
            <h2 className="section-title">NASZA FIRMA</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <img src={worker} />
        </div>
      </section>
    </>
  );
}

export default Abaut;
