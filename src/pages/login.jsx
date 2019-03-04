import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import LoginInput from "../components/loginInput";
class Login extends Component {
  render() {
    return (
      <Card className="login">
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
      </Card>
    );
  
  }
}
export default Login;
