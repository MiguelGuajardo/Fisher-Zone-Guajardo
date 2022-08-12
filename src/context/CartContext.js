import { createContext, useState } from "react";
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
  const data = {
    cartProducts,
    setCartProducts,
    addProduct,
    clear,
    removeFromCart,
    totalProducts,
    setTotalPrice,
    totalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartProvider;
export { CartContext };
