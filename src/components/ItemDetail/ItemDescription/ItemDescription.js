import "./ItemDescription.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDescription = ({ name, price, stock }) => {
  const Cuotas = price / 3;
  return (
    <>
      <h2 className="TitleDescription">{name}</h2>
      <h3 className="PriceDescription">${price}</h3>
      <div className="BuyCard">
        <CreditCardIcon fontSize="large" />
        <p>
          <span>3 Cuotas sin interes</span> de ${Cuotas.toFixed(2)}
        </p>
      </div>
      <div className="BuyContainer">
        <ItemCount stock={stock} />
        <button className="BuyButton">Agregar al carrito</button>
      </div>
    </>
  );
};
export default ItemDescription;
