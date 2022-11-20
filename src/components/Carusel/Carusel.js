import "./Carusel.scss";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./data";
import imgGirl from "../../images/defaultImage.jpg";

export function Carusel() {
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

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    arrows: false,
    autoplay: true,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <>
      <section id="Slider">
        <p>
          Tutaj bedą loga firm których używacie materiałow i krótki opis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt{" "}
        </p>

        <p>
          {" "}
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}

export default Carusel;
