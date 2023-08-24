import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Pergola Lenceria 👙🧦"} />
      <Footer />
    </div>
  );
}

export default App;
