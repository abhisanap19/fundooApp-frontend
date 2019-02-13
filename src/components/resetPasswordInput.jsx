import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import { resetPassword } from "../services/userService";
import TextField from "@material-ui/core/TextField";
class ResetPasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      newpassword: "",
      toast: false
    };
  }
  handlepasswordChange = event => {
    const password = event.target.value;
    this.setState({ password: password });
  };

  handlenewpasswordChange = event => {
    const newpassword = event.target.value;
    this.setState({ newpassword: newpassword });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password === "") {
      toast("Password cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.newpassword === "") {
      toast("Confirm Password cannot be empty", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.password.length < 8) {
      toast("Password must be of atleast 8 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.newpassword.length < 8) {
      toast("Confirm Password must be of atleast 8 characters long", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else if (this.state.password !== this.state.newpassword) {
      toast("Password and Confirm password must be same", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      event.preventDefault();
      let current_url = window.location.pathname;
      let verify_user_token = current_url.substr(15);
      resetPassword(this.state.password, verify_user_token);
    }
  };

  render() {
    return (
      <div>
        <div>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "47px",
              marginRight: "178px"
            }}
          >
            <TextField
              label="Enter new Password"
              type="password"
              value={this.state.password}
              onChange={this.handlepasswordChange}
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
              marginLeft: "47px",
              marginRight: "178px"
            }}
          >
            <TextField
              label="Confirm new Password"
              type="password"
              value={this.state.newpassword}
              onChange={this.handlenewpasswordChange}
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
                marginLeft: "131px",
                border: "none",
                cursor: "pointer",
                width: "38%",
                boxAlign: "center"
              }}
              type="submit"
              onClick={this.handleSubmit}
            >
              <b>Reset</b>
            </Button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(ResetPasswordInput);
