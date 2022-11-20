import React from "react";


const galleryImages = [
  {
    img: "../photos/album9/SingleFamilyHouse1.png",
  },
  {
    img: "../photos/album9/SingleFamilyHouse2.png",
  },
  {
    img: "../photos/album9/SingleFamilyHouse3.png",
  },
  {
    img: "../photos/album9/SingleFamilyHouse4.png",
  },
  {
    img: "../photos/album9/SingleFamilyHouse5.png",
  },
  {
    img: "../photos/album9/SingleFamilyHouse6.png",
  },
];

export function SingleFamilyHouse() {
  return (
    <>

      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">
          WYKONANIE ŁAZIENEK W DOMU JEDNORODZINNYM
        </h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default SingleFamilyHouse;
