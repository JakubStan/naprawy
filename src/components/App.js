import Header from "./Header/Header";
import Offer from "./Offer/Offer";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Foofer";
import SliderTop from "./SliderTop/SliderTop";
import RealizationLink from "./RealizationLink/RealizationLink";
import Realization from "./Realization/Realization";
import { Abaut } from "./Abaut/Abaut";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { UrgentRepairs } from "../components/Offer/Pages/UrgentRepairs";
import { Bathrooms } from "../components/Offer/Pages/Bathrooms";
import { ElectricalModifications } from "../components/Offer/Pages/ElectricalModifications";
import { Exchange } from "../components/Offer/Pages/Exchange";
import { HydraulicModifications } from "../components/Offer/Pages/HydraulicModifications";
import { InteriorFinishing } from "../components/Offer/Pages/InteriorFinishing";

import { SingleFamilyHouse3 } from "./Realization/pages/SingleFamilyHouse3";
import { Kitchen } from "./Realization/pages/Kitchen";
import { Toilet } from "./Realization/pages/Toilet";
import { Flat } from "./Realization/pages/Flat";
import { PressureWall } from "./Realization/pages/PressureWall";
import { CeilingEnlargement } from "./Realization/pages/CeilingEnlargement";
import { SingleFamilyHouse } from "./Realization/pages/SingleFamilyHouse";
import { SingleFamilyHouse4 } from "./Realization/pages/SingleFamilyHouse4";
import { BathroomRenovation } from "./Realization/pages/BathroomRenovation";
import { BathroomFinish } from "./Realization/pages/BathroomFinish";

import { Carusel } from "./Carusel/Carusel";
import Favicon from "react-favicon";

const App = () => {
  return (
    <>
      <Favicon url="http://oflisback.github.io/react-favicon/img/github.ico" />
      <BrowserRouter>
        <Header />
        <SliderTop />

        <Routes>
          <Route>
            <Route path="UrgentRepairs" element={<UrgentRepairs />} />
            <Route path="Bathrooms" element={<Bathrooms />} />
            <Route
              path="ElectricalModifications"
              element={<ElectricalModifications />}
            />
            <Route path="Exchange" element={<Exchange />} />
            <Route
              path="HydraulicModifications"
              element={<HydraulicModifications />}
            />
            <Route path="InteriorFinishing" element={<InteriorFinishing />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Realization" element={<Realization />} />
            <Route path="SingleFamilyHouse3" element={<SingleFamilyHouse3 />} />
            <Route path="Kitchen" element={<Kitchen />} />
            <Route path="Toilet" element={<Toilet />} />
            <Route path="Flat" element={<Flat />} />
            <Route path="PressureWall" element={<PressureWall />} />
            <Route path="CeilingEnlargement" element={<CeilingEnlargement />} />
            <Route path="SingleFamilyHouse" element={<SingleFamilyHouse />} />
            <Route path="BathroomRenovation" element={<BathroomRenovation />} />
            <Route path="SingleFamilyHouse4" element={<SingleFamilyHouse4 />} />
            <Route path="BathroomFinish" element={<BathroomFinish />} />
          </Route>
        </Routes>

        <Abaut />
        <RealizationLink />
        <Offer />
        <Carusel />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
