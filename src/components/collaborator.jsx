import React, { Component } from 'react';
import notePerson from '../assests/images/addPerson.svg';
import {  Tooltip} from '@material-ui/core';
class Collaborator extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            
        }
      
    }
  
    render() {

        return (
        
                <Tooltip title="Collaborator">
                    <img src={notePerson} alt="Add Person icon"
                    />
                </Tooltip>
            
        )
    }
}
export default Collaborator;