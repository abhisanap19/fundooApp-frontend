import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import { userRegister } from "../services/user_service";

class RegisterInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      toast: false
    };
    this.baseState = this.state;
  }

  handlefirstNameChange = event => {
    const firstName = event.target.value;
    this.setState({ firstName: firstName });
  };
  handlelastNameChange = event => {
    const lastName = event.target.value;
    this.setState({ lastName: lastName });
  };
  handleuserNameChange = event => {
    const userName = event.target.value;
    this.setState({ userName: userName });
  };
  handlepasswordChange = event => {
    const password = event.target.value;
    this.setState({ password: password });
  };
  handleconfirmPasswordChange = event => {
    const confirmPassword = event.target.value;
    this.setState({ confirmPassword: confirmPassword });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.firstName === "") {
      toast("First name cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.lastName === "") {
      toast("Last name cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.userName === "") {
      toast("Email cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.userName)
    ) {
      toast("Invalid Email", { position: toast.POSITION.BOTTOM_CENTER });
    } else if (this.state.password === "") {
      toast("Password cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.password.length < 8) {
      toast("Password must be of atleast 8 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.confirmPassword === "") {
      toast("Confirm Password cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      toast("Password and confirm password must be same", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      event.preventDefault();
      var data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        password: this.state.password
      };
      userRegister(data);
    }
  };

  resetForm = event => {
    this.setState(this.baseState);
    event.preventDefault();
    this.props.history.push("/registration");
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    return (
      <div >
        <div className="flname">
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handlefirstNameChange}
            margin="normal"
            variant="outlined"
          />

          <TextField
          id="lastName"
            label="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handlelastNameChange}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className="remail">
          <TextField
          id="userName"
            label="Email"
            type="email"
            value={this.state.userName}
            onChange={this.handleuserNameChange}
            margin="normal"
            variant="outlined"
          />
        </div>

        <div className="rpassword">
          <TextField
          id="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlepasswordChange}
            margin="normal"
            variant="outlined"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          <TextField
          id="confirmPassword"
            label="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleconfirmPasswordChange}
            margin="normal"
            variant="outlined"
          />
        </div>

        <div className="rbutton">
          <Button id="Button" onClick={this.handleSubmit}>
            REGISTER
          </Button>
          <Button id="Button" onClick={this.resetForm}>
            RESET
          </Button>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default withRouter(RegisterInput);
