import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products';
import AddProduct from './Components/Addproduct/Addproduct';
import Header from './Components/Headers/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';





function App() {


  return (
    <div className="App">
 <>
 <Header/>
      <Routes>
        <Route index element={<Products />} />

        <Route  exact path="/Addproduct" element={<AddProduct />} />

        <Route exact path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>    
    </div>
  );
}

export default App;
