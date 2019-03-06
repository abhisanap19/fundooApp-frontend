import React, { Component } from 'react';
import { Card, Chip, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import EditPin from '../editPin';
import Tools from '../Tools';
import ClockIcon from '../clockIcon';

const theme = createMuiTheme({
    overrides: {
        MuiChip: {
            root: {
                fontSize: 10,
                marginTop: 15,
                height: 20,
                backgroundColor: "rgba(0, 0, 0, 0.10)",
                padding: 2
            },
            deleteIcon: {
                width: 20,
                height: 20
            }
        },
    },
    typography: {
        useNextVariants: true,
    },
})
class ArchivedNavigator extends Component {
    render() {
        let cardsView = this.props.noteProps ? "cards" : "listCards";
        return (
            <MuiThemeProvider theme={theme}>
                <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>ARCHIVED</label>
                <div className="CardsView">
                    {this.props.archiveArray.map((key) => {
                        return (
                            <Card className={cardsView} style={{ backgroundColor: key.note.color,borderRadius: "10px",border:"1px solid #dadce0" }} >
                                <div>
                                    <div>
                                        {key.note.img !== "" ?
                                            <img style={{
                                                maxWidth: "100%",
                                                height: "auto"
                                            }} src={key.note.img} alt="cardImage"></img>
                                            : null}
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <b>{key.note.title}</b>

                                        <EditPin cardPropsToPin={this.props.pinNote}
                                            noteID={key.note._id}
                                            pinStatus={key.note.pinned}
                                        />
                                    </div>
                                    <div>
                                        {key.note.description}
                                    </div>
                                    {key.note.remindMe ?

                                        <Chip icon={<ClockIcon />}
                                            label={key.note.remindMe}
                                            onDelete={() => this.props.reminder("", key.note._id)} />
                                        :
                                        null}
                                    {key.note.label.length > 0 ?
                                        key.note.label.map((key1) =>

                                            <Chip
                                                label={key1}
                                                onDelete={() => this.props.deleteLabelFromNote(key1, key.note._id)}
                                            />

                                        )
                                        :
                                        null}

                                </div>
                                <div className="noteicons">
                                    <Tools createNotePropsToTools={this.props.getColor}
                                        addLabelToNote={this.props.addLabelToNote}
                                        note={key.note}
                                        noteID={key.note._id}
                                        reminder={this.props.reminder}
                                        trashNote={this.props.trashNote}
                                        archiveStatus={key.note.archive}
                                        archiveNote={this.props.archiveNote}
                                        uploadImage={this.props.uploadImage}

                                    />

                                </div>
                            </Card>)
                    })
                    }
                </div>
            </MuiThemeProvider>
        )
    }
}
export default ArchivedNavigator;