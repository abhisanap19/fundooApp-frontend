import React, { Component } from 'react';
import notePerson from '../assests/images/addPerson.svg';
import { Avatar, Tooltip, Dialog, DialogTitle, createMuiTheme, Button, Divider, Input, MuiThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
    overrides: {
        MuiDialog: {
            paperWidthSm: {
                width: "600px",
                margin: "0px",
                borderBottomLeftRadius: "20px",
                borderTopRightRadius: "20px",
                overflowY: "hidden"
            }
        },
    },
    typography: {
        useNextVariants: true,
    },
})
class Collaborator extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            collabs: [],
            collabSelection: [],
            inputCollab: "",
            collabSuggestions: []
        }
       
    }




    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Tooltip title="Collaborator">
                    <img src={notePerson} alt="Add Person icon"
                        onClick={this.handleColab}
                    />

                </Tooltip>

                {this.state.open ?

                    <Dialog id="colabDialog" open={this.state.open}>

                        <DialogTitle
                            style={{ fontSize: "25px", fontFamily: "georgia", fontWeight: "700" }}
                        >
                            Collaborators</DialogTitle>
                        <Divider />
                        {this.props.collabs.length === 0 ?
                            <div style={{ display: "flex", flexDirection: "row", paddingLeft: "10px", paddingTop: "10px", width: "530px" }}>
                               
                                <div style={{ display: "flex", flexDirection: "column", paddingLeft: "18px", paddingTop: "8px" }}>

                                    <div style={{ fontSize: "13px", fontFamily: "'Roboto',arial,sans-serif", fontWeight: "700" }}>
                                       
                                    </div>

                                    <div style={{ fontSize: "13px", fontFamily: "'Roboto',arial,sans-serif", color: "gray" }}>
                                    
                                    </div>

                                </div>
                            </div>
                            : null}
                       
                        <div style={{ paddingLeft: "10px", paddingTop: "12px", paddingBottom: "10px", display: "flex", flexDirection: "row" }}>
                            <Avatar style={{ backgroundColor: "transparent", border: "1px solid grey" }}>
                                <img src={notePerson} alt="colabIcon" />
                            </Avatar>
                            <Input
                                placeholder="Person or email to share with"
                                disableUnderline={true}
                                autoComplete="on"
                                style={{ fontSize: "13px", width: "400px", marginLeft: "18px" }}
                                value={this.state.inputCollab}
                                onChange={this.handleInputCollab}
                            />
                        </div>

                        <div style={{ display: "flex", paddingBottom: "10px", paddingTop: "10px", backgroundColor: "#EEEEEE" }}>

                            <div style={{ marginLeft: "330px" }} >
                                <Button className="doneButton" onClick={this.handleColab}>Cancel</Button>
                            </div>

                            <div style={{ marginLeft: "22px" }} >
                                <Button className="doneButton" onClick={this.saveCollab}>Save</Button>
                            </div>
                        </div>

                    </Dialog>
                    :
                    null}
            </MuiThemeProvider>
        )
    }
}
export default Collaborator;