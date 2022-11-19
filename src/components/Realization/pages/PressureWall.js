import React from "react";
import WSPGallery from "./WSPGallery";

const galleryImages = [
  {
    img: "../photos/album7/PressureWall1.jpg",
  },
  {
    img: "../photos/album7/PressureWall2.jpg",
  },
  {
    img: "../photos/album7/PressureWall3.jpg",
  },
  {
    img: "../photos/album7/PressureWall4.jpg",
  },
];

export function PressureWall() {
  return (
    <>
      <section id="gallery">
        <h3 className="section-title">
          ŚCIANKA DOCISKOWA POD DOMEM BEZ PODPIWNICZENIA
        </h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default PressureWall;
