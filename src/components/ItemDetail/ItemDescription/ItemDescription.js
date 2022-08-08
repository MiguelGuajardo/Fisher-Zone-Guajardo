import "./ItemDescription.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ItemCount from "../../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDescription = ({ name, price, stock }) => {
  const Cuotas = price / 3;
  const [qtySelected, setQtySelected] = useState(0);
  return (
    <>
      <h2 className="TitleDescription">{name}</h2>
      <h3 className="PriceDescription">${price}</h3>
      <div className="BuyCard">
        <CreditCardIcon fontSize="large" />
        <p>
          <span>3 Cuotas sin interés</span> de ${Cuotas.toFixed(2)}
        </p>
      </div>
      <div className="BuyContainer">
        {qtySelected > 0 ? (
          <Link to="/Cart">
            <button className="BuyButton">TERMINAR COMPRA</button>
          </Link>
        ) : (
          <ItemCount setQtySelected={setQtySelected} stock={stock} />
        )}
      </div>
    </>
  );
};
export default ItemDescription;
