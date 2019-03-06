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
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      toast: false
    };
    this.baseState = this.state;
  }

  handlefirstnameChange = event => {
    const firstname = event.target.value;
    this.setState({ firstname: firstname });
  };
  handlelastnameChange = event => {
    const lastname = event.target.value;
    this.setState({ lastname: lastname });
  };
  handleusernameChange = event => {
    const username = event.target.value;
    this.setState({ username: username });
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
    if (this.state.firstname === "") {
      toast("First name cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.lastname === "") {
      toast("Last name cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.username === "") {
      toast("Email cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)
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
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
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
            id=""
            label="First Name"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handlefirstnameChange}
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Last Name"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handlelastnameChange}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className="remail">
          <TextField
            label="Email"
            type="email"
            value={this.state.username}
            onChange={this.handleusernameChange}
            margin="normal"
            variant="outlined"
          />
        </div>

        <div className="rpassword">
          <TextField
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
