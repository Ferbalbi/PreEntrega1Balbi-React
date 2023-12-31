import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { mFetch } from "../../Utils/mockFetch";

function ItemDetailContainer() {
  //manejo de estados
  const [product, setProduct] = useState({});
  const { pid } = useParams();
  console.log(pid);
  useEffect(() => {
    mFetch(Number(pid))
      .then((resp) => setProduct(resp))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
