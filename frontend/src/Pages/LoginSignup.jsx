import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='your Name'/>
          <input type="email" placeholder='email'/>
          <input type='passowrd' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account ? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p> By Continuing, I agree to terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup