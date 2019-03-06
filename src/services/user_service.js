import axios from 'axios';
import {  toast } from "react-toastify";
function userRegister(data) {
    axios.post('/createAccount',data)
        .then(function (response) {
            console.log(response);
            toast('Registered Successfully!!');
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            toast('User with this Username already exists!!');
        });
}
function userLogin(data) {
    axios.post('/login',data)
        .then(function (response) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            //localStorage.setItem('emailId', username);
            console.log("profilepice",response.data);
            localStorage.setItem("profilePic",response.data.profilePic); 

            toast('Successfull Login!')
            localStorage.setItem('token1', true);
            window.location.href = 'dashboard'
        })
        .catch(function (err) {
            console.log(err);

            toast('Invalid Username or Password');
            window.location.href = '/login';

        });
}

function userForgotPassword(username) {

    axios.post('/forgotpasswd', {
        username: username
    })
        .then(function (response) {
            localStorage.setItem('forgotToken', response.data);
            toast('e-Mail has been sent to your respective mail to reset your password with further instructions ')
            window.location.href = '/';
        })
        .catch(function (err) {
            toast('Invalid Username');
            window.location.href = 'forgotpswd'
        })
}

function userResetPassword(password) {

    axios('/resetpswd', {
        method: "POST",
        headers: {
            "access-token": window.location.pathname.substr(11)
        },
        data: {
            password: password
        }

    })
        .then(function (response) {
            // localStorage.setItem('resetToken',response.data);  
            toast(window.location.pathname.substr(11));
            window.location.href = '/';

        })
        .catch(function (err) {
            toast('Invalid Data');
            window.location.href = 'resetpswd'

        });
}
function uploadProfilePic(url, data) {
    return axios(url, {
      method: "PUT",
      headers: {
        "access-token": localStorage.getItem("token")
      },
      data: data
    })
  }

export {
    userRegister,
    userLogin,
    userForgotPassword,
    userResetPassword,
    uploadProfilePic
}