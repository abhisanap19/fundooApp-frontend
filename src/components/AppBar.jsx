import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, MuiThemeProvider, createMuiTheme, Tooltip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import DrawerMenu from './menuDrawer';
import CardsView from './cardsView';
import UserProfile from './UserProfile';

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 80,
                width: 280,
                background: 'white'
            },
            paperAnchorDockedLeft: {
                borderColor: "white"
            }
        },
        MuiAppBar: {
            root: {
                display: 'flex',
                flexDirection: "row"

            },
            // appBarShift: {
            //     marginLeft: 250,

            // },

            colorPrimary: {
                color: "gray",
                fontSize: 25,
                fontFamily: "georgia"
            },

        },
        MuiToolbar: {
            regular: {
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
            }
        },
        MuiMenuItem: {
            root: {
                borderBottomRightRadius: "25px",
                borderTopRightRadius: "25px",
                height: "30px"
            },
        },

    },
    typography: {
        useNextVariants: true,
    },
})

class AppbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            searchNote:""
        }
        this.handleAppbar = this.handleAppbar.bind(this);
        this.handleSearchBar = this.handleSearchBar.bind(this);
    }
    handleToggle = () => {
        this.props.slideCards();
        this.setState({ open: !this.state.open });
    }

    handleRefresh(evt) {
        evt.preventDefault();
        window.location.reload();
    }

    handleAppbar() {
        this.props.notePropsToApp();
    }

    handleSearchBar(evt) {
        this.setState({ searchNote: evt.target.value });
        this.props.getSearchedNotes(evt.target.value)
    }

    searchLabels(value) {
        this.props.searchLabels(value)
    }
    render() {

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="fixed" id="appbar" >
                    <Toolbar>

                        <div id="appBarMenuAndTitle">
                            <div>
                                <IconButton color="inherit" aria-label="Open drawer" >
                                    <Tooltip title="Menu">
                                        <MenuIcon id="menu" onClick={this.handleToggle} />
                                    </Tooltip>
                                </IconButton>
                            </div>

                            <img src={require('../assests/images/keepIcon.svg')} alt="keep icon" />
                            <span className="title">fundooNotes</span>
                        </div>

                        <div id="appBarIcons">
                            <div id="searchBar">

                                <IconButton color="inherit" aria-label="Open drawer" style={{ marginLeft: "8px" }} >
                                    <Tooltip title="Search">
                                        <SearchIcon style={{ color: "gray" }} />
                                    </Tooltip>
                                </IconButton>
                                <InputBase
                                    id="searchInputBase"
                                    placeholder="Search..."
                                    value={this.state.searchNote}
                                    onChange={this.handleSearchBar}
                                />
                            </div>
                            <CardsView appPropstoCardsView={this.handleAppbar} />
                            <div>
                                <UserProfile />
                            </div>
                        </div>
                    </Toolbar>
                    <DrawerMenu
                        appBarProps={this.state.open}
                        handleNavigation={this.props.handleNavigation}
                        searchLabels={(value) => this.searchLabels(value)}
                        makeLabelFalse={this.props.makeLabelFalse} />
                </AppBar>
            </MuiThemeProvider>
        )
    }
}
export default AppbarComponent;

