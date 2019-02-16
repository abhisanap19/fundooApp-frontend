import React, { Component } from "react";
import { Card } from "@material-ui/core";
import VerifyEmailInput from "../components/verifyEmailInput";
class VerifyEmail extends Component {
    render() {
        return (
            <Card className="verifyEmail">
                <div className="verifyTitle">
                    <h1><b>Email Verified successfully</b></h1>
                </div>
                <div>
                    <VerifyEmailInput/>
                </div>
            </Card>
        );

    }
}
export default VerifyEmail;