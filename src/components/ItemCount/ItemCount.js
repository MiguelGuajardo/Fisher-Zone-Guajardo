import "./ItemCount.css";
import { useState } from "react";
const ItemCount = ({ stock }) => {
  const [contador, setContador] = useState(1);
  const addNumber = () => {
    if (contador === stock) {
      return contador;
    } else {
      setContador(contador + 1);
    }
  };
  const removeNumber = () => {
    if (contador === 1) {
      return contador;
    } else setContador(contador - 1);
  };
  return (
    <div className="ItemCount">
      <button onClick={removeNumber} className="btn btnRemove">
        -
      </button>
      <h2 className="h2Contador">{contador} </h2>
      <button onClick={addNumber} className="btn btnAdd">
        +
      </button>
    </div>
  );
};
export default ItemCount;
