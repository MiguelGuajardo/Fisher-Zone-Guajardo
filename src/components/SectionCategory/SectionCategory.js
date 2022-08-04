import "./SectionCategory.css";
import { Link } from "react-router-dom";
const SectionCategory = () => {
  return (
    <div className="SectionCategory">
      <div className="ListCategory">
        <Link to="/Pesca">
          <h1>Pesca</h1>
        </Link>
        <ul className="ItemListCategory">
          <Link to="/Pesca/Canas">
            <li className="ItemCategory">Cañas</li>
          </Link>
          <Link to="/Pesca/Reels">
            <li className="ItemCategory">Reels</li>
          </Link>
          <Link to="/Pesca/Accesorios">
            <li className="ItemCategory">Accesorios</li>
          </Link>
        </ul>
      </div>
      <div className="ListCategory">
        <Link to="/Camping">
          <h1>Camping</h1>
        </Link>
        <ul className="ItemListCategory">
          <Link to="/Camping/Mochila">
            <li className="ItemCategory">Mochilas</li>
          </Link>
          <Link to="/Camping/Carpa">
            <li className="ItemCategory">Carpas</li>
          </Link>
          <Link to="/Camping/Recipiente_térmico">
            <li className="ItemCategory">Recipientes Térmicos</li>
          </Link>
          <Link to="/Camping/Linterna">
            <li className="ItemCategory">Linterna</li>
          </Link>
          <Link to="/Camping/Accesorios_camping">
            <li className="ItemCategory">Accesorios</li>
          </Link>
        </ul>
      </div>
      <div className="ListCategory">
        <Link to="/Playa">
          <h1>Playa</h1>
        </Link>
        <ul className="ItemListCategory">
          <Link to="/Playa/Reposera_Sillon">
            <li className="ItemCategory">Reposeras y Sillones</li>
          </Link>
          <Link to="/Playa/Sombrilla">
            <li className="ItemCategory">Sombrillas</li>
          </Link>
          <Link to="/Pesca/Conservadora">
            <li className="ItemCategory">Conservadoras</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default SectionCategory;
