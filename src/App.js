import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from "./Layout/Header";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import ViewProduct from "./Pages/ViewProduct";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import { createContext, useEffect, useState } from "react";
import CheckoutProduct from "./Pages/CheckoutProduct";
import SellingProduct from "./Pages/SellingProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export const UserProductData=createContext()

function App() {
  const [getProduct, setGetProduct] = useState([]);
  const [getCategoriesData, setGetCategoriesData] = useState();
  const [filterData, setFilterData] = useState();


const productApi = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(json => {

      json.forEach(element => {
        element.total=0
        element.quantity = 1
      });
      setGetProduct(json)

    })
};
const categoriesApi = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => setGetCategoriesData(json));
};

useEffect(() => {
  productApi();
  categoriesApi();
}, []);
  return (
    <div className="App">
      <UserProductData.Provider value={{getProduct,setGetProduct,getCategoriesData,setGetCategoriesData,filterData,setFilterData}}>
      <BrowserRouter>
        <Header />
     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path='/product/:id' element={<ViewProduct/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/selling' element={<SellingProduct/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/checkout' element={<CheckoutProduct/>}/>
     <Route path='/cart' element={<Cart/>}/>

     </Routes>
        </BrowserRouter>
      </UserProductData.Provider>
    
    </div>
  );
}

export default App;
