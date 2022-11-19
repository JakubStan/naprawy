import React from "react";
import WSPGallery from "./WSPGallery";

const galleryImages = [
  {
    img: "../photos/album12/BathroomFinish1.jpg",
  },
  {
    img: "../photos/album12/BathroomFinish2.jpg",
  },
  {
    img: "../photos/album12/BathroomFinish3.jpg",
  },
  {
    img: "../photos/album12/BathroomFinish4.png",
  },
  {
    img: "../photos/album12/BathroomFinish5.jpg",
  },
  {
    img: "../photos/album12/BathroomFinish6.png",
  },
  {
    img: "../photos/album12/BathroomFinish7.png",
  },
];

export function BathroomFinish() {
  return (
    <>
      <section id="gallery">
        <h3 className="section-title">WYKOŃCZENIE ŁAZIEKI</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default BathroomFinish;
