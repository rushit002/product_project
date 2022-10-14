import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../assets/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import ".././assets/index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SellIcon from '@mui/icons-material/Sell';
import { color } from "@mui/system";
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function Header() {
  const [productCart, setProductCart] = useState();
  const [loginData, setLoginData] = useState()

  const navigate = useNavigate()
  useEffect(() => {
    localStorageGetData();
    loginFunction()
  }, []);

  const localStorageGetData = () => {
    const getData = JSON.parse(localStorage.getItem("cartItem"));
    if (getData) {
      const getDataCount = Object.keys(getData)?.length;
      setProductCart(getDataCount);
    }
  };

  const loginFunction = () => {
    const loginGetData = JSON.parse(localStorage.getItem("login"))
    setLoginData(loginGetData)
  }

  const logoutFunction=()=>{
    navigate('/login')
    localStorage.removeItem("login")
  }

  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={Logo} width="124px" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            {
              loginData ? <div class="navbar-nav">
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive ? "#605a5a" : "" };
                  }}
                  class="nav-link  text-decoration-none"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive ? "#605a5a" : "" };
                  }}
                  class="nav-link text-decoration-none"
                  aria-current="page"
                  to="/product"
                >
                  Product
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive ? "#605a5a" : "" };
                  }}
                  class="nav-link text-decoration-none"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive ? "#605a5a" : "" };
                  }}
                  class="nav-link text-decoration-none"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </div> : ""
            }
          </div>
          <div class="navbar-nav" style={{alignItems:"center"}}>
            {
              loginData ?
                <>
                  <NavLink
                    class="nav-link  text-decoration-none"
                    aria-current="page"
                    to="/selling"
                  >
                    <button type="button" class="btn btn-outline-secondary d-flex">
                      <SellIcon />
                      Selling Product
                    </button>
                  </NavLink>
                  <NavLink
                    class="nav-link text-decoration-none"
                    aria-current="page"
                    to="/checkout"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-secondary d-flex position-relative"
                    >
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        Pay
                      </span>
                      <PointOfSaleIcon style={{ marginRight: "10px" }} />
                      Checkout
                    </button>
                  </NavLink>
                  <NavLink
                    class="nav-link text-decoration-none"
                    aria-current="page"
                    to="/cart"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-secondary d-flex position-relative"
                    >
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {productCart}
                      </span>
                      <ShoppingCartIcon style={{ marginRight: "10px" }} />
                      Cart
                    </button>
                  </NavLink>
                  <NavLink
                    class="nav-link text-decoration-none"
                    aria-current="page"
                    to="/login"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-secondary d-flex position-relative"
                      onClick={()=>logoutFunction()}
                    >
                      <LogoutIcon style={{ marginRight: "10px" }} />
                      Log out
                    </button>
                  </NavLink>
                </> :    
                <NavLink
                    class="nav-link text-decoration-none"
                    aria-current="page"
                    to="/register"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-secondary d-flex position-relative"
                    >
                     
                      <HowToRegIcon style={{ marginRight: "10px" }} />
                      Register
                    </button>
                  </NavLink>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
