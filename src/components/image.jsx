import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';

class ImageComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <IconButton>
                    <img src={require('../assets/images/image.svg')}
                        alt="" />
                </IconButton>
            </div>
        );
    }
}
export default ImageComponent;