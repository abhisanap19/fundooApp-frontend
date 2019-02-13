import React, { Component } from "react";
import VerifyEmailInput from "../components/verifyEmailInput";
class VerifyEmail extends Component {
    render() {
        return (
            <div style={{ width: "700px", margin: "70px auto", border: "1px solid black",borderRadius: "15px", padding: "30px", paddingTop: "10px", backgroundColor: "white" }}>
                <div style={{ textAlign: "center", color: "black" }}>
                    <h1><b>Email Verified successfully</b></h1>
                </div>
                <div>
                    <VerifyEmailInput/>
                </div>
            </div>
        );

    }
}
export default VerifyEmail;