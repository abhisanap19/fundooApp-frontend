import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import RegisterInput from "../components/registerInput";
class Register extends Component{
    render(){
        return (
            <div className="container">
                <Card className="form">
                    <div className="title1">
                        <font color="green"><h1><b>Fundoo</b></h1></font>
                        <h1><b>Create Your Fundoo Account</b></h1>
                    </div>
                    <RegisterInput/>
                </Card>
            </div>
        );
    }
}
export default Register;