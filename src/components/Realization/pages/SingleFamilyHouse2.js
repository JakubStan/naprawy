import './gallery.scss';
import  WSPGallery from './WSPGallery';
import galleryImages from '../photos/album11/album11';




export function SingleFamilyHouse2() {
  return (
    <>

      <div className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">WYKONANIE DOMU JEDNORODZINNEGO</h3>
        <WSPGallery galleryImages={galleryImages}/>  
      </section>
    </>
  );
}

export default SingleFamilyHouse2;
