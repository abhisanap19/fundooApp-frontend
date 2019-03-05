import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
class DrawerMenu extends Component {

    constructor() {
        super();

        this.state = {
            open: false,
            navigateReminder: false,
            navigateArchived: false,
            navigateTrashed: false,
            label: [],
        }

        
    }

    
    async handleNotes() {
        await this.setState({
            navigateReminder: false,
            navigateArchived: false,
            navigateTrashed: false,
        })
        this.props.makeLabelFalse();
        this.props.handleNavigation(this.state.navigateReminder, this.state.navigateArchived, this.state.navigateTrashed);
    }
    async handleReminder() {
        await this.setState({
            navigateReminder: true,
            navigateArchived: false,
            navigateTrashed: false
        })
        this.props.makeLabelFalse();
        this.props.handleNavigation(this.state.navigateReminder, this.state.navigateArchived, this.state.navigateTrashed);
    }
    async handleArchived() {

        await this.setState({
            navigateReminder: false,
            navigateArchived: true,
            navigateTrashed: false
        })
        this.props.makeLabelFalse();
        this.props.handleNavigation(this.state.navigateReminder, this.state.navigateArchived, this.state.navigateTrashed);
    }
    async handleTrashed() {
        await this.setState({
            navigateReminder: false,
            navigateArchived: false,
            navigateTrashed: true
        })
        this.props.makeLabelFalse();
        this.props.handleNavigation(this.state.navigateReminder, this.state.navigateArchived, this.state.navigateTrashed);
    }

    render() {
        return (
            <div>
                <Drawer
                    variant="persistent"
                    open={this.props.appBarProps}
                    width={250}
                >
                    <MenuItem id="noteMenu" onClick={()=>this.handleNotes()}>
                        <img src={require('../assests/images/note.svg')} alt="note icon"
                            style={{ marginRight: "50px" }} />
                        Notes
                    </MenuItem>

                    <MenuItem id="reminderMenu" onClick={() => this.handleReminder()}>
                        <img src={require('../assests/images/menuReminder.svg')} alt="reminder icon"
                            style={{ marginRight: "50px" }} />
                        Reminders
                    </MenuItem>

                    <div style={{ borderBottom: "1px solid lightgrey", borderTop: "1px solid lightgrey" }}>
                        <div style={{ marginRight: "218px", fontSize: "13px", marginBottom: "10px", marginTop: "10px", fontFamily: "arial" }}>
                            LABELS
                </div>

                        <div>
                            <div>
                                {/* {displayLabels} */}
                            </div>
                            <MenuItem id="labelMenu" onClick={this.handleEditLabel}>

                                <img src={require('../assests/images/menuEdit.svg')} alt="edit icon"
                                    style={{ marginRight: "50px" }} />
                                Edit Labels
                            </MenuItem>
                        </div>

                    </div>

                    <MenuItem id="archiveMenu" onClick={() => this.handleArchived()} >
                        <img src={require('../assests/images/menuArchive.svg')} alt="archive icon"
                            style={{ marginRight: "50px" }} />
                        Archive
                    </MenuItem>

                    <MenuItem id="trashIcon" onClick={() => this.handleTrashed()}>
                        <img src={require('../assests/images/menuTrash.svg')} alt="trash icon"
                            style={{ marginRight: "50px" }} />
                        Trash
                    </MenuItem>

                </Drawer>
            </div>
        )
    }
}

export default DrawerMenu;