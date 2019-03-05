

import React, { Component } from 'react';
import { Snackbar, Button, IconButton, Tooltip } from '@material-ui/core';


class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isArchived: false
        }
       
    }

    componentWillMount() {
        if (typeof this.props.archiveStatus !== "undefined") {
            this.setState({
                isArchived: this.props.archiveStatus
            })
        }
    }
    async handleArchive() {
        await this.setState({ isArchived: !this.state.isArchived });
        this.props.archiveNote(this.state.isArchived, this.props.noteID)

    }
    render() {
        return (
            this.state.isArchived ?

                <div>
                    <img src={require('../assests/images/unarchive.svg')}
                        onClick={() =>
                            this.handleArchive()
                        }
                        alt="archive note icon"
                        className="archiveIcon" />

                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        message={<span>Note archived</span>}
                        action={[
                            <Button key="undo" style={{ color: "#F1C40F" }} size="small" >
                                UNDO
                        </Button>,

                            <IconButton
                                onClick={this.handleClick}
                            >
                                <img src={require('../assests/images/closeIcon.svg')} alt="snackBar close" />
                            </IconButton>,
                        ]}
                    />
                </div>
                :
                <Tooltip title="Archive Note"   onClick={() =>
                    this.handleArchive()
                }>
                    <img src={require('../assests/images/archive.svg')}
                    alt="archive note icon"
                    className="archiveIcon"/>
                </Tooltip>
        )
    }
}
export default Archive;

