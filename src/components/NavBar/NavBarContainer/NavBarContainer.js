import "./NavBarContainer.css";
import fisherZoneLogo from "../../../img/fishingZoneLogo.jpg";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import CartWidget from "../../CartWidget/CartWidget";

export default function NavbarContainer() {
  return (
    <div className="NavbarContainer">
      <div className="sectionLogo orderList">
        <img
          className="fishingZoneLogo"
          src={fisherZoneLogo}
          alt="Logo Fishing Zone"
        />
        <p className="NameLogo">Fisher Zone</p>
      </div>
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
          <li>Crear Cuenta</li>
          <li>Iniciar Sesión</li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
}
