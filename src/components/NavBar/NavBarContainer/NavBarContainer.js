import "./NavBarContainer.css";
import fisherZoneLogo from "../../../img/fishingZoneLogo.jpg";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
        <div className="DesplegarLista">
          <PersonIcon />
          <p>Mi Cuenta</p>
          <ul className="ListaCuenta">
            <li>Crear Cuenta</li>
            <li>Iniciar Sesión</li>
          </ul>
        </div>
      </div>
      <div className="sectionCarrito">
        <ShoppingCartIcon />
        <p>Mi Carrito</p>
      </div>
    </div>
  );
}
