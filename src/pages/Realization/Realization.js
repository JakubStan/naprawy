import "./Realization.scss";
import { HashLink } from "react-router-hash-link";

import SingleFamilyHouse3 from "./photos/album1/SingleFamilyHouse22.jpg";
import Kitchen from "./photos/album3/KitchenRenovation1.png";
import Toilet from "./photos/album4/Toilet13.jpg";
import Flat from "./photos/album5/ToiletFlat9-2.png";
import SingleFamilyHouse4 from "./photos/album6/SingleFamilyHouse8.jpg";
import PressureWall from "./photos/album7/PressureWall2.jpg";
import CeilingEnlargement from "./photos/album8/CeilingEnlargement3.jpg";
import SingleFamilyHouse from "./photos/album9/SingleFamilyHouse22-2.png";
import BathroomRenovation from "./photos/album10/BathroomRenovation6-2.png";
import BathroomFinish from "./photos/album12/BathroomFinish3-2.png";

const Realization = () => {
  return (
    <>
      <div id="Realization" className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section className="realization">
        <div className="container">
          <div className="items">
            <div className="item">
              <img
                src={SingleFamilyHouse3}
                alt="WYKOŃCZENIE DOMU JEDNORODZINNEGO"
              />
              <div className="WorkName">
                <h3>WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
              </div>
              <HashLink
                className="more-btn"
                to="/SingleFamilyHouse3#Realization"
              >
                WIĘCEJ
              </HashLink>
            </div>

            <div className="item">
              <img src={Kitchen} alt="REMONT KUCHNI" />
              <div className="WorkName">
                <h3>REMONT KUCHNI</h3>
              </div>
              <HashLink to="/Kitchen#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img src={Toilet} alt="REMONT ŁAZIENKI I WC" />
              <div className="WorkName">
                <h3>REMONT ŁAZIENKI I WC</h3>
              </div>
              <HashLink to="/Toilet#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img src={Flat} alt="REMONT MIESZKANIA I ŁAZIENKI" />
              <div className="WorkName">
                <h3>REMONT MIESZKANIA I ŁAZIENKI</h3>
              </div>
              <HashLink to="/Flat#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img src={PressureWall} alt="ŚCIANKA DOCISKOWA" />
              <div className="WorkName">
                <h3>ŚCIANKA DOCISKOWA</h3>
              </div>
              <HashLink to="/PressureWall#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img
                src={CeilingEnlargement}
                alt="WYKONANIE POWIĘKSZENIA STROPU"
              />
              <div className="WorkName">
                <h3>WYKONANIE POWIĘKSZENIA STROPU</h3>
              </div>
              <HashLink to="/CeilingEnlargement#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img src={SingleFamilyHouse} alt="WYKOŃCZENIE ŁAZIENKI" />
              <div className="WorkName">
                <h3>WYKOŃCZENIE ŁAZIENKI</h3>
              </div>
              <HashLink to="/SingleFamilyHouse#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img src={BathroomRenovation} alt="REMONT ŁAZIENKI" />
              <div className="WorkName">
                <h3>REMONT ŁAZIENKI</h3>
              </div>
              <HashLink to="/BathroomRenovation#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img
                src={SingleFamilyHouse4}
                alt="WYKOŃCZENIE DOMU JEDNORODZINNEGO"
              />
              <div className="WorkName">
                <h3>WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
              </div>
              <HashLink to="/SingleFamilyHouse4#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>

            <div className="item">
              <img src={BathroomFinish} alt="WYKOŃCZENIE ŁAZIENKI" />
              <div className="WorkName">
                <h3>WYKOŃCZENIE ŁAZIENKI</h3>
              </div>
              <HashLink to="/BathroomFinish#Realization">
                <div className="more-btn">
                  <h4>WIĘCEJ</h4>
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Realization;
