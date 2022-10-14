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
import ProtectedRoute from "./Pages/ProtectedRoute";
import Clothes from "./Pages/Product/Clothes";
import Electronics from "./Pages/Product/Electronics";
import Furniture from "./Pages/Product/Furniture";
import Others from "./Pages/Product/Others";
import Shoes from "./Pages/Product/Shoes";

export const UserProductData=createContext()

function App() {
  const [getProduct, setGetProduct] = useState([]);
  const [getCategoriesData, setGetCategoriesData] = useState();
  const [filterData, setFilterData] = useState();
   const [newGetCategoriesData,setNewGetCategoriesData]=useState()
   const [newGetProduct,setNewGetProduct]=useState()

  const [newFilterData,setNewFilterData]=useState()

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

const newCategoriesApi=()=>{
  fetch("https://api.escuelajs.co/api/v1/categories")
  .then((res) => res.json())
  .then((json) => setNewGetCategoriesData(json));
}

const newProductApi=()=>{
  fetch(" https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((json) => setNewGetProduct(json));
}

const filterDataFunction=()=>{
  const filterData=newGetProduct?.filter((item)=>newGetCategoriesData?.find((value)=>value.name=item.category.name))
 setNewFilterData(filterData)
}
useEffect(() => {
  newProductApi()
  newCategoriesApi()
  productApi();
  categoriesApi();
  filterDataFunction()
}, []);

  return (
    <div className="App">
      <UserProductData.Provider value={{getProduct,setGetProduct,getCategoriesData,setGetCategoriesData,filterData,setFilterData,newGetCategoriesData,newGetProduct,newFilterData,newFilterData}}>
      <BrowserRouter>
        <Header />
     <Routes>
     <Route path='/' element={<ProtectedRoute Component={HomePage}/>}/>
     <Route path='/product' element={<ProtectedRoute Component={Product}/>}/>
     <Route path='/product/:id' element={<ProtectedRoute Component={ViewProduct}/>}/>
     <Route path='/about/:id' element={<ProtectedRoute Component={Contact}/>}/>
     <Route path='/selling' element={<ProtectedRoute Component={SellingProduct}/>}/>
     <Route path='/about' element={<ProtectedRoute Component={About}/>}/>
     <Route path='/clothes' element={<ProtectedRoute Component={Clothes}/>}/>
     <Route path='/electronics' element={<ProtectedRoute Component={Electronics}/>}/>
     <Route path='/furniture' element={<ProtectedRoute Component={Furniture}/>}/>
     <Route path='/others' element={<ProtectedRoute Component={Others}/>}/>
     <Route path='/shoes' element={<ProtectedRoute Component={Shoes}/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/checkout' element={<ProtectedRoute Component={CheckoutProduct}/>}/>
     <Route path='/cart' element={<ProtectedRoute Component={Cart}/>}/>

     </Routes>
        </BrowserRouter>
      </UserProductData.Provider>
    
    </div>
  );
}

export default App;
