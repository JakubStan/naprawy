import { faRoad } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PhotoAlbum from "react-photo-album";

import photo from "./photos/album1/SingleFamilyHouse1.jpg"

const photos = [
  {
    src : "./photos/album1/SingleFamilyHouse1.jpg",
    width: 800,
    height: 600
  },
  
   
];

export function SingleFamilyHouse3() {
  return (
    <>

      <div className="header-bg bg-realization">
              <div className="page-name">
                <h2>REALIZACJE</h2>
              </div>
      </div>

      
      <section id="gallery">
        <h3 className="section-title">ŁAZIEKA ORAZ SALON</h3>
        <PhotoAlbum layout="rows" photos={photos} />
      </section>
    </>
  );
}

export default SingleFamilyHouse3;
