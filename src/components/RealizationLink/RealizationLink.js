import "./RealizationLink.scss";
import { Link } from "react-router-dom";

const RealizationLink = () => {
  return (
    <>
      <section id="RealizationLink">
        <div className="deails">
          <h4>REALIZACJE</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>

          <Link to="/Realization" className="more-btn">
            WIĘCEJ
          </Link>
        </div>
      </section>
    </>
  );
};

export default RealizationLink;
