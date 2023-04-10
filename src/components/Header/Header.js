import "./header.scss";
import logo from "../../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-menu">
            <Link to="/">
              <img className="logo" src={logo} alt="Naprawy Awarie" />
            </Link>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn">
              <span class="navicon"></span>
            </label>

            <ul class="menu">
              <li>
                <HashLink className="line" smooth to="/#abaut">
                  O NAS
                </HashLink>
              </li>

              <li>
                <HashLink className="line" smooth to="/#offert">
                  OFERTA
                </HashLink>
              </li>

              <li>
                <HashLink className="line" smooth to="Realization#Realization">
                  REALIZACJE
                </HashLink>
              </li>
              <li>
                <NavLink to="Contact">KONTAKT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
