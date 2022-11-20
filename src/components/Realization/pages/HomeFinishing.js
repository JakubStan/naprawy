import React from "react";


const galleryImages = [
  {
    img: "../photos/album2/HomeFinishing1.jpg",
  },
  {
    img: "../photos/album2/HomeFinishing2.jpg",
  },
  {
    img: "../photos/album2/HomeFinishing3.jpg",
  },
  {
    img: "../photos/album2/HomeFinishing4.jpg",
  },
  {
    img: "../photos/album2/HomeFinishing5.jpg",
  },
  {
    img: "../photos/album2/HomeFinishing6.jpg",
  },
];

export function HomeFinishing() {
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

export default HomeFinishing;
