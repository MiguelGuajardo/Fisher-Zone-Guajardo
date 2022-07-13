import "./NavBarList.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavBarList() {
  return (
    <div className="NavBarList">
      <ul className="List">
        <li className="NavItem">Inicio</li>
        <li className="NavItem">
          Pesca
          <ul className="ListItems">
            <li>Cañas</li>
            <li>Reels</li>
            <li>Accesorios</li>
          </ul>
          <KeyboardArrowDownIcon />
        </li>
        <li className="NavItem">
          Camping
          <ul className="ListItems">
            <li>Mochilas</li>
            <li>Carpas</li>
            <li>Recipientes Térmicos</li>
            <li>Linternas</li>
            <li>Accesorios</li>
          </ul>
          <KeyboardArrowDownIcon />
        </li>
        <li className="NavItem">
          Playa
          <ul className="ListItems">
            <li>Reposeras y Sillones</li>
            <li>Sombrillas</li>
            <li>Conservadoras</li>
          </ul>
          <KeyboardArrowDownIcon />
        </li>
        <li className="NavItem">Contacto</li>
      </ul>
    </div>
  );
}
