import "./NavBarList.css";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBarList() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="btnHamburgerContainer">
        <button className="btnHamburger" onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
        </button>
      </div>
      <div className={openMenu === false ? "NavBarList" : "NavBarListOpen"}>
        <ul className="List">
          <Link to="/">
            <li className="NavItem">Inicio</li>
          </Link>
          <Link className="LinkLogo" to="/Pesca">
            <li className="NavItem">
              Pesca
              <KeyboardArrowDownIcon />
              <ul className="ListItems">
                <Link to="/Pesca/Canas">
                  <li>Cañas</li>
                </Link>
                <Link to="/Pesca/Reels">
                  <li>Reels</li>
                </Link>
                <Link to="/Pesca/Accesorios">
                  <li>Accesorios</li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link className="LinkLogo" to="/Camping">
            <li className="NavItem">
              Camping
              <KeyboardArrowDownIcon />
              <ul className="ListItems">
                <Link to="/Camping/Mochila">
                  <li>Mochilas</li>
                </Link>
                <Link to="/Camping/Carpa">
                  <li>Carpas</li>
                </Link>
                <Link to="/Camping/Recipiente_térmico">
                  <li>Recipientes Térmicos</li>
                </Link>
                <Link to="/Camping/Linterna">
                  <li>Linternas</li>
                </Link>
                <Link to="/Camping/Accesorios_camping">
                  <li>Accesorios</li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link className="LinkLogo" to="/Playa">
            <li className="NavItem">
              Playa
              <KeyboardArrowDownIcon />
              <ul className="ListItems">
                <li>Reposeras y Sillones</li>
                <li>Sombrillas</li>
                <li>Conservadoras</li>
              </ul>
            </li>
          </Link>
          <Link className="LinkLogo" to="/Contacto">
            <li className="NavItem">Contacto</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
