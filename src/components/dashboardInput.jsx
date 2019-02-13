import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
//import Badge from '@material-ui/core/Badge';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
//import MailIcon from '@material-ui/icons/Mail';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from "@material-ui/icons/MoreVert";
import SideNevigation from "../components/sideNevigation";
import ComplexCard from "../components/cards"
//import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: "100%",
    BackgroundColor: "red",
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
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "black",
      paddingLeft: "39px"
    }
  },
  search: {
    position: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginRight: theme.spacing.unit * 2,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
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
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class DashboardInput extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    left: true
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  // toggleDrawer = (side, open) => () => {
  //   this.setState({
  //     [side]: open
  //   });
  // };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
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
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
      
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.login}>SIGN OUT</MenuItem>
        <MenuItem onClick={this.register}>ADD ACCOUNT</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle  />
          </IconButton>   
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

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
              onClick={this.handleDrawerOpen}
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
                marginLeft: "24px"
              }}
            >
              <img src={require("../assets/images/setting.svg")} alt="" title="settings"/>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
                title="FundooNotes Account"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        
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
