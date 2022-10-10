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

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path='/product/:id' element={<ViewProduct/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/cart' element={<Cart/>}/>
     </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
