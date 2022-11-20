import React from "react";


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

      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

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
