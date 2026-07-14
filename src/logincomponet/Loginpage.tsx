import React from "react";
// @ts-ignore: CSS module declarations not available in this project setup
import "./Loginpage.css";
function Loginpage() {
  return (
    <div className="login-page">
      <div>
        <p>Login Page</p>
      </div>

      <div className="login-form">
        <div className="input-container-username">
        <input type="text" placeholder="Enter your username" />
        </div>
       <div className="input-group input-group-lg">

  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
</div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Loginpage;