import { createContext, useState } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  console.log("cartProducts", cartProducts);
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
  };

  const clear = () => {
    setCartProducts([]);
  };
  const removeFromCart = (id) => {
    const newCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCart);
  };
  const data = {
    cartProducts,
    setCartProducts,
    addProduct,
    clear,
    removeFromCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartProvider;
export { CartContext };
