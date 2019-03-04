// import React, { Component } from 'react';
// import { IconButton, Card, Paper, MenuItem, TextField, Button, Popper } from '@material-ui/core';
// class ReminderComponent extends Component {
//     constructor() {
//         super();
//         this.state={
//             open: false,
//             anchorEl: null,
//             date: "",
//             time: "",
//             reminder: ""
//         }
//         this.dateSave = this.dateSave.bind(this);
//         this.dateSaveOfShowCard = this.dateSaveOfShowCard.bind(this);
//     }
//     handleChange(event) {
//         this.setState({
//             date: event.target.value
//         });
//         console.log("date", event.target.value);
//     }
//     handleTime = (event) => {
//         this.setState({
//             time: event.target.value
//         })
//         console.log("time", event.target.value);

//     }
//     isReminder = event => {
//         const { currentTarget } = event;
//         this.setState({
//             open: !this.state.open,
//             anchorEl: currentTarget
//         })
//         console.log("in reminder");
//     }
//     dateSaveOfShowCard(event) {
//         var d = this.state.date + "," + this.state.time;
//         //console.log("Date and time in showcard= " + d);
//         this.setState({
//             reminder: d,
//             open: !this.state.open,
//         })
//         this.props.r(this.state.reminder)
//     }
//     today(event, note, key){
//         this.setState({
//             reminder: 'Today : 20:00 PM',
//             open: !this.state.open,
//         })
//     }

//     tomorrow(event,note,key){
//         event.preventDefault();
//         this.setState({
//             reminder: 'Tomorrow : 08:00 AM',  
//         })      
//         this.setState({
//             reminder: 'Tomorrow : 08:00 AM',
//             open:!this.state.open

//         })
//     }

//     dateSave(event, note, key) {

//         console.log("key in reminder ", key);
//         console.log("note in reminder--", note);


//         var d = this.state.date + "," + this.state.time;

//         this.setState({
//             reminder: d,
//             open: !this.state.open,
//         })
//         console.log("date and time==", d);
       

//     }
//     render() {
//         return (
//             <div>
//                 <IconButton
//                     onClick={(event) => this.isReminder(event)}>
//                     <img src={require('../assets/images/reminder.svg')}
//                         alt="" />
//                 </IconButton>
//                 <Card>
//                     <Popper open={this.state.open} anchorEl={this.state.anchorEl}
//                         position='absolute' z-index='1'>
//                         <Paper>
//                             <div>
//                                 <MenuItem onClick={(event) => this.today(event, this.props.note, this.props.index)}>
//                                     Later today  :   20:00 
//                             </MenuItem>
//                                 <div>

//                                 </div>
//                             </div>
//                             <div>
//                                 <MenuItem onClick={(event) => this.tomorrow(event, this.props.note, this.props.index)}>
//                                     Tomorrow    :   08:00 
//                                 </MenuItem>

//                             </div>
//                             <div className="Sign">
//                                 <TextField
//                                     type="date"
//                                     onChange={this.handleChange.bind(this)} >
//                                 </TextField>
//                             </div>

//                             <div className="Sign">
//                                 <TextField
//                                     type="time"
//                                     placeholder="take time"
//                                     onChange={this.handleTime}
//                                 />
//                             </div>
//                             {this.props.index ?
//                                 <div className="Sign">
//                                     <Button
//                                         onClick={(event) => this.dateSave(event, this.props.note, this.props.index)}>
//                                         save
//                                 </Button>

//                                 </div>
//                                 :
//                                 <div>
//                                     <Button
//                                         onClick={(event) => this.dateSaveOfShowCard(event)}>
//                                         save
//                                 </Button>
//                                 </div>
//                             }
//                         </Paper>
//                     </Popper>
//                 </Card>
//             </div>
//         );
//     }
// }
// export default ReminderComponent;












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
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    };
    handleClose=()=>{
        this.setState(state=>({open:!state.open}))
    }
    setTodayReminder(note) {
        this.handleClose();
        let ampm = parseInt(new Date().getHours()) >= 8 ? "PM" : "AM";
        console.log("before",note);
        
        var date = new Date().toDateString();
        note.reminder = date+ ", 8 "+ampm;
        console.log(note.reminder);
        this.props.reminder(note.reminder,note._id)
    }
    setTomorrowReminder(note){
        this.handleClose();
        let days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon"]
        console.log("before",note);
        var date = new Date().toDateString();
        date=date.replace(new Date().getDate().toString(),new Date().getDate()+1);
        date=date.replace(days[new Date().getDay()-1],days[new Date().getDay()]);
        note.reminder = date+ ", 8 AM" ;
        console.log(note.reminder);
        this.props.reminder(note.reminder,note._id)
    }
    setWeeklyReminder(note){
        this.handleClose();
        console.log("before",note);
        var date = new Date().toDateString();
        date=date.replace((new Date().getDate()),(new Date().getDate()+7));
        note.reminder = date+ ", 8 AM" ;
        console.log(note.reminder);
        this.props.reminder(note.reminder,note._id)
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
                                            <div>Seawoods Darave (W)</div>

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
