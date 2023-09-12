import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const handleSubstract = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  const handleOnAdd = () => {
    onAdd(counter);
  };
  return (
    <center>
      <h2>counter</h2>
      <button className="bot-color" onClick={handleAdd}>
        {" "}
        +1
      </button>
      <label>
        <strong>{counter}</strong>
      </label>
      <button className="bot-color" onClick={handleSubstract}>
        {" "}
        -1
      </button>
      <button className="bot-color" onClick={handleOnAdd}>
        Agregar al Carrito
      </button>
    </center>
  );
};

export default ItemCount;
