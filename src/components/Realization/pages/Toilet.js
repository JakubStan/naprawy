import React from "react";


const galleryImages = [
  {
    img: "../photos/album4/Toilet1.png",
  },
  {
    img: "../photos/album4/Toilet2.png",
  },
  {
    img: "../photos/album4/Toilet3.png.png",
  },
  {
    img: "../photos/album4/Toilet4.png",
  },
  {
    img: "../photos/album4/Toilet5.png",
  },
  {
    img: "../photos/album4/Toilet6.png",
  },
  {
    img: "../photos/album4/Toilet7.png",
  },
  {
    img: "../photos/album4/Toilet8.png",
  },
  {
    img: "../photos/album4/Toilet9.png",
  },
  {
    img: "../photos/album4/Toilet10.png",
  },
  {
    img: "../photos/album4/Toilet11.png",
  },
  {
    img: "../photos/album4/Toilet12.png",
  },
  {
    img: "../photos/album4/Toilet13.png",
  },
  {
    img: "../photos/album4/Toilet14.png",
  },
  {
    img: "../photos/album4/Toilet15.png",
  },
];

export function Toilet() {
  return (
    <>

    <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">REMONT ŁAZIĘKI I WC</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default Toilet;
