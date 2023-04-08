import Header from "./components/Header/Header";

import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Foofer";
import SliderTop from "./components/SliderTop/SliderTop";
import Realization from "./pages/Realization/Realization";

import Home from "./components/Home.js";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import { UrgentRepairs } from "./components/Offer/Pages/UrgentRepairs";
import { Bathrooms } from "./components/Offer/Pages/Bathrooms";
import { ElectricalModifications } from "./components/Offer/Pages/ElectricalModifications";
import { Exchange } from "./components/Offer/Pages/Exchange";
import { HydraulicModifications } from "./components/Offer/Pages/HydraulicModifications";
import { InteriorFinishing } from "./components/Offer/Pages/InteriorFinishing";

import { SingleFamilyHouse3 } from "./pages/Realization/pages/SingleFamilyHouse3";
import { Kitchen } from "./pages/Realization/pages/Kitchen";
import { Toilet } from "./pages/Realization/pages/Toilet";
import { Flat } from "./pages/Realization/pages/Flat";
import { PressureWall } from "./pages/Realization/pages/PressureWall";
import { CeilingEnlargement } from "./pages/Realization/pages/CeilingEnlargement";
import { SingleFamilyHouse } from "./pages/Realization/pages/SingleFamilyHouse";
import { SingleFamilyHouse4 } from "./pages/Realization/pages/SingleFamilyHouse4";
import { BathroomRenovation } from "./pages/Realization/pages/BathroomRenovation";
import { BathroomFinish } from "./pages/Realization/pages/BathroomFinish";

import Favicon from "react-favicon";
import favicon from "./favicon.ico";

const App = () => {
  return (
    <>
      <Favicon url={favicon} />

      <BrowserRouter>
        <ScrollToTop>
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
              <Route
                path="SingleFamilyHouse3"
                element={<SingleFamilyHouse3 />}
              />
              <Route path="Kitchen" element={<Kitchen />} />
              <Route path="Toilet" element={<Toilet />} />
              <Route path="Flat" element={<Flat />} />
              <Route path="PressureWall" element={<PressureWall />} />
              <Route
                path="CeilingEnlargement"
                element={<CeilingEnlargement />}
              />
              <Route path="SingleFamilyHouse" element={<SingleFamilyHouse />} />
              <Route
                path="BathroomRenovation"
                element={<BathroomRenovation />}
              />
              <Route
                path="SingleFamilyHouse4"
                element={<SingleFamilyHouse4 />}
              />
              <Route path="BathroomFinish" element={<BathroomFinish />} />
            </Route>
          </Routes>

          <Home />

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
