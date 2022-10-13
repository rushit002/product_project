import React, { useEffect, useState } from "react";
import "./login.css";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [getData, setGetData] = useState();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const localStorageGetData = JSON.parse(localStorage.getItem("userData"));
    setGetData(localStorageGetData);
     const check=getData.map((item)=>getData.find((value)=>value.password===item.password))
     console.log("check",check)
     
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="login-page">
      <div class="background" style={{ height: "582px" }}>
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <input
          style={{ marginTop: "20px" }}
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={loginData.name}
          onChange={handleChange}
        />
        <input
          style={{ marginTop: "20px" }}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}
