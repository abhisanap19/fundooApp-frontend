// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import { TextField } from '@material-ui/core';
// import { Button } from '@material-ui/core';
// import { userLogin } from '../services/user_service'
// //import GoogleLoginPage from './googleLogin';

// class LoginInput extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             password: ''
//         }
//         this.handleUsername = this.handleUsername.bind(this);
//         this.handlePassword = this.handlePassword.bind(this);
//     }
//     handleUsername(evt) {
//         this.setState({ username: evt.target.value });
//     }
//     handlePassword(evt) {
//         this.setState({ password: evt.target.value });
//     }

//     validate(evt) {
//         evt.preventDefault();
//         if (!this.state.username) {
//             alert("Username cannot be empty");
//         }
//         else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
//             alert("Invalid Username! eg:- abc@gmail.com")
//         }
//         else if (!this.state.password) {
//             alert("Password cannot be empty");
//         }
//         else if (this.state.password.length < 8) {
//             alert("Password must be eight characters or longer ")
//         }
//         else {
//             userLogin(this.state.username, this.state.password);
//         }
//     }

//     render() {

//         return (
//             <div>
//                 <TextField
//                     style={{ width: "345px", marginTop: "20px" }}
//                     placeholder="Enter your Email ID"
//                     name="Email"
//                     type="email"
//                     value={this.state.username}
//                     onChange={this.handleUsername}
//                     required
//                 /><p />

//                 <TextField

//                     style={{ width: "345px", marginTop: "20px" }}
//                     placeholder="Enter your password"
//                     name="password"
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.handlePassword}
//                     required
//                 /><p />

//                 <Button
//                     variant="contained"
//                     type="submit"
//                     onClick={this.validate.bind(this)}
//                     color="primary"
//                     style={{ width: "345px", height: "50px", fontSize: "20px", marginTop: "20px", marginLeft: "3px", marginBottom: "20px" }} >
//                     <strong />Log In
//                 </Button><p />

//                 <div>
//                     <GoogleLoginPage />
//                 </div>
//                 <Link to='/signup' style={{ textDecoration: "none", marginLeft: "10px", marginTop: "50px" }}>Create Account</Link>

//                 <Link to="/forgotpswd" style={{ textDecoration: "none", marginLeft: "120px", marginTop: "50px" }}>Forgot Password?</Link>


//             </div>

//         )
//     }
// }
// export default LoginInput;