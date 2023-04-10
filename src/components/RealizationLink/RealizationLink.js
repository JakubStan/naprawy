import "./RealizationLink.scss";
import { HashLink } from "react-router-hash-link";

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

          <HashLink to="/Realization#Realization" className="more-btn">
            WIĘCEJ
          </HashLink>
        </div>
      </section>
    </>
  );
};

export default RealizationLink;
