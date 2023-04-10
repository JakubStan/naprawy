import React from "react";
import "./gallery.scss";
import WSPGallery from "./WSPGallery";
import galleryImages from "../photos/album10/album10";

export function BathroomRenovation() {
  return (
    <>
      <div id="Realization" className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">REMONT ŁAZIENKI</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default BathroomRenovation;
