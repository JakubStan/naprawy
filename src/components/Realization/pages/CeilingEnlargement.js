import React from "react";


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

      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      
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
