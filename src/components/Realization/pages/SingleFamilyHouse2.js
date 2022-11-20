import React from "react";


const galleryImages = [
  {
    img: "../photos/album11/SingleFamilyHouse1.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse2.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse3.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse4.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse5.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse6.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse7.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse8.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse9.png",
  },
  {
    img: "../photos/album11/SingleFamilyHouse10.png",
  },
];

export function SingleFamilyHouse2() {
  return (
    <>

      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">WYKONANIE DOMU JEDNORODZINNEGO</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default SingleFamilyHouse2;
