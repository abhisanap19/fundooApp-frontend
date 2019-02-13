import React, { Component } from "react";
import ResetPasswordInput from "../components/resetPasswordInput";
class ResetPassword extends Component {
  render() {
    return (
      <div
        style={{
          width: "423px",
          height: "391px",
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
          <font size="2">
            <h1>
              <b>Reset Password</b>
            </h1>
          </font>
        </div>
        <div>
          <ResetPasswordInput />
        </div>
      </div>
    );
  }
}
export default ResetPassword;
