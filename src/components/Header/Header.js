import "./header.scss";
import logo from "../../images/logo.png";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";



const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>

          <div className="header-menu">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn">
              <span class="navicon"></span>
            </label>

            <ul class="menu">
              <li>
                <HashLink className="line" smooth to="/#abaut">O NAS</HashLink>
              </li>
           
              <li>
                <HashLink className="line"  smooth to="/#offert">OFERTA</HashLink>
              </li>
           
              <li>
                <Link className="line" to="Realization">
                  REALIZACJE
                </Link>
              </li>
              <li>
                <Link to="Contact">KONTAKT</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
