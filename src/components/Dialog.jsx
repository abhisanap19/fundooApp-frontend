
import React, { Component } from 'react';
import { Dialog, Input, Button, MuiThemeProvider, createMuiTheme, Chip } from '@material-ui/core';
import Tools from '../components/Tools';
import EditPin from '../components/editPin';
const theme = createMuiTheme({
    overrides: {
        MuiDialog: {
            paper: {
                borderRadius: "20px",
                // boxShadow: "0 3px 5px rgba(0, 0, 0, 0.20)",
                overflowY: "inherit",
                border: "none",
            }
        },
        MuiBackdrop:
        {
            root: {
                backgroundColor: "rgba(11, 11, 11, 0.18)"
            }
        },
        MuiInputBase:
        {
            multiline: {
                padding: "9px 30px 7px"
            }

        },
        MuiChip: {
            root: {
                fontSize: "12px",
                height: "30px",
                backgroundColor: "rgba(0, 0, 0, 0.10)",
                cursor: "zoom-in",
                marginTop: "15px"
            }
        },
    },
    typography: {
        useNextVariants: true,
    },
})
export default class DialogBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: "",
            title: "",
            description: "",
            color: "",
            archive: false,
            _id: "",
            remindMe: "",
            img: ""
        }
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleDescClick = this.handleDescClick.bind(this);
        this.getData = this.getData.bind(this);
    }
    async handleTitleClick(evt) {
        await this.setState({ title: evt.target.value })
    }
    async handleDescClick(evt) {
        await this.setState({ description: evt.target.value })
    }
    async handleToggle(e) {
        console.log("this.state.title==>", this.state.title);
        console.log("this.state.description==>", this.state.description);
        await this.props.editTitle(this.state.title, this.state._id)
        await this.props.editDescription(this.state.description, this.state._id)
        this.props.closeEditBox(e);
    }
    getData(note) {
        console.log('rfdtgdrt' + note);
        console.log("note in dialog", note);
        if (note.title !== undefined || note.description !== undefined) {
            this.setState({
                note: note,
                title: note.title,
                color: note.color,
                description: note.description,
                archive: note.archive,
                _id: note._id,
                pinned: note.pinned,
                remindMe: note.remindMe,
                img: note.img
            })
        }
    }

    closeDialogPopper = (e) => {
        this.props.closeEditBox(e);
    }

    remindMe1 = () => {
        this.setState({ remindMe: "" })
        this.props.remindMe('', this.state._id)
    }
    img1 = () => {
        this.setState({ img: "" })
        this.props.img('', this.state._id)
    }
    createNotePropsToTools = (value, noteID) => {
        this.setState({ color: value })
        this.props.createNotePropsToTools(value, noteID)

    }
    archiveNote = (value, noteID) => {
        console.log("archive value in dialog========>", value);
        this.setState({ archive: value })
        this.props.archiveNote(value, noteID)
        this.props.closeEditBox();
    }
    remindMe = (value, noteID) => {
        this.setState({ remindMe: value })
        this.props.remindMe(value, noteID);
    }
    img2 = (value, noteID) => {
        this.setState({ img: value })
        this.props.img2(value, noteID);
    }

    trashNote = (noteID) => {
        this.props.trashNote(noteID);
        this.props.closeEditBox();
    }
    ispinned = (value, noteID) => {
        this.setState({ pinned: value })
        this.props.ispinned(value, noteID);
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Dialog
                    aria-labelledby="responsive-dialog-title"
                    open={this.props.parentProps}
                // noteID={this.props.noteID}
                >
                    <div id="dialogbox" style={{ backgroundColor: this.state.color }} >
                        {this.state.img !== "" ?
                            <img style={{
                                width:'566px' ,
                                height: "226px"
                            }} src={this.state.img} alt="cardImage"></img>
                            : null}

                        <div className="createNotePinIcon">
                            <Input
                                className="dialogInputBase"
                                disableUnderline={true}
                                placeholder="edit title"
                                multiline
                                value={this.state.title}
                                onChange={this.handleTitleClick}
                            />
                            <div>
                                <EditPin
                                    initialpinstatus={this.state.pinned}
                                    noteID={this.state._id}
                                    pinstatus={this.ispinned}
                                />
                            </div>
                        </div>
                        <div>
                            <Input
                                className="dialogInputBase"
                                disableUnderline={true}
                                placeholder="edit note"
                                multiline
                                value={this.state.description}
                                onChange={this.handleDescClick}
                            />
                        </div>
                        {this.state.remindMe ?
                            <Chip id="chipcss"
                                label={this.state.remindMe}
                                onDelete={() => this.remindMe1()}
                            />
                            :
                            null}
                        <div className="cardToolsClose">
                            <Tools
                                createNotePropsToTools={this.createNotePropsToTools}
                                noteID={this.state._id}
                                remindMe={this.remindMe}
                                img2={this.img2}
                                archiveStatus={this.state.archive}
                                archiveNote={this.archiveNote}
                                trashNote={this.trashNote}
                            />
                            <Button id="doneButton" onClick={this.handleToggle.bind(this)}>Close</Button>
                        </div>
                    </div>
                </Dialog>
            </MuiThemeProvider>
        )
    }
}
