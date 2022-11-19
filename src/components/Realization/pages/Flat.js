import React from "react";
import WSPGallery from "./WSPGallery";

const galleryImages = [
  {
    img: "../photos/album5/ToiletFlat1.png",
  },
  {
    img: "../photos/album5/ToiletFlat2.png",
  },
  {
    img: "../photos/album5/ToiletFlat3.png",
  },
  {
    img: "../photos/album5/ToiletFlat4.png",
  },
  {
    img: "../photos/album5/ToiletFlat5.png",
  },
  {
    img: "../photos/album5/ToiletFlat6.png",
  },
  {
    img: "../photos/album5/ToiletFlat7.png",
  },
  {
    img: "../photos/album5/ToiletFlat8.png",
  },
  {
    img: "../photos/album5/ToiletFlat9.jpg",
  },
  {
    img: "../photos/album5/ToiletFlat10.jpg",
  },
  {
    img: "../photos/album5/ToiletFlat11.jpg",
  },
  {
    img: "../photos/album5/ToiletFlat12.jpg",
  },
  {
    img: "../photos/album5/ToiletFlat13.jpg",
  },
  {
    img: "../photos/album5/ToiletFlat14.jpg",
  },
];

export function Flat() {
  return (
    <>
      <section id="gallery">
        <h3 className="section-title">REMONT MIESZKANIA</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default Flat;
