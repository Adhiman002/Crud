import React from 'react'
import './Login.css'
import logo from '../../biology.jpg'
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS
import SignUp from './SignUpForm';
import LoginForm from './LoginForm';

function Login() {
  return (
    <>

      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={logo} alt="" />
            <div className="text">
              <span className="text-1">Every new friend is a <br /> new adventure</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src={logo} />
            <div className="text">
              <span className="text-1">Complete miles of journey <br /> with one step</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <LoginForm />
            <SignUp />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
