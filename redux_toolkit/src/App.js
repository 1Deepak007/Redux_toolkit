import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";
import Cart from "./Components/Cart";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <Counter />
      <hr/>
      <Todos />
      <hr/>
      <Product />
      <Cart />
    </>
  );
}

export default App;
