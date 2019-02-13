// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import DeleteIcon from "@material-ui/icons/Delete";
// const styles = {
//   list: {
//     width: 250
//   },
//   fullList: {
//     width: "auto"
//   },
//   menuButton: {
//     color: "black"
//   },
//   hide: {
//     display: 'none',
//   },
// };

// class Sidebar extends React.Component {
//   state = {
//     left: false
//   };

//   toggleDrawer = (side, open) => () =>{
//     this.setState({
//       [side]: open
//     });
//   };

//   render() {
//     const { classes } = this.props;

//     const sideList = (
//       <div className={classes.list}>
//         <List>
//           {["Notes", "Reminders"].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />                                                  
//         <List>
//           {["Edit labels", "Archieve", "Bin"].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <DeleteIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     );

//     return (
//       <div>
//         <IconButton
//           onClick={this.toggleDrawer("left", true)}
//           className={classes.menuButton}
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//         <div class="MuiBackdrop-root-184" 
//         style={{
//           opacity: "1",
//           transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
//         }}
//        >
//         <SwipeableDrawer
          
//           open={this.state.left}
//           onClose={this.toggleDrawer("left", false)}
//           onOpen={this.toggleDrawer("left", true)}
//         >
//           <div
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer("left", true)}
//             onKeyDown={this.toggleDrawer("left", true)}
//           >
//             {sideList}
//           </div>
//         </SwipeableDrawer>
//         </div>
//       </div>
//     );
//   }
// }

// Sidebar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Sidebar);



import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
//import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
 
 
  menuButton: {
    
  },
  hide: {
    display: 'none',
  },
  drawer: {
   //width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
 
  
});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open )}
            >
              <MenuIcon />
            </IconButton>
            
          
       
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
         
            <IconButton onClick={this.handleDrawerClose}>
              
            </IconButton>
          
          <Divider />
          <List>
            {['Notes', 'Reminders'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
          <List>
            {['Edit labels'].map((text, index) =>(
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider/>
          </List>
          <List>
            {['Archive', 'Bin'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
       
      </div>
    );
  }
}
PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
