import "./ItemProduct.css";

const ItemProduct = ({ name, image, price }) => {
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
          <button className="ButtonVerMas">Ver Mas</button>
        </div>
      </div>
    </div>
  );
};
export default ItemProduct;
