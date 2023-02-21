import "./Slider.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

function SliderTop() {
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

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 900,
    speed: 5000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="SliderTop">
        <Slider {...settings}>
          <div className="slide construction">
            <div className="offer-details">
              <h4>NAPRAWY PILNE</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/UrgentRepairs" className="more-btn">
                WIĘCEJ
              </Link>
            </div>
          </div>

          <div className="slide electrican">
            <div className="offer-details">
              <h4>PRZERÓBKI ELEKTRYCZNE</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/ElectricalModifications" className="more-btn">
                WIĘCEJ
              </Link>
            </div>
          </div>

          <div className="slide engineer">
            <div className="offer-details">
              <h4>PRZERÓBKI HYDRAULICZNE</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/HydraulicModifications" className="more-btn">
                WIĘCEJ
              </Link>
            </div>
          </div>

          <div className="slide laying">
            <div className="offer-details">
              <h4>ŁAZIENKI</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/Bathrooms" className="more-btn">
                WIĘCEJ
              </Link>
            </div>
          </div>

          <div className="slide electric">
            <div className="offer-details">
              <h4>WYMIANY</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/Exchange" className="more-btn">
                WIĘCEJ
              </Link>
            </div>
          </div>

          <div className="slide wall-painting">
            <div className="offer-details">
              <h4>REMONTY I WYKOŃCZENIA</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/InteriorFinishing" className="more-btn">
                WIĘCEJ
              </Link>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default SliderTop;
