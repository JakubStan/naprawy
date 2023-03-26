import "./RealizationLink.scss";
import { Link } from "react-router-dom";

const RealizationLink = () => {
  return (
    <>
      <section id="RealizationLink">
        <div className="deails">
          <h4>REALIZACJE</h4>

          <p>
            Chcesz przekonać się jak pracujemy ? Zobacz parę z naszych ostatnich
            prac jakie wykonaliśmy dla naszych klientów!
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
