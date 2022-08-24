import "./FacturaContent.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const FacturaContent = ({ data, idParam }) => {
  const { clear } = useContext(CartContext);
  const { buyer, items, date, total } = data;
  const { name, email, phone, home } = buyer;
  return (
    <>
      <div className="invoice">
        <h2>Factura</h2>
        <div>
          <div>
            <h1>Fisher-Zone</h1>
          </div>
          <div>
            <img
              className="imgLogoInvoice"
              src="/assets/fishingZoneLogo.jpg"
              alt="fishingZoneLogo"
            />
          </div>
        </div>

        <hr />

        <div>
          <div>
            <h5>Facturar a</h5>
            <p>{name}</p>
          </div>
          <div>
            <h5>Enviar a</h5>
            <p>
              {name}, {phone}, {home} ,{email}
            </p>
          </div>
          <div>
            <h5>Id de la orden de Compra: {idParam}</h5>
            <h5>Fecha de Compra: {date}</h5>
            <h5>Fecha de vencimiento</h5>
          </div>
          <div>
            <p>09/05/2019</p>
          </div>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Cant.</th>
                <th>Descripcion</th>
                <th className="column">Precio Unitario</th>
                <th>Importe</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.contador}</td>
                    <td>{item.name}</td>
                    <td className="column">${item.price}</td>
                    <td>${item.price * item.contador}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th>Total Factura</th>
                <th>${total}</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <div>
            <h4>Condiciones y formas de pago</h4>
            <p>El pago se debe realizar en un plazo de 15 dias.</p>
          </div>
        </div>
      </div>
      {clear()}
    </>
  );
};
export default FacturaContent;
