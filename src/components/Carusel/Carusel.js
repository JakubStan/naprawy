import "./Carusel.scss";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./data";
import imgGirl from "../../images/defaultImage.jpg";

export function Carusel() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    arrows: false,
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <h2 className="section-title offer-bf">ROZWIĄZANIA</h2>

        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card-top">
              <img
                src={item.linkImg}
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
