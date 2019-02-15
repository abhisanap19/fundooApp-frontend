import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import login from './pages/login';
import register from './pages/register';
import dashboard from './pages/dashboard';
import forgotPassword from './pages/forgotPassword';
import resetPassword from './pages/resetPassword';
import VerifyEmail from './pages/verifyEmail';
//import Cards from './pages/complex';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path="/login" component={login}></Route>
            <Route path="/registration" component={register}></Route>
            <Route path="/dashboard" component={dashboard}></Route>
            <Route path="/forgotPassword" component={forgotPassword}></Route>
            <Route path="/resetpassword" component={resetPassword}></Route>
            <Route path="/verifyEmail" component={VerifyEmail}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

