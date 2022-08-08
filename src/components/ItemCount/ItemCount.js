import "./ItemCount.css";
import { useState } from "react";
const ItemCount = ({ stock, setQtySelected }) => {
  const [contador, setContador] = useState(0);

  const addNumber = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const removeNumber = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const onAdd = () => {
    setQtySelected(contador);
  };
  return (
    <>
      <div className="ItemCount">
        <button onClick={removeNumber} className="btn btnRemove">
          -
        </button>
        <h2 className="h2Contador">{contador} </h2>
        <button onClick={addNumber} className="btn btnAdd">
          +
        </button>
      </div>
      <button className="BuyButton" onClick={onAdd}>
        AGREGAR AL CARRITO
      </button>
    </>
  );
};
export default ItemCount;
