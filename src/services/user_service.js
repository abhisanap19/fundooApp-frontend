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
            toast('User with this userName already exists!!');
        });
}

function userLogin(data) {
    axios.post('/login',data)
        .then(function (response) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.userName);
            //localStorage.setItem('emailId', response.data.userName);
            console.log("profilepice",response.data);
            localStorage.setItem("profilePic",response.data.profilePic); 

            toast('Successfull Login!')
            localStorage.setItem('token1', true);
            window.location.href = 'dashboard'
        })
        .catch(function (err) {
            console.log(err);
            toast('Invalid userName or Password');
            //window.location.href = '/login';

        });
}



function sendMessageToUser(deviceId, message) {
  axios({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': 'key=AAAA_uErvi8:APA91bGPe2n5FUJYde652-OaMNLpiU47XI0x4HtGOt9U9BKHUxwb-jOdJuCdSJVyTA-sEm_YiHq4VP4F_NKs9mtoCXdE83uZKxFNLCm9u1iso9gSYbCI1Xygeb0kNwafj96RO045AVlE'
    },
    body: JSON.stringify(
      { "data": {
        "message": message
      },
        "to" : "cZwc8xCD2ZA:APA91bHAo6c4_Sx-9FK7DzIypZQv-gJEqbrpYrED2PnQ9nRUCSmu4slPbR1uIz0BKeCOu1c8RGr0b9MMTJelyfQUoT5mhw7mdraJlVpLqLEuiKNrbUzc2MtJuaeqgWyPH1SNkGM5vN86"
      }
    )
  }, function(error, response, body) {
    if (error) { 
      console.error(error, response, body); 
    }
    else if (response.statusCode >= 400) { 
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body); 
    }
    else {
      console.log('Done!')
    }
  });

sendMessageToUser(
  "d7x...KJQ",
  { message: 'Hello puf'}
);

};


function forgotPassword(userName) {
    axios.post('/forgotpasswd',
    {
        'userName': userName, 
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


function uploadProfilePic(url, data) {
    return axios(url, {
      method: "POST",
      headers: {
        "access-token": localStorage.getItem("token")
      },
      data: data
    })
  }

export{
    userRegister,
    userLogin,
    forgotPassword,
    resetPassword,
    uploadProfilePic,
    sendMessageToUser
}



