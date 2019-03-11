import React, { Component } from 'react';
import { Card, Chip } from '@material-ui/core';
import Tools from './Tools';
import EditPin from './editPin';



class PinAndOthers extends Component {
    render() {
        let cardsView = this.props.noteProps ? "cards" : "listCards";

        return (
            <div>
                <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>PINNED</label>
                <div className="CardsView" style={{ marginBottom: "30px" }}>
                    {this.props.pinArray.map((key) => {
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

                                        <Chip 
                                            label={key.note.remindMe}
                                            onDelete={() => this.props.reminder("", key.note._id)}
                                        />
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
                                    <Tools createNotePropsToTools={this.props.createNotePropsToTools}
                                        deleteLabelFromNote={this.props.deleteLabelFromNote}
                                        addLabelToNote={this.props.addLabelToNote}
                                        archiveNote={this.props.archiveNote}
                                        noteID={key.note._id}
                                        archiveStatus={key.note.archive}
                                        reminder={this.props.reminder}
                                        note={key.note}
                                        trashNote={this.props.trashNote}
                                        uploadImage={this.props.uploadImage} />

                                </div>
                            </Card>)
                    })
                    }
                </div>

                <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>OTHERS</label>
                <div className="CardsView">
                    {this.props.othersArray.map((key) => {
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

                                        <Chip 
                                            label={key.note.remindMe}
                                            onDelete={() => this.props.reminder("", key.note._id)}
                                        />
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
                                        deleteLabelFromNote={this.props.deleteLabelFromNote}
                                        note={key.note}
                                        noteID={key.note._id}
                                        reminder={this.props.reminder}
                                        archiveNote={this.props.archiveNote}
                                        trashNote={this.props.trashNote}
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
export default PinAndOthers