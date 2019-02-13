import React, { Component } from "react";
import LoginInput from "../components/loginInput";
class Login extends Component {
  render() {
    return (
      <div
        style={{
          width: "464px",
          height: "478px",
          margin: "70px auto",
          border: "1px solid gray",
          borderRadius: "15px",
          padding: "30px",
          paddingTop: "10px",
          backgroundColor: "white"
        }}
      >
        <div style={{ textAlign: "center"}}>
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
          <LoginInput  />
        </div>
      </div>
    );
  }
}
export default Login;
