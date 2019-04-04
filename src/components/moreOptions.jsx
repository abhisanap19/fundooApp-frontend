import React, { Component } from 'react';
import { MenuItem, Popper, Paper, Fade, Tooltip, ClickAwayListener, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import AddLabelsOnNote from './addLabels';

const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                margin: "0px",
            },

        },
    },
    typography: {
        useNextVariants: true,
    },
})
class MoreOptions extends Component {
    constructor() {
        super();
        this.state = {

            anchorEl: null,
            open: false,
            placement: null,
        }
        this.moreOptionsToAddLabels = React.createRef();
        this.clickMoreOptions = this.clickMoreOptions.bind(this);
        this.handleTrashedNotes = this.handleTrashedNotes.bind(this);
        this.handleLabelsOnNote = this.handleLabelsOnNote.bind(this);
    }
    clickMoreOptions(event) {
        try{
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,

        }));
    }catch(err){
        console.log("error in more options");
    }
    }
    handleTrashedNotes() {
        this.props.trashNote(this.props.noteID);
    }
    closeLabelPopper() {
        this.setState({
            open: false
        })
    }
    handleLabelsOnNote(e) {
        this.setState({
            open: false
        })
        this.moreOptionsToAddLabels.current.addLabelPopup(e);
    }
    render() {
        const { anchorEl, open } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Tooltip title="More Options">
                        <img src={require('../assests/images/more.svg')}
                            onClick={this.clickMoreOptions}
                            className="moreOptionsIcon"
                            alt="more options icon" />

                    </Tooltip>

                    <Popper open={open} anchorEl={anchorEl} placement={'right'} transition style={{ position: "fixed" }}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={0}>
                                <Paper className="moreOptionsPopper" >
                                    <ClickAwayListener onClickAway={() => this.closeLabelPopper()}>
                                        <div id="selectMoreOptions">

                                            <MenuItem id="moreOptionsMenu" onClick={this.handleTrashedNotes}>Delete Note</MenuItem>
                                            <MenuItem id="moreOptionsMenu" onClick={this.handleLabelsOnNote}>Add Label</MenuItem>

                                        </div>
                                    </ClickAwayListener>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>

                    <AddLabelsOnNote ref={this.moreOptionsToAddLabels} noteID={this.props.noteID} addLabelToNote={this.props.addLabelToNote} anchorEl={this.state.anchorEl} />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default MoreOptions;