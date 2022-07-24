import "./ItemProduct.css";

import ItemCount from "../ItemCount/ItemCount";
const ItemProduct = ({ data }) => {
  const { name, price, image, stock } = data;

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
          <ItemCount stock={stock} />
          <button className="ButtonVerMas">Ver Mas</button>
        </div>
      </div>
    </div>
  );
};
export default ItemProduct;
