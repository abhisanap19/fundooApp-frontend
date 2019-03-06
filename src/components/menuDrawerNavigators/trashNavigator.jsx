import React, { Component } from 'react';
import { Card, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import TrashOptions from '../trashOption';

const theme = createMuiTheme({
    overrides: {
        MuiChip: {
            root: {
                fontSize: 10,
                height: 20,
                backgroundColor: "rgba(0, 0, 0, 0.10)"
            }

        },
       
    },
    typography: {
        useNextVariants: true,
    },
})

class TrashNavigator extends Component {
    render() {
        let cardsView = this.props.noteProps ? "cards" : "listCards";
        return (
            <MuiThemeProvider theme={theme}>
                <label style={{ fontFamily: "georgia", fontSize: "15px", color: "grey", marginRight: "760px" }}>TRASHED</label>

                <div className="CardsView" >
                    {this.props.trashArray.map((key) => {

                        return (
                            <Card className={cardsView} style={{ backgroundColor: key.note.color,borderRadius: "10px",border:"1px solid #dadce0" }} >
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <b>{key.note.title}</b>
                                    </div>

                                    <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                                        {key.note.description}
                                    </div>

                                </div>

                                <TrashOptions
                                    restore={this.props.trashNote}
                                    noteID={key.note._id}
                                    deleteNote={this.props.deleteNote} />

                            </Card>
                        )
                    })
                    }
                </div>
            </MuiThemeProvider>
        )
    }
}
export default TrashNavigator;