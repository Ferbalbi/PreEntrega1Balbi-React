import ItemCount from "../../Counter/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  console.log(product);
  const onAdd = (count) => {
    console.log("productos seleccionados:", count);
  };
  return (
    <div className="row">
      <h2 className="h2-centrado">Detalle del producto</h2>
      <div className="col div-detalle">
        <img className="w-50" src={product.img} alt="imagen" />
        <div>
          <p className="p-color">Nombre: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Precio: {product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      </div>
      <div className="col">
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
