import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { userLogin }  from "../services/user_service";

class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toast: false
    };
  }
  handleusernameChange = event => {
    const username = event.target.value;
    this.setState({ username: username });
  };
  handlepasswordChange = event => {
    const password = event.target.value;
    this.setState({ password: password });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username === "") {
      toast("username cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.password === "") {
      toast("Password cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)
    ) {
      toast("Invalid username", { position: toast.POSITION.BOTTOM_CENTER });
    } else if (this.state.password.length < 8) {
      toast("Password must be of atleast 8 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      event.preventDefault();
      var data = {
        username: this.state.username,
        password: this.state.password
      };
      userLogin(data);
    }
  };
  register = e => {
    e.preventDefault();
    this.props.history.push("/registration");
  };
  forgetPassword = e => {
    e.preventDefault();
    this.props.history.push("/forgotPassword");
  };
  render() {
    return (
      <div>
        <div>
          <div className="username">
            <TextField
              id="outlined-name"
              label="Email"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleusernameChange}
              margin="normal"
              variant="outlined"
            />
          </div>
        
          <div className="loginPass">
            <TextField
              id="outlined-password-input"
              label="Enter your Password"
              type="password"
              value={this.state.password}
              onChange={this.handlepasswordChange}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div className="signIn1">
            <Button
             id="signIn2"
              type="submit"
              onClick={this.handleSubmit}
            >
              <b>SIGN IN</b>
            </Button>

            <div
             className="createAcc1"
            >
              <Button
               id="createAcc1"
                type="submit"
                onClick={this.register}
              >
                <b>CREATE ACCOUNT</b>
              </Button>
              <Button
                id="createAcc1"
                type="submit"
                onClick={this.forgetPassword}
              >
                <b>FORGOT PASSWORD?</b>
              </Button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default withRouter(LoginInput);
