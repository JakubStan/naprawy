import React from "react";
import "./gallery.scss";
import WSPGallery from "./WSPGallery";
import galleryImages from "../photos/album4/album4";

export function Toilet() {
  return (
    <>
      <div id="Realization" className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">REMONT ŁAZIENKI I WC</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default Toilet;
