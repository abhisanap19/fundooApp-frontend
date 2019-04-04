import React, { Component } from 'react'
import Popper from '@material-ui/core/Popper';
import { IconButton, MenuItem, Paper, Tooltip, Avatar } from '@material-ui/core'
import Fade from '@material-ui/core/Fade';
import { uploadProfilePic } from '../services/user_service';


class UserProfile extends Component {
    afdadsNote(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.href = '/login';
    }
    state = {
        anchorEl: null,
        open: false,
        placement: null,
        profilePic: ""
    };

    handleClick = placement => event => {
        const { currentTarget } = event;

        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open,
            placement,
        }));
    };

    triggerInputFile() {
        this.fileInput.click();
    }
    componentDidMount() {
        if (localStorage.getItem("profilePic") !== 'undefined') {
            this.setState({
                profilePic: localStorage.getItem("profilePic")
            })
        }
    }
    uploadImage(e) {
        let data = new FormData();
        console.log("image:------------", e.target.files[0]);
        data.append('image', e.target.files[0]);
        uploadProfilePic('/setProfilePic', data)
            .then((result) => {
                console.log("profile", result.data.data);

                this.setState({
                    profilePic: result.data.data
                })
            }).catch((err) => {
                alert(err);
            })
    }
    render() {

        const { anchorEl, open, placement } = this.state;
        const userDetails = localStorage.getItem('userName');
        // const maidId = localStorage.getItem('emailId');
        const initial = userDetails.substring(0, 1)

        if (localStorage.getItem('token1') !== "true")
            return (
                window.location.href = '/login'
            )
        else {
            return (

                <div>
                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <div className="userProfile">
                                        <div className="userProfileDetails">
                                            <IconButton id="avatar">
                                                <Tooltip title="Change Profile">
                                                    <Avatar style={{ width: "80px", height: "80px", backgroundColor: "#002884" }}
                                                        onClick={() => { this.triggerInputFile() }}>
                                                        {this.state.profilePic !== "" ?
                                                            <img style={{
                                                                width: "80px", height: "80px"
                                                            }} src={this.state.profilePic} alt="change Profile pic"></img>
                                                            :
                                                            <b style={{ fontSize: "33px" }}>{initial}</b>
                                                        }

                                                        <input ref={fileInput => this.fileInput = fileInput}
                                                            type="file" style={{ 'display': 'none' }}
                                                            className="uploadImage"
                                                            onChange={(evt) => this.uploadImage(evt)}
                                                        />
                                                    </Avatar>
                                                </Tooltip>
                                            </IconButton>


                                            <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                                                <p style={{ marginBottom: "0px" }}>{userDetails}</p>

                                              
                                            </div>
                                        </div>
                                      
                                        <MenuItem style={{
                                            borderBottomRightRadius: "0px",
                                            borderTopRightRadius: "0px"
                                        }}
                                            onClick={this.afdadsNote}>Logout</MenuItem>

                                    </div>

       
                                </Paper>
                            </Fade>
                        )}
                    </Popper>

                    <IconButton id="userProfileIcon">
                    <Tooltip title={<div><div id="account">fundooNotes Account</div>
                        <div id="username">{userDetails}</div>
                    </div>} placement="bottom-end">

                            <Avatar style={{ width: "40px", height: "40px", backgroundColor: "#002884" }} onClick={this.handleClick('bottom-end')} >
                                {this.state.profilePic !== "" ?
                                    <img style={{
                                        width: "40px", height: "40px"
                                    }} src={this.state.profilePic} alt="change Profile pic"></img>
                                    :
                                    initial
                                }
                            </Avatar>
                        </Tooltip>
                    </IconButton>

                </div>

            )
        }
    }
}
export default UserProfile;



