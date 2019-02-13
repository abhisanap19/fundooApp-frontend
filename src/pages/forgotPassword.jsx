import React, { Component } from "react";
import ForgotPasswordInput from "../components/forgotPasswordInput";
class ForgotPassword extends Component {
  render() {
    return (
      <div
        style={{
          width: "433px",
          height: "347px",
          margin: "70px auto",
          border: "1px solid gray",
          borderRadius: "15px",
          padding: "30px",
          paddingTop: "10px",
          backgroundColor: "white"
        }}
      >
        <div style={{ textAlign: "center", color: "black" }}>
          <font color="green">
            <h1>
              <b>Fundoo</b>
            </h1>
          </font>
          <h2>
            <b>Fundoo Account Recovery</b>
          </h2>
        </div>
        <div>
          <ForgotPasswordInput />
        </div>
      </div>
    );
  }
}
export default ForgotPassword;
