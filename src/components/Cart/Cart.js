import "./Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import db from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
const Cart = () => {
  const { cartProducts, removeFromCart, totalProducts, totalPrice } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState();
  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        contador: product.contador,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalPrice,
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    home: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const SubmitData = (e) => {
    e.preventDefault();
    pushData({ ...order, buyer: formData });
  };

  const pushData = async (newOder) => {
    const collectionOrder = collection(db, "Ordenes");
    const orderDoc = await addDoc(collectionOrder, newOder);
    setSuccess(orderDoc.id);
  };
  if (cartProducts.length === 0) {
    return (
      <div className="checkOutContainer">
        <div className="notFoundCart">
          <h2>No hay productos en el carrito</h2>
          <Link to="/Pesca">
            <h3 className="styleAncla">Seguir Comprando</h3>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="checkOutContainer">
        <div className="checkOutTitles">
          <h2>ShoppingCart</h2>
          <h2>Items totales: {totalProducts}</h2>
          <h2>Total: ${totalPrice}</h2>
        </div>
        <div className="checkoutList">
          {cartProducts !== [] &&
            cartProducts.map((item) => (
              <div className="checkOutDescription" key={item.id}>
                <div>
                  <h2>Detalle de Producto</h2>
                  <div className="detailContainer">
                    <img
                      className="imageCheckOut"
                      src={`/assets/${item.image}`}
                      alt=""
                    />
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
                <div className="containerCenter">
                  <div className="alignContainer">
                    <h2 className="detailFontSize">Cantidad</h2>
                    <p className="detailFontSize">{item.contador}</p>
                  </div>
                  <div className="alignContainer">
                    <h2 className="detailFontSize">Precio</h2>
                    <p className="detailFontSize">${item.price}</p>
                  </div>
                  <div className="alignContainer">
                    <h2 className="detailFontSize">SubTotal</h2>
                    <p className="detailFontSize">
                      {" "}
                      ${item.price * item.contador}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {showModal && (
          <Modal close={() => setShowModal(false)}>
            <div className="formContentOrder">
              {success ? (
                <>
                  <h2>Su orden se genero correctamente</h2>
                  <p>ID de compra : {success}</p>
                  <Link to={`/Factura/${success}`}>
                    <button className="BuyButton">Ver Factura de compra</button>
                  </Link>
                </>
              ) : (
                <form onSubmit={SubmitData} className="form">
                  <label>DATOS DE CONTACTO</label>
                  <div className="formGroup">
                    <label>Nombre</label>
                    <input
                      className="inputForm"
                      type="text"
                      name="name"
                      placeholder="Ingrese su nombre"
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                    <label>Teléfono</label>
                    <input
                      className="inputForm"
                      type="number"
                      name="phone"
                      placeholder="Ingrese su número de Teléfono"
                      onChange={handleChange}
                      value={formData.phone}
                      required
                    />
                    <label>Domicilio</label>
                    <input
                      className="inputForm"
                      type="text"
                      name="home"
                      placeholder="Ingrese su domicilio"
                      onChange={handleChange}
                      value={formData.home}
                      required
                    />
                    <label>Email</label>
                    <input
                      className="inputForm"
                      type="email"
                      name="email"
                      placeholder="Ingrese su Mail"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                  </div>
                  <button type="submit" className="BuyButton">
                    Enviar
                  </button>
                </form>
              )}
            </div>
          </Modal>
        )}
        <Link to="/Pesca">
          <h3 className="styleAncla">Seguir Comprando</h3>
        </Link>
        <button onClick={() => setShowModal(true)} className="BuyButton">
          Comprar
        </button>
      </div>
    );
  }
};
export default Cart;
