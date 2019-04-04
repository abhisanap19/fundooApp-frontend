import React, { Component } from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { MenuItem, Paper, Tooltip, ListItem, createMuiTheme, MuiThemeProvider, ClickAwayListener } from '@material-ui/core'
const theme = createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                borderbottomrightradius: 0,
                bordertoprightradius: 0,
                height: "13px",
                marginTop: "8px",
                marginBottom: "8px",
                width: "268px",
                fontSize: "12px",
            }
        },
        MuiPaper:{
            root:{
                zIndex:"1"
            }
        },
    },
    typography: {
        useNextVariants: true,
    },
})


class Reminder extends Component {
    state = {
        anchorEl: null,
        open: false,
        placement: null,
    };
    
    handleClick = placement => event => {
        try{
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    }catch(err){
        console.log("error in handle click");
        
    }
    };
    handleClose=()=>{
        this.setState(state=>({open:!state.open}))
    }
    setTodayReminder =()=> {
        try{
        this.handleClose();
        let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
        var date = new Date().toDateString();
        var reminder1 = date+ ", 8 "+ampm;
        console.log("in reminder1==>",reminder1);
        this.props.reminder(reminder1,this.props.noteID)
        }catch(err){
            console.log("error in set reminder for today");
        }
    }
 
    setTomorrowReminder=()=>{
        try{
        this.handleClose();
        let days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon"]
        var date = new Date().toDateString();
        date=date.replace(new Date().getDate().toString(),new Date().getDate()+1);
        date=date.replace(days[new Date().getDay()-1],days[new Date().getDay()]);
        var reminder1= date+ ", 8 AM" ;
        console.log("tommorow reminder==>",reminder1);
        this.props.reminder(reminder1,this.props.noteID)
        }
        catch(err){
            console.log("error in set reminder for tommorrow");
        }
    }
    setWeeklyReminder=()=>{
        try{
        this.handleClose();
       
        var date = new Date().toDateString();
        date=date.replace((new Date().getDate()),(new Date().getDate()+7));
        var reminder1 = date+ ", 8 AM" ;
        console.log("weekly reminder==>",reminder1);
        this.props.reminder(reminder1,this.props.noteID)
        }
        catch(err){
            console.log("error in set reminder for next week");
        }
    }

    render() {
        const setAMPM = this.props.parentToolsProps;
        const { anchorEl, open, placement } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Tooltip title="Remind me">
                        <img src={require('../assests/images/reminder.svg')} 
                        className="reminderIcon" 
                        onClick={this.handleClick('bottom-start')} alt="remider icon" />
                    </Tooltip>

                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition style={{zIndex:1}}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper id="reminderPopper">
                                <ClickAwayListener onClickAway={this.handleClose}>

                                    <div>

                                        <ListItem className="listRemindr" >Reminder:</ListItem>
                                        <MenuItem className="currentDate" onClick={()=>this.setTodayReminder(this.props.note)}>
                                            <div>Later today</div>
                                            <div>8:00 {setAMPM}</div>
                                        </MenuItem>

                                        <MenuItem className="currentDate"  onClick={()=>this.setTomorrowReminder(this.props.note)}>
                                            <div>Tomorrow</div>
                                            <div>8:00 AM</div>
                                        </MenuItem>

                                        <MenuItem className="currentDate"  onClick={()=>this.setWeeklyReminder(this.props.note)}>
                                            <div>Next Week</div>
                                            <div>Mon, 8:00 AM</div>
                                        </MenuItem>

                                        <MenuItem className="currentDate">
                                            <div>Home</div>
                                            <div>Mumbai</div>

                                        </MenuItem>

                                       
                                        <MenuItem >Pick place</MenuItem>
                                    </div>
                                    </ClickAwayListener>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>



                </div>
            </MuiThemeProvider>
        )
    }
}
export default Reminder;
