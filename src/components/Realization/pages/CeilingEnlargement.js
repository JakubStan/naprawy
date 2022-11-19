import React from "react";
import WSPGallery from "./WSPGallery";

const galleryImages = [
  {
    img: "../photos/album8/CeilingEnlargement1.jpg",
  },
  {
    img: "../photos/album8/CeilingEnlargement2.jpg",
  },
  {
    img: "../photos/album8/CeilingEnlargement3.jpg",
  },
];

export function CeilingEnlargement() {
  return (
    <>
      <section id="gallery">
        <h3 className="section-title">
          WYKONANIE POWIĘKSZANIE STOPU ORAZ POSADZKI NA KONSTRUKCJI DREWNIANEJ
        </h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default CeilingEnlargement;
