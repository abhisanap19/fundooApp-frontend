// import React, { Component, } from 'react';
// import { IconButton, Card, Popper, Paper, Tooltip } from '@material-ui/core';

// const ColorCodeArray=[
//     {
//         rgbCode:"rgb(255,255,255)",
//         ColorName:"White"
//     },
//     {
//         rgbCode: "rgb(255,0,0)",
//         ColorName: "Red"
//     },

//     {
//         rgbCode: "rgb(0,255,0)",
//         ColorName: "Lime"
//     },

//     {
//         rgbCode: "rgb(0,0,255)",
//         ColorName: "Blue"
//     },

//     {
//         rgbCode: "rgb(255,255,0)",
//         ColorName: "Yellow"
//     },

//     {
//         rgbCode:"rgb(0,255,255)",
//         ColorName:"Cyan"
//     },

//     {
//         rgbCode:"rgb(255,0,255)",
//         ColorName:"Magenta"
//     },

//     {
//         rgbCode:"rgb(128,0,0)",
//         ColorName:"Maroon"
//     },

//     {
//         rgbCode: "rgb(128,128,0)",
//         ColorName: "Olive"
//     },

//     {
//         rgbCode: "rgb(128,0,128)",
//         ColorName: "Purple"
//     },

//     {
//         rgbCode:"rgb(0,128,128)",
//         ColorName:"Teal"
//     },

//     {
//         rgbCode: "rgb(238,130,238)",
//         ColorName: "Violet"
//     }

// ]

// class ColorComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             open: false,
//             anchorEl: null,
//             color:""

//         }
//         this.openColorPop=this.openColorPop.bind(this);
//         this.changeColor=this.changeColor.bind(this);
//     }
//     openColorPop=event=>{
//         const { currentTarget } = event;
//         this.setState({
//             open: !this.state.open,
//             anchorEl: currentTarget

//         })

//     }
//     setColoredNote(event,note,index){

//         var color=event.target.value;

//     }
//     changeColor=event=>{
//         this.props.note(event.target.value);

//     }
//     render() {

//         var NoteArray=ColorCodeArray.map((option)=>{

//             return(
//                 this.props.note?
//                 (
//                     <div className="ColorIcon">
//                         <Tooltip title={option.ColorName}>
//                         <IconButton style={{backgroundColor:option.rgbCode}}
//                         value={option.rgbCode}
//                         onClick={(event)=>this.setColoredNote(event,this.props.note,this.props.index)}>

//                         </IconButton>
//                         </Tooltip>
//                     </div>
//                 ):(
//                     <div>
//                         <Tooltip title={option.ColorName}>
//                         <IconButton style={{backgroundColor:option.rgbCode}}
//                         value={option.rgbCode}
//                         onClick={(event)=>this.changeColor(event)}>
//                         </IconButton>
//                         </Tooltip>

//                     </div>
//                 )
//             );
//         })

//         return (
//             <div>
//                 <IconButton onClick={(event)=>this.openColorPop(event)}>
//                     <img src={require('../assets/images/changeColor.svg')}
//                         alt="" />
//                 </IconButton>
//                 <Card>
//                     <Popper open={this.state.open} anchorEl={this.state.anchorEl}
//                         position='absolute'>
//                         <Paper className="ColorPaper">
//                        <div className="ColorCard">
//                            {NoteArray}
//                        </div>
//                         </Paper>
//                     </Popper>
//                 </Card>
//             </div>
//         );
//     }
// }
// export default ColorComponent;

import React, { Component } from "react";
import {
  IconButton,
  Tooltip,
  Card,
  Paper,
  Popper
  
} from "@material-ui/core";
const colorCodesAndNames = [
  { name: "white", 
    colorCode: "rgb(255, 255, 255)" 
  },
  { name: "lightGreen", 
    colorCode: "rgb(204, 255, 144)" 
  },
  { name: "purple",
    colorCode: "rgb(215, 174, 251)"
  },
  { name: "red",
    colorCode: "rgb(242, 139, 130)" 
  },
  { name: "Teal",
    colorCode: "rgb(167, 255, 235)"
  },
  { name: "pink",
    colorCode: "rgb(253, 207, 232)" 
  },
  { name: "orange",
    colorCode: "rgb(251, 188, 4)" 
  },
  { name: "blue", 
    colorCode: "rgb(203, 240, 248)"
  },
  { name: "brown", 
    colorCode: "rgb(230, 201, 168)"
  },
  { name: "yellow",
    colorCode: "rgb(255, 244, 117)"
  },
  { name: "darkBlue",
    colorCode: "rgb(174, 203, 250)"
  },
  { name: "gray",
    colorCode: "rgb(232, 234, 237)"
  }
];
class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);

    this.handleColor = this.handleColor.bind(this);
  }

  closePopper() {
    this.setState({
      open: false
    });
  }
  handleColor(evt) {
    console.log("sasasas", this.props.noteID);
    this.props.toolsPropsToColorpallete(evt.target.value, this.props.noteID);
  }
  handleToggle = event => {
    const { currentTarget } = event;
    this.setState({
      open: !this.state.open,
      anchorEl: currentTarget
    });
  };
  // isReminder = event => {
  //     const { currentTarget } = event;
  //     this.setState({
  //         open: !this.state.open,
  //         anchorEl: currentTarget
  //     })
  //     console.log("in reminder");
  // }
  render() {
    const changeCardColor = colorCodesAndNames.map(colorKey => (
      <Tooltip title={colorKey.name}>
        <IconButton
          style={{
            backgroundColor: colorKey.colorCode,
            margin: "2px",
          }}
          value={colorKey.colorCode}
          onClick={this.handleColor}
        />
      </Tooltip>
    ));

    return (
      <div>
        <Tooltip title="Change Color">
          <img
            src={require("../assets/images/changeColor.svg")}
           
            alt="change color"
            onClick={this.handleToggle}
          />
        </Tooltip>
        
        <Card>
            <Popper open={this.state.open} anchorEl={this.state.anchorEl}
                         position='absolute'>
                         <Paper className="colorPalleteCard">
                        <div className="colorPalleteCard">
                            {changeCardColor}
                        </div>
                      </Paper>
                   </Popper>
        </Card>
        
      </div>
    );
  }
}
export default ColorComponent;
