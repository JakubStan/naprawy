import React from "react";


const galleryImages = [
  {
    img: "../photos/album4/BathroomRenovation1.png",
  },
  {
    img: "../photos/album4/BathroomRenovation2.png",
  },
  {
    img: "../photos/album4/BathroomRenovation3.png.png",
  },
  {
    img: "../photos/album4/BathroomRenovation4.png",
  },
  {
    img: "../photos/album4/BathroomRenovation5.png",
  },
  {
    img: "../photos/album4/BathroomRenovation6.png",
  },
  {
    img: "../photos/album4/BathroomRenovation7.png",
  },
  {
    img: "../photos/album4/BathroomRenovation8.png",
  },
  {
    img: "../photos/album4/BathroomRenovation9.png",
  },
  {
    img: "../photos/album4/BathroomRenovation10.png",
  },
  {
    img: "../photos/album4/BathroomRenovation11.png",
  },
];

export function BathroomRenovation() {
  return (
    <>

  <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>
      
      <section id="gallery">
        <h3 className="section-title">REMONT ŁAZIĘKI</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default BathroomRenovation;
