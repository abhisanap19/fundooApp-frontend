import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/cards";
//import { Button } from "@material-ui/core";
class Complex extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{ backgroundColor: "white", color: "black" }}>
                </div>
                <div>
                    <Card />
                    
                </div>
            </div>
        );
    }
}
export default withRouter(Complex);