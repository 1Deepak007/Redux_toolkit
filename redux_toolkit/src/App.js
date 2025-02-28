import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";
import Product from "./Components/Product";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/helpers/Navbar";
import DMart from "./Components/D_Mart";
import UserAPICall from './Components/User_API_Call';
import Normalization from "./Components/Normalization";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/product' element={<Product />} />
        <Route path='/dmart' element={<DMart />} />
        <Route path='/user' element={<UserAPICall />} />
        <Route path='/normalization' element={<Normalization />} />
      </Routes>
    </>
  );
}

export default App;
