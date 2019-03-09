import React, { Component } from 'react';
import { IconButton, Tooltip, Card, ClickAwayListener } from '@material-ui/core';


const colorCodesAndNames = [{ name: "white", colorCode: "rgb(255, 255, 255)" },
{ name: "lightGreen", colorCode: "rgb(204, 255, 144)" },
{ name: "purple", colorCode: "rgb(215, 174, 251)" },
{ name: "red", colorCode: "rgb(242, 139, 130)" },
{ name: "Teal", colorCode: "rgb(167, 255, 235)" },
{ name: "pink", colorCode: "rgb(253, 207, 232)" },
{ name: "orange", colorCode: "rgb(251, 188, 4)" },
{ name: "blue", colorCode: "rgb(203, 240, 248)" },
{ name: "brown", colorCode: "rgb(230, 201, 168)" },
{ name: "yellow", colorCode: "rgb(255, 244, 117)" },
{ name: "darkBlue", colorCode: "rgb(174, 203, 250)" },
{ name: "gray", colorCode: "rgb(232, 234, 237)" }
]
class ColorPallete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false

        }
        this.handleToggle = this.handleToggle.bind(this);
      
        this.handleColor = this.handleColor.bind(this);
    }
   
    closePopper() {
        this.setState({
            open: false
        })
    }
    handleColor(evt) {
        console.log("sasasas", this.props.noteID)
        this.props.toolsPropsToColorpallete(evt.target.value, this.props.noteID);
     }


    handleToggle() {
        this.setState({ open: !this.state.open });
        this.props.handleToggle(!this.state.open)
    }
    render() {

        const changeCardColor = colorCodesAndNames.map((colorKey) =>

            <Tooltip title={colorKey.name}>
                <IconButton style={{ backgroundColor: colorKey.colorCode, "margin": "2px", }}
                    value={colorKey.colorCode}
                    onClick={this.handleColor}>
                </IconButton>
            </Tooltip>
        );

        return (

            <div>
                <Tooltip title="Change Color">
                    <img src={require('../assests/images/pallete.svg')}
                        className="colorPalleteIcon"
                        alt="change color"
                        onClick={this.handleToggle}
                    />
                </Tooltip>
                <div>
                    {this.state.open ?
                        <ClickAwayListener onClick={() => this.closePopper()}>
                            <Card className="colorPalleteCard">
                                {changeCardColor}
                            </Card>
                        </ClickAwayListener>

                        : null}
                </div>
            </div>

        )
    }
}
export default ColorPallete;

































