import Abaut from "./Abaut/Abaut";
import Offer from "./Offer/Offer";
import RealizationLink from "./RealizationLink/RealizationLink";
import Carusel from "./Carusel/Carusel";
import { useLocation } from "react-router-dom";

const Home = () => {
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
  } else if (pathname === "/Flat") {
    return null;
  }

  return (
    <>
      <Abaut />
      <RealizationLink />
      <Offer />
      <Carusel />
    </>
  );
};

export default Home;
