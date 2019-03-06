// import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField';
// import { Button } from '@material-ui/core';
// import { userRegister } from '../services/user_service'
// import { Link } from 'react-router-dom'
// class SignInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstname: '',
//             lastname: '',
//             username: '',
//             password: '',
//             con_pswd: ''
//         }

//         this.handleFirstName = this.handleFirstName.bind(this);
//         this.handleLastName = this.handleLastName.bind(this);
//         this.handleUserName = this.handleUserName.bind(this);
//         this.handlePassword = this.handlePassword.bind(this);
//         this.handleCon_pswd = this.handleCon_pswd.bind(this);

//     }

//     handleFirstName(evt) {
//         this.setState({ firstname: evt.target.value });
//     }
//     handleLastName(evt) {
//         this.setState({ lastname: evt.target.value });
//     }
//     handleUserName(evt) {
//         this.setState({ username: evt.target.value });
//     }
//     handlePassword(evt) {
//         this.setState({ password: evt.target.value });
//     }
//     handleCon_pswd(evt) {
//         this.setState({ con_pswd: evt.target.value });
//     }
//     validate(evt) {
//         evt.preventDefault();
//         if (!this.state.firstname) {
//             alert('First name cannot be empty')
//         }
//         else if (!/^[A-Za-z]+$/.test(this.state.firstname)) {
//             alert('First name must contain alphabets only')
//         }
//         else if (!this.state.lastname) {
//             alert('Last name cannot be empty')
//         }
//         else if (!/^[A-Za-z]+$/.test(this.state.lastname)) {
//             alert('Last name must contain only alphabets')
//         }
//         else if (!this.state.username) {
//             alert("Username cannot be empty");
//         }
//         else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.username)) {
//             alert("Invalid Username! eg:- abc@gmail.com")
//         }
//         else if (!this.state.password) {
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
//         else if (!this.state.con_pswd) {
//             alert("Please re-enter password to confirm")
//         }
//         else if (this.state.password !== this.state.con_pswd) {
//             alert("Password and confirm password does not match")
//         }
//         else {
//             userRegister(this.state.firstname, this.state.lastname, this.state.username,
//                 this.state.password);

//         }
//     }

//     render() {
//         return (
//             <form >
//                 <TextField
//                     style={{ width: "345px", marginLeft: "12px" }}
//                     placeholder="Enter your first name"
//                     name="name"
//                     type="text"
//                     value={this.state.firstname}
//                     onChange={this.handleFirstName}
//                     required
//                 /><p />

//                 <TextField
//                     style={{ width: "345px", marginLeft: "12px" }}
//                     placeholder="Enter your last name"
//                     name="name"
//                     type="text"
//                     value={this.state.lastname}
//                     onChange={this.handleLastName}
//                     required
//                 /><p />

//                 <TextField
//                     style={{ width: "345px", marginLeft: "12px" }}
//                     placeholder="Enter your Email ID"
//                     name="Email"
//                     type="email"
//                     value={this.state.username}
//                     onChange={this.handleUserName}
//                     required
//                 /><p />

//                 <TextField
//                     style={{ width: "345px", marginLeft: "12px" }}
//                     placeholder="Enter your password"
//                     name="password"
//                     type="password"
//                     value={this.state.password}
//                     onChange={this.handlePassword}
//                     required
//                 /><p />

//                 <TextField
//                     style={{ width: "345px", marginLeft: "12px" }}
//                     placeholder="Confirm your password"
//                     name="password"
//                     type="password"
//                     value={this.state.con_pswd}
//                     onChange={this.handleCon_pswd}
//                     required
//                 /><p />

//                 <Button
//                     variant="contained"
//                     type="submit"
//                     onClick={this.validate.bind(this)}
//                     color="primary"
//                     style={{ width: "150px", height: "35px", fontSize: "18px", marginTop: "15px", marginLeft: "18px" }} >
//                     <b />Sign In
//                 </Button>

//                 <h5>Already Registered?</h5>
//                 <Link to="/">Sign In</Link>


//             </form>



//         )
//     }
// }
// export default SignInput;