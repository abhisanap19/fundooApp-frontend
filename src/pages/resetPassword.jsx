import React, { Component } from "react";
import ResetPasswordInput from "../components/resetPasswordInput";
import { Card } from "@material-ui/core";
class ResetPassword extends Component {
  render() {
    return (
      <Card className="reset" >
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
      </Card>
    );
  }
}
export default ResetPassword;
