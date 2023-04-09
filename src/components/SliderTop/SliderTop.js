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
    autoplaySpeed: 4000,
    speed: 1000,
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
                Realizujemy naprawy w trybie pilnym. Wykonujemy naprawy usterek
                oraz usuwamy awarie w zakresie hydrauliki, kanalizacji oraz
                elektryki. Masz problem, który musisz szybko rozwiązać? Pomożemy
                Ci tak szybko jak to tylko możliwe!
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
                Oferujemy usługi w zakresie przenoszenia i przerabiania
                instalacji elektrycznych. Jeśli brakuję Ci gniazdek, obwodów
                oświetlenia lub włączników to dobrze trafiłeś. Odpowiemy na
                wszystkie twoje pytania oraz udzielimy fachowych porad. Pamiętaj
                modyfikowanie instalacji bez fachowej wiedzy może się źle
                skończyć.
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
                Świadczymy rożnego rodzaju usługi hydrauliczne powiązane z
                remontami oraz przeróbkami istniejących instalacji
                wodno-kanalizacyjnych. Oferujemy montaż nowych instalacji jak
                również wymianę oraz rozbudowę już istniejącej.
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
                Oferujemy profesjonalne usługi glazurnicze, układanie płytek,
                kompleksowe wykonywanie łazienek oraz remonty od podstaw.
                Wykonujemy montaż i podłączenie sanitariatów.
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
                Fachowo i profesjonalnie dokonujemy dla kompleksowej wymiany
                elementów instalacji hydraulicznej oraz elektrycznej. Jesteśmy
                profesjonalistami z wieloletnim doświadczeniem oraz dziesiątkami
                zadowolonych klientów. Działamy na terenie Wrocławia i okolic.
                Świadczymy szereg usług z branży hydraulicznej, elektryki,
                remontów oraz wykończeń wnętrz. Pomagamy również naszym klientom
                w usunięciu oraz naprawie nagłych awarii oraz usterkach.
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
                Planujesz remont mieszkania albo domu? Szykujesz się do
                wykończenia wnętrza? Dobrze trafiłeś! Oferujemy szeroki zakres
                usług począwszy od instalacji hydraulicznych i elektrycznych po
                przez pracę budowlane aż po końcowe wykończenie.
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
