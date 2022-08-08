import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts, removeFromCart } = useContext(CartContext);
  console.log(cartProducts);
  return (
    <div className="checkOutContainer">
      <div className="checkOutTitles">
        <h2>ShoppingCart</h2>
      </div>
      {cartProducts !== [] &&
        cartProducts.map((item) => (
          <div className="checkOutDescription">
            <div>
              <h2>Detalle de Producto</h2>
              <div className="detailContainer">
                <img className="imageCheckOut" src={item.image} alt="" />
                <div className="alignContainer">
                  <p className="detailFontSize">{item.name}</p>
                  <button
                    className="BuyButton"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="alignContainer">
              <h2 className="detailFontSize">Cantidad</h2>
              <p className="detailFontSize">{item.contador}</p>
            </div>
            <div className="alignContainer">
              <h2 className="detailFontSize">Precio</h2>
              <p className="detailFontSize">${item.price}</p>
            </div>
            <div className="alignContainer">
              <h2 className="detailFontSize">Total</h2>
              <p className="detailFontSize"> ${item.price * item.contador}</p>
            </div>
          </div>
        ))}
      <Link to="/Pesca">
        <h3 className="styleAncla">Seguir Comprando</h3>
      </Link>
    </div>
  );
};
export default Cart;
