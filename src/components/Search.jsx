import React, { Component } from 'react';
import { Card, Chip } from '@material-ui/core';
import EditPin from './editPin';
import Tools from './Tools';


// const theme = createMuiTheme({
//     overrides: {
//         MuiChip: {
//             root: {
//                 fontSize: 10,
//                 marginTop: 15,
//                 height: 20,
//                 backgroundColor: "rgba(0, 0, 0, 0.10)",
//                 padding: 2
//             },
//             deleteIcon: {
//                 width: 20,
//                 height: 20
//             }
//         },
//     },
//     typography: {
//         useNextVariants: true,
//     },
// })

class SearchedNotes extends Component {
    render() {
        let cardsView = this.props.noteProps ? "listCards" : "cards";
        return (
            <div>
                <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "668px" }}>SEARCHED NOTES</label>
                <div className="CardsView" style={{ marginBottom: "30px" }}>
                    {this.props.searchNote.map((key) => {
                        return (
                            <Card className={cardsView} style={{ backgroundColor: key.note.color }} >
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

                                    {key.note.remindMe !== "" ?
                                        <Chip
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
                                        deleteLabelFromNote={this.props.deleteLabelFromNote}
                                        addLabelToNote={this.props.addLabelToNote}
                                        note={key.note}
                                        noteID={key.note._id}
                                        reminder={this.props.reminderNote}
                                        trashNote={this.props.trashNote}
                                        archiveNote={this.props.archiveNote}
                                        uploadImage={this.props.uploadImage}
                                    />

                                </div>

                            </Card>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}
export default SearchedNotes;