import React, { Component } from 'react';
import { Tooltip } from '@material-ui/core';
class UploadImage extends Component {
    triggerInputFile() {
        try{
        this.fileInput.click();
        }catch(err){
            console.log("error in file triggger");
        }
    }

    uploadImage(evt)
    {
        try{
        console.log("upload image",evt.target.files[0]);
        
        this.props.uploadImage(evt.target.files[0],this.props.note._id)
        }catch(err){
            console.log("error in upload image");
        }
    }
    render() {
        return (
            <span>
            <Tooltip title="Upload Image"> 
                <img src={require('../assests/images/imageUpload.svg')}
                    className="uploadImage"
                    alt="upload pic icon"
                    onClick={() => { this.triggerInputFile() }} />
            </Tooltip>
                <input ref={fileInput => this.fileInput = fileInput}
                    type="file" style={{ 'display': 'none' }}
                    className="uploadImage"
                    onChange={(evt)=>this.uploadImage(evt)}
                />

            </span>
        )
    }
}
export default UploadImage;