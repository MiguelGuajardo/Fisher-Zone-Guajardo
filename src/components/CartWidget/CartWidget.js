import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartWidget() {
  return (
    <div className="sectionCarrito">
      <ShoppingCartIcon className="IconCarrito" />
      <p className="NameCarrito">Mi Carrito</p>
    </div>
  );
}
