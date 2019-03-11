import React,{Component} from 'react';
import GoogleLogin from 'react-google-login';
class GoogleLoginPage extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <GoogleLogin
                clientId="1094699433519-rr0dvmmve31osuv5nj4rakt4qcpgbr3j.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            /> 
        )
    }
}
export default GoogleLoginPage;
