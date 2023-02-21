import React from "react";
import './gallery.scss';
import  WSPGallery from './WSPGallery';
import galleryImages from '../photos/album12/album12';




export function BathroomFinish() {
  return (
    <>
         <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>
      
      <section id="gallery">
        <h3 className="section-title">WYKOŃCZENIE ŁAZIENKI</h3>
        <WSPGallery galleryImages={galleryImages}/>
      </section>
    </>
  );
}

export default BathroomFinish;
