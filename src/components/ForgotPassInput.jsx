// import React, { Component } from 'react';
// import { TextField } from '@material-ui/core';
// import { Button } from '@material-ui/core';
// import { userForgotPassword } from '../services/user_service';


// class ForgotPassInput extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: ''
//         }
//         this.handleUsername = this.handleUsername.bind(this);
//     }

//     handleUsername(evt) {
//         this.setState({ username: evt.target.value });
//     }
//     validate(evt) {
//         evt.preventDefault();
//         if (!this.state.username) {
//             alert("Username cannot be empty");
//         }
//         else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
//             alert("Invalid Username! eg:- abc@gmail.com")
//         }
//         else {
//             userForgotPassword(this.state.username);
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <TextField
//                     style={{ width: "345px", marginTop: "20px" }}
//                     label="Enter your Email ID"
//                     name="Email"
//                     type="email"
//                     value={this.state.username}
//                     onChange={this.handleUsername}
//                     required
//                 />

//                 <Button
//                     variant="contained"
//                     type="submit"
//                     onClick={this.validate.bind(this)}
//                     color="primary"
//                     style={{ width: "345px", height: "50px", fontSize: "18px", marginTop: "30px", marginLeft: "3px" }} >
//                     Change Password
//             </Button>
//             </div>

//         )
//     }
// }
// export default ForgotPassInput