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
            //localStorage.setItem('emailId', response.data.username);
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

function forgotPassword(username) {
    axios.post('/forgotpasswd',
    {
        'username': username, 
    })
    .then(function (response) {
        console.log(' response is--',response.data);
        const token1 = response.data;
        const token2 = token1.substring(34);
        localStorage.setItem('verifyUserToken', token2);
        toast(' check your email..')
    })
    .catch(function (err) {
        console.log(err);
        toast('User Not Found..');
    });
}


function resetPassword(password,token) {   
    axios.post(`/resetpswd/${token}`,{'password': password},{
     headers: {
        'token': token
    }})
    .then(function (response) {
        console.log(response);
        toast('Password changed successfully');
            window.location.href = '/login'
    })
    .catch(function (err) {
        console.log(err);
        toast('Please Try Again..');
    });
}

export {
    userRegister,
    userLogin,
    forgotPassword,
    resetPassword
}