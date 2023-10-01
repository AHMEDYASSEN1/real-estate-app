import React from "react";
import './SignUp.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Homzy</span>
        <span className="title">Sign up</span>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button>Sign up</button>
        </form>
        <p>Do not you have an account? <Link to={"/login"}>Sign in</Link></p>
      </div>
    </div>
  );
};

export default Login;