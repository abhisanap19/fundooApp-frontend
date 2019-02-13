import axios from 'axios';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function userRegister(firstName, lastName, userName, password) {
    axios.post('/registration',
        {
            firstName: firstName,
            lastName: lastName,
            email: userName,
            password: password
        })
        .then(function (response) {
            const token1 = response.data;
            const token2 = token1.substring(34)
            localStorage.setItem('verifyToken', token2);
            toast('Please check email to verify your email');  
        })
        .catch(function (err) {
            console.log(err);
            toast('User with this Username already exists!!');
        });
}

function checkToken(token){
    console.log('inside check token---',token);
    axios.post(`/verifyEmail/${token}`,"",{ headers: {
        'token': token
    }})
        .then(function (response) {
            toast('User verified successfully');
             window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            toast('User is not verified.. Please verify email!!');
        });
}

function userLogin(userName, password) {
    axios.post('/login',
        {
            email: userName,
            password: password
        })
        .then(function (response) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', userName);
            
            window.location.href = '/dashboard'
        })
        .catch(function (err) {
            console.log(err);
            toast('Login Unsuccessful.. Please Try Again!!');
        });
}

function forgotPassword(userName) {
    axios.post('/verifyUser',
    {
        'email': userName, 
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
    console.log('inside reset paswd password--',password);
    console.log('inside reset paswd token--',token);
    
    axios.post(`/resetpassword/${token}`,{'password': password},{
     headers: {
        'token': token
    }})
    .then(function (response) {
        toast('Password changed successfully');
            window.location.href = '/login'
    })
    .catch(function (err) {
        console.log(err);
        toast('Please Try Again..');
    });
}

export { userRegister, userLogin, forgotPassword, checkToken, resetPassword }