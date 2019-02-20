import React, { Component } from 'react';
import { IconButton, Card, Paper, MenuItem, TextField, Button, Popper } from '@material-ui/core';
class ReminderComponent extends Component {
    constructor() {
        super();
        this.state={
            open: false,
            anchorEl: null,
            date: "",
            time: "",
            reminder: ""
        }
        this.dateSave = this.dateSave.bind(this);
        this.dateSaveOfShowCard = this.dateSaveOfShowCard.bind(this);
    }
    handleChange(event) {
        this.setState({
            date: event.target.value
        });
        console.log("date", event.target.value);

    }
    handleTime = (event) => {
        this.setState({
            time: event.target.value
        })
        console.log("time", event.target.value);

    }
    isReminder = event => {
        const { currentTarget } = event;
        this.setState({
            open: !this.state.open,
            anchorEl: currentTarget
        })
        console.log("in reminder");
    }
    dateSaveOfShowCard(event) {
        var d = this.state.date + "," + this.state.time;
        console.log("Date and time in showcard= " + d);
        this.setState({
            reminder: d,
            open: !this.state.open,
        })
        this.props.r(this.state.reminder)
    }
    today(event, note, key){
        this.setState({
            reminder: 'Today : 20:00 PM',
            open: !this.state.open,
        })
    }

    tomorrow(event,note,key){
        event.preventDefault();
        this.setState({
            reminder: 'Tomorrow : 08:00 AM',  
        })      
        this.setState({
            reminder: 'Tomorrow : 08:00 AM',
            open:!this.state.open

        })
    }

    dateSave(event, note, key) {

        console.log("key in reminder ", key);
        console.log("note in reminder--", note);


        var d = this.state.date + "," + this.state.time;

        this.setState({
            reminder: d,
            open: !this.state.open,
        })
        console.log("date and time==", d);
       

    }
    render() {
        return (
            <div>
                <IconButton
                    onClick={(event) => this.isReminder(event)}>
                    <img src={require('../assets/images/reminder.svg')}
                        alt="" />
                </IconButton>
                <Card>
                    <Popper open={this.state.open} anchorEl={this.state.anchorEl}
                        position='absolute' z-index='1'>
                        <Paper>
                            <div>
                                <MenuItem onClick={(event) => this.today(event, this.props.note, this.props.index)}>
                                    Later today  :   20:00 
                            </MenuItem>
                                <div>

                                </div>
                            </div>
                            <div>
                                <MenuItem onClick={(event) => this.tomorrow(event, this.props.note, this.props.index)}>
                                    Tomorrow    :   08:00 
                                </MenuItem>

                            </div>
                            <div className="Sign">
                                <TextField
                                    type="date"
                                    onChange={this.handleChange.bind(this)} >
                                </TextField>
                            </div>

                            <div className="Sign">
                                <TextField
                                    type="time"
                                    placeholder="take time"
                                    onChange={this.handleTime}
                                />
                            </div>
                            {this.props.index ?
                                <div className="Sign">
                                    <Button
                                        onClick={(event) => this.dateSave(event, this.props.note, this.props.index)}>
                                        save
                                </Button>

                                </div>
                                :
                                <div>
                                    <Button
                                        onClick={(event) => this.dateSaveOfShowCard(event)}>
                                        save
                                </Button>
                                </div>
                            }
                        </Paper>
                    </Popper>
                </Card>


            </div>

        );
    }
}
export default ReminderComponent;