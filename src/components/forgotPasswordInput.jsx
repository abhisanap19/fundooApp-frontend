import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { forgotPassword }  from "../services/userService";
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
       // console.log('31--in component--username is:',this.state.username);
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
          <div
            style={{
              display: "flex",
              width: "80%",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "39px",
              marginRight: "178px"
            }}
          >
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

          <div style={{ paddingTop: "10px" }}>
            <Button
              style={{
                backgroundColor: "Royalblue",
                color: "white",
                padding: "10px 20px",
                margin: "19px auto",
                marginLeft: "125px",
                border: "none",
                cursor: "pointer",
                width: "40%",
                boxAlign: "center"
              }}
              type="submit"
              onClick={this.handleSubmit}
            >
              <b>Submit</b>
            </Button>
            <Button
              style={{
                backgroundColor: "white",
                color: "RoyalBlue",
                padding: "10px 20px",
                margin: "19px auto",
                marginLeft: "101px",
                border: "none",
                cursor: "pointer",
                width: "50%",
                boxAlign: "center"
              }}
              type="submit"
              onClick={this.register}
            >
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
