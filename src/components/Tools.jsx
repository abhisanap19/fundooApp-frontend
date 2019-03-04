import React, { Component } from 'react';
import Reminder from './reminder'

import ColorPallete from './color'
import UploadImage from './image'
import Archive from './archive'
import MoreOptions from './moreOptions'


class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);

    }
    handleToggle() {
        this.setState({ open: !this.state.open });
    }
    render() {
        const setNoteTime = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
        return (

            <div>
                <div className="cardTools">
                    <Reminder parentToolsProps={setNoteTime}
                        reminder={this.props.reminder}
                        note={this.props.note} />


                    <ColorPallete
                        handleToggle={this.handleToggle}
                        toolsPropsToColorpallete={this.props.createNotePropsToTools}
                        noteID={this.props.noteID} />

                    <UploadImage uploadImage={this.props.uploadImage} note={this.props.note}/>

                    <Archive
                        archiveNote={this.props.archiveNote}
                        noteID={this.props.noteID}
                        archiveStatus={this.props.archiveStatus}
                    />
                    <MoreOptions
                        addLabelToNote={this.props.addLabelToNote}
                        trashNote={this.props.trashNote}
                        noteID={this.props.noteID}
                    />

                </div>
            </div>
        )
    }
}
export default Tools;
