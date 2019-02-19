import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SideNevigation from "../components/sideNevigation";
import ComplexCard from "./Notes";
import { MenuItem } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";

class DashboardInput extends React.Component {
  state = {
    left: true,
    open: false
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
  resetForm = event => {
    this.setState(this.baseState);
    event.preventDefault();
    this.props.history.push("/registration");
  };

  render() {
    const { open } = this.state;
    return (
      <div styles={
        {
          display: "flex"
        }
      }>
        <div className="root">
          <AppBar position="static" color="inherit">
            <Toolbar>
              <IconButton
                title="Main Menu"
                className="menuButton"
                color="inherit"
                aria-label="Open drawer"
              >
                <SideNevigation />
              </IconButton>
              <div className="keepImage">
                <img src={require("../assets/images/keep_48dp.png")} alt="" />
              </div>
              <div className="fundoTitle">
                <Typography
                  className="title"
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  <b>FundooNotes</b>
                </Typography>
              </div>

              <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <div className="searchField">
                  <InputBase placeholder="Search…" className="inputRoot" />
                </div>
              </div>
              <div className="appList">
                <img
                  src={require("../assets/images/download.svg")}
                  alt=""
                  title="refresh"
                />
              </div>

              <div className="appList">
                <img
                  src={require("../assets/images/grid.svg")}
                  alt=""
                  title="List View"
                />
              </div>
              <div className="appList">
                <img
                  src={require("../assets/images/setting.svg")}
                  alt=""
                  title="settings"
                />
              </div>

              <div>
                <div className="iconButton">
                  <IconButton
                    buttonRef={node => {
                      this.anchorEl = node;
                    }}
                    aria-owns={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <Popper
                  open={open}
                  anchorEl={this.anchorEl}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      id="menu-list-grow"
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom"
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={this.handleClose}>
                          <MenuList>
                            <MenuItem onClick={this.handleClose}>
                              Profile
                            </MenuItem>
                            <MenuItem onClick={this.handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={this.handleClose}>
                              Logout
                            </MenuItem>
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

        <div className="dash">
          <ComplexCard />
        </div>
      </div>
    );
  }
}

export default DashboardInput;
