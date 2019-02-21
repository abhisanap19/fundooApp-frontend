// import React, { Component } from "react";
// import { Card, InputBase } from "@material-ui/core";
// import ShowCards from "./ShowCards";
// import IconButton from "@material-ui/core/IconButton";
// class Notes extends Component {
//   constructor() {
//     super();
//     this.state = {
//       open: false
//     };
//     this.openCard = this.openCard.bind(this);
//   }
//   async openCard() {
//     await this.setState({ open: !this.state.open });
//     console.log("In open card");
//     console.log(this.state.open);
//   }
//   render() {
//     return !this.state.open ? (
//       <div className="display">
//         <div className="move">
//           <Card className="notesCard">
//             <div className="inp">
//               <InputBase
//                 className="takeNote"
//                 type="email"
//                 onClick={event => this.openCard()}
//                 placeholder="Take a notes..."
//               />
//             </div>
//             <div className="pin">
//               <div>
//                 <IconButton>
//                   <img src={require("../assets/images/newlist.svg")} alt="" />
//                 </IconButton>
//                 <IconButton>
//                   <img src={require("../assets/images/image.svg")} alt="" />
//                 </IconButton>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     ) : (
//       <div className="show">
//         <ShowCards changeCard={this.openCard} />
//       </div>
//     );
//   }
// }
// export default Notes;



// import React, { Component } from 'react';
// import { Input, Card, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
// import Tools from './Tools';
// import { Button } from '@material-ui/core';
// import { createNote } from '../services/noteService'
// //import EditPin from './editPin';
// const theme = createMuiTheme({
//     overrides: {
//         MuiPaper: {
//             rounded: {
//                 borderRadius: "10px",

//             },
//             elevation1: {
//                 boxShadow: "0 3px 5px rgba(0,0,0,0.20)"
//             }
//         },
//     },
//     typography: {
//         useNextVariants: true,
//     },
// })
// class CreateNotes extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             openNote: false,
//             title: "",
//             description: "",
//             color: "rgb(255, 255, 255)",
//             remindMe: "",
//             pinned: false,
//             img: "",
//             archive: false,
//             trash: false,
//             newNote: {}

//         }
//         this.handleTitle = this.handleTitle.bind(this);
//         this.handleDescription = this.handleDescription.bind(this);
//         this.handleToggle = this.handleToggle.bind(this);
//         this.handleColor = this.handleColor.bind(this);
//         this.handleArchive = this.handleArchive.bind(this);
//         this.handleReminder = this.handleReminder.bind(this);
//         this.handlePinned = this.handlePinned.bind(this);

//     }
//     handleToggle() {
//         this.setState({ openNote: !this.state.openNote });
//         console.log("pinned", this.state);

//         if (this.state.title !== '' || this.state.description !== '' || this.state.color !== "rgb(255, 255, 255)") {
//             const note = {
//                 title: this.state.title,
//                 description: this.state.description,
//                 remindMe: this.state.remindMe,
//                 color: this.state.color,
//                 img: this.state.img,
//                 archive: this.state.archive,
//                 pinned: this.state.pinned,
//                 trash: this.state.trash,
//             }

//             createNote(note)
//                 .then((result) => {
//                     this.setState({
//                         newNote: result.data.data
//                     })
//                     this.props.getNewNote(this.state.newNote)
//                 })

//                 .catch((error) => {
//                     alert(error);
//                 })

//             this.setState({
//                 title: "",
//                 description: "",
//                 remindMe:"",
//                 color: "rgb(255, 255, 255)",
//                 img: "",
//                 archive: false,
//                 pinned: false,
//                 trash: false,
//             })

//         }

//     }

//     handleTitle(evt) {
//         this.setState({ title: evt.target.value })
//     }

//     handleDescription(evt) {
//         this.setState({ description: evt.target.value })
//     }

//     handleReminder(value) {
//         this.setState({ remindMe: value })
//     }

//     handleColor(value) {
//         this.setState({ color: value });
//     }

//     handleArchive(value) {
//         this.setState({ archive: value });
//     }

//     handlePinned(value) {
//         this.setState({ pinned: value });
//     }
   

//     render() {
//         return (!this.state.openNote ?

//             <MuiThemeProvider theme={theme}>
//                 <div id="createNoteParent">
//                     <Card className="createNote">
//                         <div className="staticCreateNote">
//                             <Input
//                                 className="noteInputBase"
//                                 multiline
//                                 disableUnderline={true}
//                                 placeholder="Take a Note ...."
//                                 readOnly={true}
//                                 onClick={this.handleToggle}
//                                 value=""
//                             />

//                             <img src={require('../assets/images/image.svg')} alt="upload pic icon" />
//                         </div>
//                     </Card>
//                 </div>
//             </MuiThemeProvider>
//             :
//             <MuiThemeProvider theme={theme}>
//                 <div id="createNoteParent">
//                     <Card className="createNote1" style={{ backgroundColor: this.state.color }}>
//                         <div className="createNotePinIcon">
//                             <Input
//                                 className="titleInput"
//                                 disableUnderline={true}
//                                 placeholder="Title"
//                                 value={this.state.title}
//                                 onChange={this.handleTitle}


//                             />
                           
//                         </div>

//                         <Input
//                             className="noteInputBase"
//                             multiline
//                             disableUnderline={true}
//                             placeholder="Take a Note ...."
//                             value={this.state.description}
//                             onChange={this.handleDescription}


//                         />
//                         <div className="cardToolsClose" >
//                             <Tools
//                                 createNotePropsToTools={this.handleColor}
//                                 archiveNote={this.handleArchive}
//                                 archiveStatus={this.state.archive} />
//                             <Button onClick={this.handleToggle}>Close</Button>
//                         </div>

//                     </Card>
//                 </div>
//             </MuiThemeProvider>

//         )
//     }

// }
// export default CreateNotes;
