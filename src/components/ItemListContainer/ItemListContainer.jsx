import "./ItemListContainer.css";

function ItemListContainer(props) {
  return <h2 className="item-list">{props.greeting}</h2>;
}

export default ItemListContainer;
