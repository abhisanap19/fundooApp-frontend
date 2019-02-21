import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import DashboardInput from "../components/dashboardInput";

//import { Button } from "@material-ui/core";
class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container1" >
                </div>
                <div>
                    <DashboardInput props={this.props}/> 
                </div>
            </div>
        );
    }
}
export default withRouter(Dashboard);