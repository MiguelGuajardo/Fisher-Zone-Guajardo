import { createContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const addProduct = (product) => {
    const isProductInCart = cartProducts.find(
      (productInCart) => productInCart.id === product.id
    );
    if (isProductInCart) {
      const newRender = cartProducts.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            contador: productInCart.contador + product.contador,
          };
        } else {
          return productInCart;
        }
      });
      setCartProducts(newRender);
    } else {
      setCartProducts([...cartProducts, product]);
    }
    setTotalProducts(totalProducts + product.contador);
    setTotalPrice(totalPrice + product.contador * product.price);
  };
  const clear = () => {
    setCartProducts([]);
    setTotalProducts(0);
    setTotalPrice(0);
  };
  const removeFromCart = (id) => {
    const newCart = cartProducts.filter((product) => product.id !== id);
    const contadorItem = cartProducts.filter((product) => product.id === id);
    setCartProducts(newCart);
    setTotalProducts(totalProducts - contadorItem[0].contador);
    setTotalPrice(
      totalPrice - contadorItem[0].contador * contadorItem[0].price
    );
  };
  const addToCart = () => {
    Swal.fire({
      html: `<span>Producto agregado al carrito</span>`,
      showConfirmButton: false,
      width: `90%`,
      timer: 4000,
      timerProgressBar: true,
      backdrop: false,
      position: `top`,
      background: `green`,
      color: `#fff`,
    });
  };
  const removeToCart = () => {
    Swal.fire({
      html: `<span>Producto eliminado del carrito</span>`,
      showConfirmButton: false,
      width: `90%`,
      timer: 4000,
      timerProgressBar: true,
      backdrop: false,
      position: `top`,
      background: `green`,
      color: `#fff`,
    });
  };
  const removeAllCart = () => {
    Swal.fire({
      html: `<span>Se han eliminados todos los productos del carrito</span>`,
      showConfirmButton: false,
      width: `90%`,
      timer: 4000,
      timerProgressBar: true,
      backdrop: false,
      position: `top`,
      background: `green`,
      color: `#fff`,
    });
  };
  const sendMessage = () => {
    Swal.fire({
      html: `<span>Mensaje enviado correctamente</span>`,
      showConfirmButton: false,
      width: `90%`,
      timer: 4000,
      timerProgressBar: true,
      backdrop: false,
      position: `top`,
      background: `green`,
      color: `#fff`,
    });
  };
  const data = {
    cartProducts,
    setCartProducts,
    addProduct,
    clear,
    removeFromCart,
    totalProducts,
    setTotalPrice,
    totalPrice,
    addToCart,
    removeToCart,
    removeAllCart,
    sendMessage,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartProvider;
export { CartContext };
