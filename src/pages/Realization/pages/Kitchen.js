import React from "react";
import "./gallery.scss";
import WSPGallery from "./WSPGallery";
import galleryImages from "../photos/album3/album3";

export function Kitchen() {
  return (
    <>
      <div id="Realization" className="header-bg bg-realization">
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
