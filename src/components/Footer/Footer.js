import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="itemsFooterContainer">
        <h2>Navegación</h2>
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/Pesca">
            <li>Pesca</li>
          </Link>
          <Link to="/Camping">
            <li>Camping</li>
          </Link>
          <Link to="/Playa">
            <li>Playa</li>
          </Link>
          <Link to="/Contacto">
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
      <div>
        <h2>© 2022 FisherZone All Rights Reserved by Miguel Angel Guajardo</h2>
      </div>
    </div>
  );
};
export default Footer;
