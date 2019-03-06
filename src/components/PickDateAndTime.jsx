import React, { Component } from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { MenuItem, Paper, ListItem, TextField, Select, ClickAwayListener } from '@material-ui/core';

class PickDateAndTime extends Component {
    state = {
        anchorEl: null,
        open: false,
        placement: null,
        option: '',
        name: 'Daily'
    };

    pickDateTime(event) {
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,

        }));
    };
    handleClick() {
        this.setState({ open: !this.state.open })
    }
    handleOptions(evt) {
        this.setState({ option: evt.target.value });
    }

    closeReminderPopper() {
        console.log("hjhdhd");
        
        this.setState({ open: false })
    }
    render() {

        const { anchorEl, open } = this.state;
        return (
            <div>
                <div>
                    <MenuItem onClick={this.pickDateTime.bind(this)}>Pick Date</MenuItem>
                </div>

                <Popper open={open} anchorEl={anchorEl} placement={'right'} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={0}>
                            <Paper>
                                <ClickAwayListener onClickAway={()=>this.closeReminderPopper()}>
                                    <div className="pickDateTime">

                                        <ListItem>
                                            <img src={require("../assests/images/backArrow.svg")}
                                                style={{ marginRight: "10px", padding: "0px" }}
                                                onClick={this.handleClick.bind(this)}
                                                alt="pick date time icon" />
                                            Pick Date And Time</ListItem>

                                        <TextField
                                            type="datetime-local"
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        <TextField
                                            type="time"
                                            defaultValue="12:30"
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />

                                        <Select

                                            value={this.state.option}
                                            onChange={this.handleOptions.bind(this)}
                                            displayEmpty
                                            name="option"
                                        >

                                            <MenuItem value="">Does not repeat</MenuItem>

                                            <MenuItem value={"Daily"}>Daily</MenuItem>
                                            <MenuItem value={"Weekly"}>Weekly</MenuItem>
                                            <MenuItem value={"Monthly"}>Monthly</MenuItem>
                                            <MenuItem value={"Yearly"}>Yearly</MenuItem>

                                        </Select>

                                    </div>
                                </ClickAwayListener>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>

        )
    }
}
export default PickDateAndTime;