import React, { Component } from "react";
import ResetPasswordInput from "../components/resetPasswordInput";
class ResetPassword extends Component {
  render() {
    return (
      <div className="reset" >
        <div className="resettitle">
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
