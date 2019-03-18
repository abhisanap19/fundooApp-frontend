import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { forgotPassword } from "../services/user_service";
class ForgotPasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      toast: false
    };
  }
  handleuserNameChange = event => {
    const userName = event.target.value;
    this.setState({ userName: userName });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.userName === "") {
      toast("Email cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.userName)
    ) {
      toast("Invalid Email", { position: toast.POSITION.BOTTOM_CENTER });
    } else {
     
      forgotPassword(this.state.userName);
    }
  };
  register = e => {
    e.preventDefault();
    this.props.history.push("/registration");
  };

  render() {
    return (
      <div>
        <div>
          <div className="femail">
            <TextField
              id="outlined-email-input"
              label="Enter your Email"
              type="text"
              value={this.state.userName}
              onChange={this.handleuserNameChange}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div className="fsubmit">
            <Button id="fButton" type="submit" onClick={this.handleSubmit}>
              <b>Submit</b>
            </Button>
            <Button id="fCreate" type="submit" onClick={this.register}>
              <b>CREATE ACCOUNT</b>
            </Button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(ForgotPasswordInput);
