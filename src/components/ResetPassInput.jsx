// import React, { Component } from 'react';
// import { TextField } from '@material-ui/core';
// import { Button } from '@material-ui/core';
// import { userResetPassword } from '../services/user_service';
// class ResetPasswordInput extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             password: '',
//             con_password: ''
//         }
//         this.handlePassword = this.handlePassword.bind(this);
//         this.handleCon_Password = this.handleCon_Password.bind(this);
//     }

//     handlePassword(evt) {
//         this.setState({ password: evt.target.value });
//     }
//     handleCon_Password(evt) {
//         this.setState({ con_password: evt.target.value });
//     }

//     validate(evt) {
//         evt.preventDefault();
//         if (!this.state.password) {
//             alert("Password cannot be empty");
//         }
//         else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(this.state.password)) {
//             alert(`Password must be eight characters or longer
//                     Password must contain atleast one Upper case letter
//                     Password must contain atleast one Lower case letter
//                     Password must contain atleast one special letter
//                     Password must contain atleast one number`
//             )
//         }
//         else if (!this.state.con_password) {
//             alert("Please re-enter password to confirm")
//         }
//         else if (this.state.password !== this.state.con_password) {
//             alert("Password and confirm password does not match")
//         }
//         else {
//             userResetPassword(this.state.password);
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <TextField
//                     style={{ width: "345px", marginTop: "20px" }}
//                     placeholder="Enter your new password"
//                     name="password"
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.handlePassword}
//                     required
//                 /><p />
//                 <TextField
//                     style={{ width: "345px", marginTop: "20px" }}
//                     placeholder="Confirm your password"
//                     name="password"
//                     type="password"
//                     value={this.state.con_password}
//                     onChange={this.handleCon_Password}
//                     required
//                 /><p />

//                 <Button
//                     variant="contained"
//                     type="submit"
//                     color="primary"
//                     onClick={this.validate.bind(this)}
//                     style={{ width: "345px", height: "50px", fontSize: "20px", marginTop: "20px", marginLeft: "3px" }} >
//                     <strong />Change Password
//         </Button><p />
//             </div>
//         )
//     }
// }
// export default ResetPasswordInput;