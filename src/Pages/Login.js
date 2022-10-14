import React, { useEffect, useState } from "react";
import "./login.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [getData, setGetData] = useState();
  const [loginFail, setLoginFail] = React.useState(false);
const [loginSuccess,setLoginSuccess]=useState(false)

const navigate=useNavigate()

  const loginClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginFail(false);
  };
  const loginOpen = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const localStorageGetData = JSON.parse(localStorage.getItem("userData"));
    setGetData(localStorageGetData);
    
    const check=localStorageGetData.some((value)=>value.email.concat(value.password)===loginData.email.concat(loginData.password))
    console.log("check",check)
   if(!check){
     setLoginFail(true);
  }else{
    setLoginSuccess(true);
    localStorage.setItem('login',true)
    navigate('/') 
       localStorage.setItem("loginData",JSON.stringify(loginData))
  }

  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
  <div>
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={loginFail} autoHideDuration={6000} onClose={loginClose}>
        <Alert onClose={loginClose} severity="error" sx={{ width: '100%' }}>
          Login Failed !
        </Alert>
      </Snackbar>
    </Stack>
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={loginSuccess} autoHideDuration={6000} onClose={loginOpen}>
        <Alert onClose={loginOpen} severity="success" sx={{ width: '100%' }}>
          Login Success
        </Alert>
      </Snackbar>
    </Stack>
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
  </div>

  );
}
