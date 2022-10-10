import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import ".././assets/index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { color } from "@mui/system";

export default function Header() {
  const [productCart, setProductCart] = useState();

  useEffect(() => {
    localStorageGetData();
  }, []);
  const localStorageGetData = () => {
    const getData = JSON.parse(localStorage.getItem("cartItem"));
    const getDataCount = Object.keys(getData).length;
    setProductCart(getDataCount);
  };

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
            <div class="navbar-nav">
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
            </div>
            <div></div>
          </div>
          <div class="navbar-nav">
            <NavLink
              class="nav-link  text-decoration-none"
              aria-current="page"
              to="/login"
            >
              <button type="button" class="btn btn-outline-secondary d-flex">
                <LoginIcon />
                Login
              </button>
            </NavLink>
            <NavLink
              class="nav-link text-decoration-none"
              aria-current="page"
              to="/register"
            >
              <button type="button" class="btn btn-outline-secondary d-flex">
                <PersonAddAlt1Icon />
                Register
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
          </div>
        </div>
      </nav>
    </div>
  );
}
