import React from "react";


const galleryImages = [
  {
    img: "../photos/album6/SingleFamilyHouse1.jpg",
  },
  {
    img: "../photos/album6/SingleFamilyHouse2.jpg",
  },
  {
    img: "../photos/album6/SingleFamilyHouse3.jpg",
  },
  {
    img: "../photos/album6/SingleFamilyHouse4.png",
  },
  {
    img: "../photos/album6/SingleFamilyHouse5.jpg",
  },
  {
    img: "../photos/album6/SingleFamilyHouse6.png",
  },
  {
    img: "../photos/album6/SingleFamilyHouse7.png",
  },
  {
    img: "../photos/album6/SingleFamilyHouse8.jpg",
  },
];

export function SingleFamilyHouse4() {
  return (
    <>

      <div className="header-bg bg-realization">
              <div className="page-name">
                <h2>REALIZACJE</h2>
              </div>
      </div>
      
      <section id="gallery">
        <h3 className="section-title">ŁAZIEKA ORAZ SALON</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default SingleFamilyHouse4;
