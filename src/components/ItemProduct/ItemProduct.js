import "./ItemProduct.css";
import { Link } from "react-router-dom";

const ItemProduct = ({ data }) => {
  const { name, price, image, id, category } = data;

  return (
    <div className="ItemProduct">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={name} />
        </div>
        <div className="flip-card-back">
          <img src={image} alt={name} />
          <h3>{name} </h3>
          <h2>${price}</h2>
          <Link to={`/Pesca/${category}/${id}`}>
            <button className="ButtonVerMas">Ver Mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ItemProduct;
