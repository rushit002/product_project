import React, { useState } from 'react'
import './login.css'

export default function Login() {
  const [registerData, setRegisterData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleSubmit=()=>{

  }

  const handleChange=()=>{

  }

  return (
    <div className='login-page'>
    <div class="background" style={{height:"582px"}}>
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handleSubmit}>
        <h3>Register Here</h3>
        <input style={{marginTop:"20px"}} type="text" placeholder="Email" id="email"/>
        <input style={{marginTop:"20px"}} type="password" placeholder="Password" id="password"/>
        <button>Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
  )
}
