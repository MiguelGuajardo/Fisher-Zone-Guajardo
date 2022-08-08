import "./CartWidget.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/Delete";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const { cartProducts, removeFromCart, clear } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return cartProducts === [] ? (
    <div>
      <p>No Hay Productos</p>
    </div>
  ) : (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="sectionCarrito">
          <ShoppingCartIcon className="IconCarrito" />
          <p className="NameCarrito">Mi Carrito</p>
        </div>
      </Button>
      <Menu
        className="menu alignCart"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {cartProducts.map((product) => {
          const { id, name, price, image, contador } = product;
          return (
            <div className="item-cart-product" key={id}>
              <img className="imageCartItem" src={image} alt="" />
              <div className="cart-product__details">
                <p className="sizeDetailItem">{name}</p>
                <p className="sizeDetailItem">${price * contador}</p>
                <p className="sizeDetailItem">CANTIDAD = {contador}</p>
              </div>

              <button onClick={() => removeFromCart(id)}>
                <DeleteIcon className="deleteItem" />
              </button>
            </div>
          );
        })}
        <button className="BuyButton" onClick={() => clear()}>
          Remove All
        </button>
        <Link to="/Cart">
          <h2>Expandir Carrito</h2>
        </Link>
      </Menu>
    </div>
  );
}
