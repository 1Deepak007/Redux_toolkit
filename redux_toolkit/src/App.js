import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";
import Product from "./Components/Product";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/helpers/Navbar";
import DMart from "./Components/D_Mart";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/product' element={<Product />} />
        <Route path='/dmart' element={<DMart />} />
      </Routes>
    </>
  );
}

export default App;
