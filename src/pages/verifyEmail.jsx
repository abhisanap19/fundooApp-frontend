import React, { Component } from "react";
import VerifyEmailInput from "../components/verifyEmailInput";
class VerifyEmail extends Component {
    render() {
        return (
            <div className="verifyEmail">
                <div className="verifyTitle">
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