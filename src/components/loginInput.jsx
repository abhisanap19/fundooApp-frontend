import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { userLogin }  from "../services/userService";

class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      toast: false
    };
  }
  handleuserNameChange = event => {
    const userName = event.target.value;
    this.setState({ userName: userName });
  };
  handlepasswordChange = event => {
    const password = event.target.value;
    this.setState({ password: password });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.userName === "") {
      toast("userName cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.password === "") {
      toast("Password cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.userName)
    ) {
      toast("Invalid userName", { position: toast.POSITION.BOTTOM_CENTER });
    } else if (this.state.password.length < 8) {
      toast("Password must be of atleast 8 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      userLogin(this.state.userName, this.state.password);
            this.setState({userName:''})
            this.setState({password:''})
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
          <div
            style={{
              display: "flex",
              width: "80%",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "49px",
              marginRight: "178px"
            }}
          >
            <TextField
              id="outlined-name"
              label="Email"
              name="userName"
              type="text"
              value={this.state.userName}
              onChange={this.handleuserNameChange}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "49px",
              marginRight: "178px"
            }}
          >
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

          <div style={{ paddingTop: "10px" }}>
            <Button
              style={{
                backgroundColor: "Royalblue",
                color: "white",
                padding: "10px 20px",
                margin: "19px auto",
                marginLeft: "161px",
                border: "none",
                cursor: "pointer",
                width: "30%",
                boxAlign: "center"
              }}
              type="submit"
              onClick={this.handleSubmit}
            >
              <b>SIGN IN</b>
            </Button>

            <div
              style={{
                display: "flex",
                padding: "50px",
                paddingTop: "20px",
                justifyContent: "space-between"
              }}
            >
              <Button
                style={{ backgroundColor: "white", color: "RoyalBlue" }}
                type="submit"
                onClick={this.register}
              >
                <b>CREATE ACCOUNT</b>
              </Button>
              <Button
                style={{ backgroundColor: "white", color: "RoyalBlue" }}
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
