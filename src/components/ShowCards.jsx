import React, { Component } from "react";
import {
  Card,
  InputBase,
  IconButton,
  Toolbar,
  Button
} from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReminderComponent from "./reminder";
import CollaboratorComponent from "./collaborator";
import ColorComponent from "./color";
import ArchiveComponent from "./archive";
import ImageComponent from "./image";
import { createNote } from "../services/noteService";
class ShowCards extends Component {
  constructor() {
    super();
    this.state = {
      nextLine: true,
      title: "",
      description: "",
      reminder: "",
      color: "",
      image: "",
      pin: false,
      trash: false,
      archive: false,
      openNote: false,
      toast: false,
      newNote: {}
    };
    
    this.handleReminder = this.handleReminder.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handlePinned = this.handlePinned.bind(this);
  }

  handleToggle() {
    this.setState({ openNote: !this.state.openNote });
    console.log("opened:", this.state);
   
    if (this.state.title !== "" || this.state.description !== "") {
      const data = {
        title: this.state.title,
        description: this.state.description,
        reminder: this.state.reminder,
        color: this.state.color,
        image: this.state.image,
        archive: this.state.archive,
        pinned: this.state.pin,
        trash: this.state.trash
      };
      createNote(data)
        .then(result => {
          this.setState({
            newNote: result.data.data
          });
          this.props.getNotes(this.state.newNote);
        })
        .catch(error => {
          alert(error);
        });
        
      this.setState({
        title: "",
        description: "",
        reminder: "",
        color: "",
        image: "",
        archive: false,
        pin: false,
        trash: false
      });
    }
  }

  handleTitle(evt) {
    this.setState({ title: evt.target.value });
  }

  handleDescription(evt) {
    this.setState({ description: evt.target.value });
  }

  handleReminder(value) {
    this.setState({ reminder: value });
  }

  handleColor(value) {
    this.setState({ color: value });
  }

  handleArchive(value) {
    this.setState({ archive: value });
  }

  handlePinned(value) {
    this.setState({ pin: value });
  }

  render() {
    return !this.state.openNote ? (
      <div className="display">
        <div className="move">
          <Card className="notesCard">
            <div className="inp">
              <InputBase
                className="takeNote"
                type="email"
                onClick={this.handleToggle}
                placeholder="Take a notes..."
              />
            </div>
            <div className="pin">
              <div>
                <IconButton>
                  <img src={require("../assets/images/newlist.svg")} alt="" />
                </IconButton>
                <IconButton>
                  <img src={require("../assets/images/image.svg")} alt="" />
                </IconButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    ) : (
      <div className="show">
        <Card className="cardlist">
          <div className="titleAndPin">
            <div>
              <InputBase
                className="titleNote"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleTitle}
              />
            </div>
            <div>
              {" "}
              <div className="pin">
                <IconButton
                  pinStatus={this.state.pinned}
                  cardPropsToPin={this.handlePinned}
                >
                  <img
                    src={require("../assets/images/pin.svg")}
                    alt=""
                    title="pin note"
                  />
                </IconButton>
              </div>
            </div>
          </div>

          <div className="inp">
            <InputBase
              className="in"
              placeholder="Take a note..."
              value={this.state.description}
              onChange={this.handleDescription}
            />
          </div>

          <div className="toolbarAndClose">
            <Toolbar className="CardToolbar">
              <div>
                <ReminderComponent />
              </div>
              <div className="showcardlist">
                <CollaboratorComponent />
              </div>
              <div className="showcardlist">
                <ColorComponent />
              </div>
              <div className="showcardlist">
                <ImageComponent />
              </div>
              <div className="showcardlist">
                <ArchiveComponent />
              </div>
              <div className="closeButton">
                <Button onClick={this.handleToggle}>
                Close
                
                </Button>
               
              </div>
            </Toolbar>
            <ToastContainer />
          </div>
        </Card>
     
      </div>
    );
  }
}
export default ShowCards;
