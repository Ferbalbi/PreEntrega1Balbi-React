import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card w-25">
      <div className="card-body">
        <img
          className="w-100 card-img-top"
          src={product.img}
          alt="imagen prenda"
        />
        <p className="p-color">Nombre: {product.name}</p>
        <p>Descripcion: {product.description}</p>
        <p>Precio: {product.price}</p>
      </div>
      <div className="card-footer">
        <Link to={`/detalle/${product.id}`}>
          <button className="btn btn-success w-100">Detalle</button>
        </Link>
      </div>
    </div>
  );
};
export default Item;
