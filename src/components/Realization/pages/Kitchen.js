import React from "react";


const galleryImages = [
  {
    img: "../photos/album3/KitchenRenovation1.png",
  },
  {
    img: "../photos/album3/KitchenRenovation2.png",
  },
  {
    img: "../photos/album3/KitchenRenovation3.png",
  },
  {
    img: "../photos/album3/KitchenRenovation4.png",
  },
  {
    img: "../photos/album3/KitchenRenovation5.png",
  },
  {
    img: "../photos/album3/KitchenRenovation6.png",
  },
  {
    img: "../photos/album3/KitchenRenovation7.png",
  },
  {
    img: "../photos/album3/KitchenRenovation8.png",
  },
  {
    img: "../photos/album3/KitchenRenovation9.png",
  },
  {
    img: "../photos/album3/KitchenRenovation10.png",
  },
  {
    img: "../photos/album3/KitchenRenovation11.png",
  },
  {
    img: "../photos/album3/KitchenRenovation12.png",
  },
  {
    img: "../photos/album3/KitchenRenovation13.png",
  },
  {
    img: "../photos/album3/KitchenRenovation14.png",
  },
  {
    img: "../photos/album3/KitchenRenovation15.png",
  },
  {
    img: "../photos/album3/KitchenRenovation16.png",
  },
];

export function Kitchen() {
  return (
    <>

      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">REMONT KUCHNI</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default Kitchen;
