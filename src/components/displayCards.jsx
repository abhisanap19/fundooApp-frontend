import React, { Component } from 'react';
import { Card, InputBase,Toolbar } from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
class DisplayCard extends Component {
    constructor() {
        super();
        this.state = {
           
            open: false,
            label: [],
            reminder:""
        }
    
        this.handleReminder = this.handleReminder.bind(this);
        this.openPop = this.openPop.bind(this);
        this.handleLabel = this.handleLabel.bind(this);
    }

  
    openPop() {
        this.setState({
            open: !this.state.open
        })
    }
   
    
   
    handleReminder(rem) {
       
        this.setState({
            reminder: rem
        })
    }
   
    

    render() {

        const stl = this.props.gridNote ?  'Showlist' :'ShowCard'
     

        return (


            <Card className={stl}
                style={{ backgroundColor: this.props.show.Colors }}>


                <div className="titleAndPin">
                    <div>
                        <InputBase className="titleNote"
                            readOnly={this.props.show.Title}
                            defaultValue={this.props.show.Title}
                            onChange={(event) => this.setState({ title: event.target.value })}
                            onClick={(event) => this.editNote(event)}
                        >

                        </InputBase>
                  
                        </div>
                      
                </div>
                <div className="inp">
                    <InputBase className="in"
                        readOnly={this.props.show.Description}
                        defaultValue={this.props.show.Description}
                        type={File}
                        onChange={(event) => this.setState({ description: event.target.value })}
                        multiline={this.state.nextLine}
                    >
                    </InputBase>
                </div>
              

                  

                
                            <Toolbar className="CardToolbar">
                                <div>
                                    <ReminderComponent r={this.handleReminder}
                                        note={this.props.show}
                                        index={this.props.index} />
                                </div>
                                <div>
                                    <CollaboratorComponent show={this.props.show}
                                        index={this.props.index} />
                                </div>
                                <div>
                                    <ColorComponent clr={this.openPop}
                                        note={this.props.show}
                                        index={this.props.index} />
                                </div>
                                <div>
                                    <ImageComponent />
                                </div>
                                <div>
                                    <ArchiveComponent
                                        show={this.props.show}
                                        index={this.props.index} />
                                </div>

                        
                            </Toolbar>
                        )}
            </Card>
        );
    }
}
export default DisplayCard;