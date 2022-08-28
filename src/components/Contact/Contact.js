import { useState, useContext } from "react";
import "./Contact.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import db from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

const Contact = () => {
  const { sendMessage } = useContext(CartContext);
  const [success, setSuccess] = useState(); // eslint-disable-next-line
  const [mensaje, setMensaje] = useState({
    mensajeUser: {},
    date: new Date().toLocaleString(),
  }); // eslint-disable-next-line
  const [formDataContact, setFormDataContact] = useState({
    name: "",
    phone: "",
    email: "",
    mensaje: "",
  });
  const handleChange = (e) => {
    setFormDataContact({ ...formDataContact, [e.target.name]: e.target.value });
  };
  const SubmitData = (e) => {
    e.preventDefault();
    pushDataMensaje({
      ...mensaje,
      mensajeUser: formDataContact,
    });
  };
  const pushDataMensaje = async (newOder) => {
    const collectionOrder = collection(db, "Mensajes");
    const orderDoc = await addDoc(collectionOrder, newOder);
    setSuccess(orderDoc.id);
  };
  return (
    <>
      <div className="contactInfo">
        <h2>Contacto</h2>
        <ul>
          <li className="itemContact">
            <WhatsAppIcon />
            <p>541122334455</p>
          </li>
          <li className="itemContact">
            <PhoneIcon />
            <p>+541122334455</p>
          </li>
          <li className="itemContact">
            <EmailIcon />
            <p>FisherZone@hotmail.com</p>
          </li>
          <li className="itemContact">
            <LocationOnIcon />
            <p>Sucursal: Rivadavia 692, Buenos Aires</p>
          </li>
        </ul>
      </div>
      <div className="contactForm">
        <form onSubmit={SubmitData} className="form">
          <div className="formGroup">
            <label>Nombre</label>
            <input
              className="inputForm"
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="formGroup">
            <label>Email</label>
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="formGroup">
            <label>Teléfono</label>
            <input
              className="inputForm"
              type="number"
              name="phone"
              placeholder="Teléfono"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="formGroup">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              rows="10"
              cols="50"
              placeholder="Escriba su mensaje Aquí"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="formGroup">
            <button
              onClick={() => sendMessage()}
              type="submit"
              className="ButtonVerMas"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
