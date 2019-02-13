import React, { Component } from "react";
import RegisterInput from "../components/registerInput";
class Register extends Component{
    render(){
        return (
            <div className="container">
                <form>
                    <div style={{padding:"19px",paddingLeft:"43px"}}>
                        <font color="green"><h1><b>Fundoo</b></h1></font>
                        <h1><b>Create Your Fundoo Account</b></h1>
                    </div>
                    <RegisterInput/>
                </form>
            </div>
        );
    }
}
export default Register;