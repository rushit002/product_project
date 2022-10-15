import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setFormErrors(validation(registerData));
    setIsSubmit(true);
    e.preventDefault();
    console.log("registerData", registerData);
    const localStorageData = [];
    localStorageData.push(registerData);
    const localStorageDataAdd = localStorageData.concat(JSON.parse(localStorage.getItem("userData") || "[]"));
    console.log("localStorageDataAdd", localStorageDataAdd)
    localStorage.setItem("userData", JSON.stringify(localStorageDataAdd));
    if (isSubmit) {
      navigate("/login")
    }
  };

  const handleChange = (e) => {
    const name = e?.target.name;
    const value = e?.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const validation=(values)=>{
  const errors={}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(!values.name){
    errors.name="Name is required"
  }else if(values.name.length < 3){
   errors.name="Name must be more than 4 characters"
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(registerData);
    }
  }, [formErrors]);
  return (
    <div>
      <div className="login-page">
        <div class="background" style={{ height: "582px" }}>
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <form onSubmit={handleSubmit} style={{height:"632px"}}>
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
                    <p style={{marginTop:"8px"}}>{formErrors.name}</p>

          <input
            style={{ marginTop: "20px" }}
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
                              <p style={{marginTop:"8px"}}>{formErrors.email}</p>

          <input
            style={{ marginTop: "20px" }}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
                              <p style={{marginTop:"8px"}}>{formErrors.password}</p>

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
