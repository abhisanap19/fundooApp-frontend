import React, { Component } from "react";
import ForgotPasswordInput from "../components/forgotPasswordInput";
class ForgotPassword extends Component {
  render() {
    return (
      <div
       className="forgot"
      >
        <div className="forgottitle">
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
