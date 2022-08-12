import "./NavBarContainer.css";
import fisherZoneLogo from "../../../img/fishingZoneLogo.jpg";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import CartWidget from "../../CartWidget/CartWidget";
import { Link } from "react-router-dom";
export default function NavbarContainer() {
  return (
    <div className="NavbarContainer">
      <Link to="/">
        <div className="sectionLogo orderList">
          <img
            className="fishingZoneLogo"
            src={fisherZoneLogo}
            alt="Logo Fishing Zone"
          />

          <p className="NameLogo">Fisher Zone</p>
        </div>
      </Link>
      <div className="SectionSearch">
        <TextField
          id="outlined-basic"
          className="search"
          label="¿Qué estás buscando?"
          variant="outlined"
        />
      </div>
      <div className="sectionCuenta">
        <PersonIcon />
        <ul className="ListaCuenta">
          <Link to="/Cuenta/Register">
            <li>Crear Cuenta</li>
          </Link>
          <Link to="/Cuenta/Login">
            <li>Iniciar Sesión</li>
          </Link>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
}
