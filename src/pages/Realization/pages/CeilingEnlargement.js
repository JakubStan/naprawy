import React from "react";
import './gallery.scss';
import  WSPGallery from './WSPGallery';
import galleryImages from '../photos/album8/album8';



export function CeilingEnlargement() {
  return (
    <>

      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      
      <section id="gallery">
        <h3 className="section-title">
          WYKONANIE POWIĘKSZANIE STOPU
          </h3>
          <WSPGallery galleryImages={galleryImages}/>
        
       
      </section>
    </>
  );
}

export default CeilingEnlargement;
