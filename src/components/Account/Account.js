import "./Account.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Account = () => {
  const { Account } = useParams();
  console.log(Account);
  const AccountArray = [
    {
      id: 1,
      email: "Email",
      password: "Contraseña",
      resetPassword: "¿Olvidaste tu contraseña?",
      nameBtn: "Iniciar sesión",
      question: "¿No tenes cuenta aún?",
      buttonCreateAccount: "Crear cuenta",
    },
    {
      id: 2,
    },
  ];
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
          <form className="form">
            <div className="formGroup">
              <label>Nombre Completo</label>
              <input
                className="inputForm"
                type="text"
                name="CompleteName"
                placeholder="Nombre Completo"
              ></input>
            </div>
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
              <label>Teléfono</label>
              <input
                className="inputForm"
                type="number"
                name="Teléfono"
                placeholder="ej: 1123445567"
              ></input>
            </div>
            <div className="formGroup">
              <label>Contraseña</label>
              <input
                className="inputForm"
                type="password"
                placeholder="Contraseña"
              ></input>
            </div>
            <div className="formGroup">
              <label>Confirmar Contraseña</label>
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
              <button className="ButtonVerMas">Crear Cuenta</button>
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
