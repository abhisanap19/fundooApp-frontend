import React, { Component } from 'react';
import { Snackbar, Button } from '@material-ui/core';
class SnackBar extends Component{
    constructor(){
        super();
        this.state={
            open:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({open:!this.state.open})    
    }
    render(){
        return(<Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={this.state.open}
            message={<span>{this.props.error}</span>}
            action={[
                <Button  key="ok"
                onClick={this.handleClick} 
                style={{color:"#F1C40F"}} size="small" >OK</Button>

            ]}
            />
            )
    }
}
export default SnackBar;