import React from "react";
import './gallery.scss';
import  WSPGallery from './WSPGallery';
import galleryImages from '../photos/album1/album1';





export function SingleFamilyHouse3() {
  return (
    <>

      <div className="header-bg bg-realization">
              <div className="page-name">
                <h2>REALIZACJE</h2>
              </div>
      </div>

      
      <section id="gallery">
        <h3 className="section-title">WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
            <WSPGallery galleryImages={galleryImages}/>
        </section>
      </>
  );
}

export default SingleFamilyHouse3;
