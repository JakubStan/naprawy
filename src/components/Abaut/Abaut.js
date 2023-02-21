import "./abaut.scss";
import worker from "../../images/worker.jpg";

export function Abaut() {
  return (
    <>
      <section id="abaut">
        <div className="abaut">
          <div className="description">
            <h2 className="section-title">NASZA FIRMA</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <img src={worker} alt="Pracownik" />
        </div>
      </section>
    </>
  );
}

export default Abaut;
