import "./Account.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import db from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
const Account = () => {
  const [success, setSuccess] = useState(); // eslint-disable-next-line
  const [user, setUser] = useState({
    userRegister: {},
    userLogin: {},
  });
  const [formDataRegister, setFormDataRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormDataRegister({
      ...formDataRegister,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitDataUser = (e) => {
    e.preventDefault();
    pushData({ ...user, userRegister: formDataRegister });
  };
  const pushData = async (newOder) => {
    const collectionOrder = collection(db, "Users");
    const orderDoc = await addDoc(collectionOrder, newOder);
    setSuccess(orderDoc.id);
  };
  const { Account } = useParams();
  if (Account === "Login") {
    return (
      <div className="accountContainer">
        <div className="formContent">
          <form className="form">
            <div className="formGroup">
              <label>Email</label>
              <input
                className="inputForm"
                type="text"
                name="Email"
                placeholder="Email"
              ></input>
            </div>
            <div className="formGroup">
              <label>Contraseña</label>
              <input
                className="inputForm"
                type="password"
                placeholder="Contraseña"
              ></input>
              <Link to="">
                <span className="questionAccount">
                  ¿Olvidaste tu contraseña?
                </span>
              </Link>
            </div>
            <div className="formGroup">
              <button className="ButtonVerMas">Iniciar sesion</button>
            </div>
          </form>
          <p>
            ¿No tenes cuenta aún?
            <Link to="/Cuenta/Register">
              <span className="createAccount">Crear Cuenta</span>
            </Link>
          </p>
        </div>
      </div>
    );
  } else if (Account === "Register") {
    return (
      <div className="accountContainer">
        <div className="formContent">
          <form onSubmit={SubmitDataUser} className="form">
            <div className="formGroup">
              <label>Email</label>
              <input
                className="inputForm"
                type="text"
                name="email"
                onChange={handleChange}
                value={formDataRegister.email}
                placeholder="Email"
              ></input>
            </div>
            <div className="formGroup">
              <label>Contraseña</label>
              <input
                className="inputForm"
                type="password"
                name="password"
                onChange={handleChange}
                value={formDataRegister.password}
                placeholder="Contraseña"
              ></input>
            </div>
            <div className="formGroup">
              <label>Confirmar Contraseña</label>
              <input
                className="inputForm"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formDataRegister.confirmPassword}
                placeholder="Contraseña"
              ></input>
              <Link to="">
                <span className="questionAccount">
                  ¿Olvidaste tu contraseña?
                </span>
              </Link>
            </div>
            <div className="formGroup">
              <button type="submit" className="ButtonVerMas">
                Crear Cuenta
              </button>
            </div>
          </form>
          <p>
            ¿Ya tenes una cuenta?
            <Link to="/Cuenta/Login">
              <span className="createAccount">Iniciar Sesión</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
};
export default Account;
