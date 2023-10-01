import React from "react";
import '../SignUp/SignUp';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Homzy</span>
        <span className="title">Sign in</span>
        <form>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button>Sign in</button>
        </form>
        <p>
          You don't have an account? <Link to={"/signup"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
