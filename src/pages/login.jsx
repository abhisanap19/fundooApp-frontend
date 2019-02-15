import React, { Component } from "react";
import LoginInput from "../components/loginInput";
class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="titles">
          <font color="green">
            <h1>
              <b>Fundoo</b>
            </h1>
          </font>
          <h1>SIGN IN</h1>
          <font size="1">
            <h1>with your FundooApp Account</h1>
          </font>
        </div>
        <div>
          <LoginInput />
        </div>
      </div>
    );
  }
}
export default Login;
