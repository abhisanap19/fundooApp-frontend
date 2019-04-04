import React, { Component } from 'react';
import { Dialog, TextField, Button, createMuiTheme, MuiThemeProvider, Divider, Tooltip } from '@material-ui/core';
import { addLabel, deleteLabel, updateLabel } from '../services/labelServices';
import SnackBar from './snackBar';

let displayErr = "";
const theme = createMuiTheme({
    overrides: {
        MuiDialog: {
            paperWidthSm: {
                width: "300px",
                borderBottomLeftRadius: "0px",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px"
            },
        },
        MuiDialogTitle: {
            root: {
                padding: "0px"
            }
        },
    },
    typography: {
        useNextVariants: true,
    },
})

class EditLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "",
            labelID: "",
            editLabel: ""
        }
        this.openSnackBar = React.createRef();
        this.handleLabel = this.handleLabel.bind(this);
        this.addLabel = this.addLabel.bind(this);
        this.changeLables = this.changeLables.bind(this);
        this.handlEditLabel = this.handlEditLabel.bind(this);
        this.deleteLabel = this.deleteLabel.bind(this);
        this.editLabel = this.editLabel.bind(this);
    }

    addLabel(value) {
        try{
        const label = {
            label: value
        }
        if (label.label !== "") {

            addLabel('/addLabel', label)
                .then(async (result) => {
                    console.log("label result", result);
                    this.setState({ label: "" })
                    this.props.showLabels(result.data.data);

                })
                .catch((error) => {
                    alert(error)
                });
        }
        else {
            displayErr = "cannot be empty";
            console.log("SAGSGAS");
            this.openSnackBar.current.handleClick();
        }
    }catch(err){
        console.log("error in add label");
    }
    }


    deleteLabel(value) {
        const labelId = {
            labelID: value
        }
        deleteLabel(labelId)
            .then(async (result) => {
                if (result.data.status) {

                    console.log("label result", result);
                    let newArray = this.props.label
                    for (let i = 0; i < newArray.length; i++) {
                        if (newArray[i]._id === labelId.labelID) {
                            newArray.splice(i, 1);
                            this.props.newLabels(newArray);
                            this.setState({ labelID: "" })
                        }
                    }
                }
                else {
                    console.log("error");

                }
            })
            .catch((error) => {
                displayErr = "Internal Server Error";
                this.openSnackBar.current.handleClick();

            });
    }

    editLabel(Label, id) {
        const editLabel = {
            editLabel: Label,
            labelID: id
        }
        updateLabel(editLabel)
            .then((result) => {

                console.log("success", result.data, this.props.label);

                let newArray = this.props.label;
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i]._id === editLabel.labelID) {
                        newArray[i].label = result.data.data.editLabel;
                        this.props.newLabels(newArray);
                        this.setState({ labelID: "" })
                    }
                }

            })
            .catch((error) => {
                displayErr = error.message;
                console.log("message", displayErr);
                this.openSnackBar.current.handleClick();

            });
    }


    createLabel() {
        this.setState({ labelID: "" })
    }
    handlEditLabel(evt) {
        this.setState({ editLabel: evt.target.value });
    }
    changeLables(id) {
        this.setState({ labelID: id })
    }

    handleLabel(evt) {
        this.setState({ label: evt.target.value })
    }

    handleToggle() {
        this.props.labelToggle()
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Dialog
                        open={this.props.drawerPropstoEditLabels}

                    >
                        <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                            <div style={{ color: "#3c4043", fontWeight: "500" }}>Edit Labels</div>

                            <div style={{ display: "flex", justifyContent: "space-between", height: "45px" }} onClick={() => this.createLabel()}>


                                <img src={require('../assests/images/addLabels.svg')}
                                    alt="add label plus icon" />


                                <TextField
                                    id="editLabelTextField"
                                    placeholder="Create New Label"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    value={this.state.label}
                                    onChange={this.handleLabel}
                                />
                                <Tooltip title="Create Label">
                                    <img src={require('../assests/images/tick.svg')}
                                        alt="label tick icon"
                                        onClick={() => this.addLabel(this.state.label)} />
                                </Tooltip>

                            </div>


                            {this.props.label.map((key) =>
                                this.state.labelID !== key._id ?
                                    <div onClick={() => this.changeLables(key._id)} key={key._id}
                                        style={{ display: "flex", justifyContent: "space-between", height: "45px", alignItems: "center" }}>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div><img src={require('../assests/images/labelFilled.svg')} alt="filled label icon" /></div>
                                            <div style={{ width: "182px", margin: "0px 15px 0px 15px", fontWeight: "500" }}>{key.label}</div>
                                        </div>
                                        <div><img src={require('../assests/images/edit.svg')} alt="edit label icon" /></div>
                                    </div>
                                    :
                                    <div onClick={() => this.changeLables(key._id)}
                                        style={{ display: "flex", justifyContent: "space-between", height: "45px", alignItems: "center" }}>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <img src={require('../assests/images/deleteLabel.svg')}
                                                alt="delete label icon"
                                                onClick={() => this.deleteLabel(key._id)} />
                                            <div style={{ width: "182px", margin: "0px 15px 0px 15px", fontWeight: "500" }}>
                                                <TextField
                                                    defaultValue={key.label}
                                                    // value={this.state.editLabel}
                                                    onChange={this.handlEditLabel}
                                                />

                                            </div>
                                        </div>
                                        <div><img src={require('../assests/images/tick.svg')}
                                            alt="label tick icon"
                                            onClick={() => this.editLabel(this.state.editLabel, key._id)} /></div>
                                    </div>

                            )}

                        </div>

                        <Divider />

                        <div style={{ padding: "10px", display: "flex", flexDirection: "row-reverse" }} >
                            <Button className="editCloseButton" onClick={this.handleToggle.bind(this)}>Done</Button>
                        </div>
                        <SnackBar ref={this.openSnackBar} error={displayErr} />

                    </Dialog>
                </div>
            </MuiThemeProvider>
        )

    }
}
export default EditLabel;