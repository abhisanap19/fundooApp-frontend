import React, { Component } from 'react';
import { getNotes } from '../../controller/DatabaseController';
import DisplayCard from './displayCard';


class ShowNotes extends Component {
    constructor() {
        super();
        this.state = {

            notes: [],
            open: false

        }
    }

    closePop() {
        this.setState({
            open: !this.state.open
        })
    }
    componentDidMount() {
        getNotes(NoteList => {
            if (NoteList) {
                this.setState({
                    notes: NoteList
                })
                console.log(" available notelist ", NoteList.Title);

            }


            else {
                this.setState({
                    notes: []
                })
            }
        })
    }
    render() {

        var noteArr = [];
        var Arr = [];
        var ArchiveArr = [];

        if (this.props.n) {
            console.log("notes of props ", this.props.n);

            noteArr = Object.keys(this.state.notes).map((note) => {
                var key = note;
                var noteData = this.state.notes[key];
                console.log("notedata---=", noteData);

                if ((noteData.Archive !== true  && noteData.Trash !== true)&&(noteData.Pinned!==false||noteData.Pinned!==true) ) {

                    return (

                        <DisplayCard show={noteData}
                            index={key}
                            gridNote={this.props.grid}
                        />

                    );
                }

                return noteArr;
            })

        }
        else if (this.props.a) {
            ArchiveArr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key]
                if (noteData.Archive !== false) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }
                return ArchiveArr;
            })
        }
        else if (this.props.r) {
            noteArr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key];
                if (noteData.Reminder !== null && noteData.Archive !== true && noteData.Pinned !== true && noteData.Trash !== true) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }

                return noteArr;
            })


        }
        else if (this.props.t) {
            noteArr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key]
                if (noteData.Trash !== false) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }

                return noteArr;
            })


        }

        else if (this.props.p) {
            Arr = Object.keys(this.state.notes).map((note, index) => {
                var key = note;
                var noteData = this.state.notes[key]
                if (noteData.Pinned !== false) {

                    return (
                        <div>
                            <DisplayCard show={noteData}
                                index={key}
                                gridNote={this.props.grid}
                            />
                        </div>
                    );
                }

                return Arr;
            })
        }
        else{

        }
        return (
            <div className="display">

                {noteArr}
                <div>

                    {ArchiveArr}
                </div>
                <div>
                    
                        {Arr}
                </div>

            </div>
        );
    }
}
export default ShowNotes;