import React, { Component } from 'react';
import { MenuItem, Popper, Fade, Paper, Tooltip } from "@material-ui/core";

class TrashOptions extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
        }
        this.clickMoreOptions = this.clickMoreOptions.bind(this);
    }

    clickMoreOptions(event) {
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,

        }));
    }
    render() {
        const { anchorEl, open } = this.state;
        return (
            <div>
                <Tooltip title="More">
                    <img src={require('../assests/images/more.svg')}
                        onClick={this.clickMoreOptions}
                        className="moreOptionsIcon"
                        alt="more options icon" />
                </Tooltip>

                <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={0}>
                            <Paper className="moreOptionsPopper">

                                <div id="selectMoreOptions">

                                    <MenuItem id="moreOptionsMenu" onClick={() => this.props.restore(this.props.noteID)}>Restore Note</MenuItem>
                                    <MenuItem id="moreOptionsMenu" onClick={() => this.props.deleteNote(this.props.noteID)}>Delete Forever</MenuItem>

                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

            </div>
        )
    }
}
export default TrashOptions;