import "./gallery.scss";
import WSPGallery from "./WSPGallery";
import galleryImages from "../photos/album6/album6";

export function SingleFamilyHouse4() {
  return (
    <>
      <div id="Realization" className="header-bg bg-realization">
        <div className="page-name">
          <h2>REALIZACJE</h2>
        </div>
      </div>

      <section id="gallery">
        <h3 className="section-title">WYKOŃCZENIE DOMU JEDNORODZINNEGO</h3>
        <WSPGallery galleryImages={galleryImages} />
      </section>
    </>
  );
}

export default SingleFamilyHouse4;
