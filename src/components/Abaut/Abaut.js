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
              Jesteśmy profesjonalistami z wieloletnim doświadczeniem oraz
              dziesiątkami zadowolonych klientów. Działamy na terenie Wrocławia
              i okolic. Świadczymy szereg usług z branży hydraulicznej,
              elektryki, remontów oraz wykończeń wnętrz. Pomagamy również naszym
              klientom w usunięciu oraz naprawie nagłych awarii oraz usterek.
            </p>
          </div>

          <img src={worker} alt="Pracownik" />
        </div>
      </section>
    </>
  );
}

export default Abaut;
