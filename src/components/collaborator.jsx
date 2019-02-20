import React, { Component } from 'react';
import { IconButton} from '@material-ui/core';
class CollaboratorComponent extends Component {
    constructor() {
        super();
        this.state = {
            open:false
        }
        this.openCollaborator=this.openCollaborator.bind(this);
    }

    openCollaborator(event,note,key){

        this.setState({
            open:!this.state.open
        })

    }
    closePop(){
        this.setState({open:!this.state.open})
    }
    render() {
        return (
            <div>
              
                <IconButton onClick={(event)=>this.openCollaborator(event,this.props.show,this.props.index)}>
                    <img src={require('../assets/images/collaborator.svg')}
                        alt="" />
                </IconButton>
              
            </div>

        );
    }
}
export default CollaboratorComponent;