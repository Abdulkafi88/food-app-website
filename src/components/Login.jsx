import React from "react";
import "../styles/login.css";
const Login = () => {
  return (
    <div className="box">
      <span className="borderLine"></span>
      <form>
        <h2>Sign In</h2>
        <div className="inputBox">
          <input type="text" id="username" required />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" id="password" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
