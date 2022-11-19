import React from "react";
import WSPGallery from "./WSPGallery";

const galleryImages = [
  {
    img: "../photos/album1/SingleFamilyHouse1.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse2.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse3.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse4.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse5.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse6.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse7.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse8.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse9.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse10.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse11.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse12.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse13.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse14.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse15.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse16.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse17.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse18.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse19.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse20.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse21.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse22.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse23.jpg",
  },
  {
    img: "../photos/album1/SingleFamilyHouse24.jpg",
  },
];

export function SingleFamilyHouse3() {
  return (
    <>
      <section id="gallery">
        <h3 className="section-title">ŁAZIEKA ORAZ SALON</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default SingleFamilyHouse3;
