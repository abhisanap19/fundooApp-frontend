import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SideNevigation from "../components/sideNevigation";
import ComplexCard from "./Notes";
import { MenuItem } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
const styles = theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "black"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]:{
      display: "block",
      color: "black",
      paddingLeft: "39px"
    }
  },
  search: {
    position: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor:fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor:fade(theme.palette.common.black, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    width: "100%",
    [theme.breakpoints.up("sm")]:{
      marginLeft: theme.spacing.unit * 3,
      width: "50%"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },

  inputRoot: {
    color: "black",
    width: "100%"
  },

  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]:{
      display: "none"
    }
  }
});

class DashboardInput extends React.Component {
  state = {

    left: true,
    open:false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };
  register = e => {
    e.preventDefault();
    this.props.props.history.push("/registration");
  };
  login = e => {
    e.preventDefault();
    this.props.props.history.push("/login");
  };
  resetForm = (event) => {
    this.setState(this.baseState)
    event.preventDefault();
    this.props.history.push('/registration');
}

  render(){
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
      <div className={classes.root}>
         <AppBar
          position="static"
          color="inherit" 
        >
          <Toolbar>
            <IconButton
              title="Main Menu"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <SideNevigation />
            </IconButton>
            <div
              style={{
                marginLeft: "-25px"
              }}
            >
              <img src={require("../assets/images/keep_48dp.png")} alt="" />
            </div>
            <div
              style={{
                marginLeft: "-18px"
              }}
            >
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                <b>FundooNotes</b>
              </Typography>
            </div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <div
                style={{
                  marginLeft: "48px"
                }}
              >
                <InputBase
                  className="appbar"
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </div>
            <div
              style={{
                marginLeft: "24px"
              }}
            >
              <img src={require("../assets/images/download.svg")} alt="" title="refresh"/>
            </div>

            <div
              style={{
                marginLeft: "24px"
              }}
            >
              <img src={require("../assets/images/grid.svg")} alt="" title="List View"/>
            </div>
            <div
              style={{
                marginLeft:"24px"
              }}
            >
              <img src={require("../assets/images/setting.svg")} alt="" title="settings"/>
            </div>

            <div>
            <div
              style={{
                marginLeft: "108px"
              }}
            >
          <IconButton
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
           <AccountCircle/>
          </IconButton>
          </div>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          </div>
          </Toolbar>
        </AppBar>
        
      </div>


      <div style={
        {
          display:"flex"
        }
      }>
     
      <ComplexCard/>
      </div>
      </div>
    );
  }
}

DashboardInput.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DashboardInput);
