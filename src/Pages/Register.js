import React, { useState } from "react";
import "./login.css";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("registerData", registerData);
    
    const localStorageData = [];
    localStorageData.push(registerData);
    const localStorageDataAdd = localStorageData.concat(JSON.parse(localStorage.getItem("userData") || "[]"));
    console.log("localStorageDataAdd",localStorageDataAdd)

       localStorage.setItem("userData", JSON.stringify(localStorageDataAdd));

  };

  const handleChange = (e) => {
    const name = e?.target.name;
    const value = e?.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  return (
    <div>
      <div className="login-page">
        <div class="background" style={{ height: "582px" }}>
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Register Here</h3>
          <input
            style={{ marginTop: "20px" }}
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={registerData.name}
            onChange={handleChange}
          />
          <input
            style={{ marginTop: "20px" }}
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
          <input
            style={{ marginTop: "20px" }}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
          <button type="submit">Register In</button>
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
    </div>
  );
}
