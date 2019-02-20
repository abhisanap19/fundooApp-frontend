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
//import {addNote} from '../services/noteService'
import ReminderComponent from "./reminder";
import CollaboratorComponent from './collaborator'
import ColorComponent from './color'
import ArchiveComponent from './archive'
import ImageComponent from './image'
class ShowCards extends Component {
  constructor(){
    super();
    this.state={
      nextLine:true,
      title:"",
      description:"",
      reminder: "",
      collaborator: "",
      color: "",
      image: "",
      pin: false,
      trash: false,
      label: [],
      openCard: false,
      toast:false
    };
    this.handleLabel = this.handleLabel.bind(this);
    this.handleReminder = this.handleReminder.bind(this);
  }

  handleLabel(val) {
    console.log("value===", val);
    this.setState({
      label: val
    });
  }

  handleReminder(rem) {
    this.setState({
      reminder: rem
    });
    console.log("rem---", rem);
  }
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  

  addNotes() {
    this.setState({
      title: "",
      description: ""
    });
      console.log("reminder----",this.state.reminder);
      this.props.changeCard();
  }
  isPinned(event, note, key) {
    //pinnedNote(note, key);
  }
  

  render() {
    return (
      <div className="show">
        <Card className="cardlist">
          <div className="titleAndPin">
            <div>
              <InputBase
                className="titleNote"
                placeholder="Title"
                onChange={event => this.setState({ title: event.target.value })}
              />
            </div>
            <div>
              {" "}
              <div className="pin">
                <IconButton
                  onClick={event =>
                    this.isPinned(event, this.props.show, this.props.index)
                  }
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
              onChange={event =>
                this.setState({ description: event.target.value })
              }
              placeholder="Take a note..."
              multiline={this.state.nextLine}
            />
          </div>

          <div className="toolbarAndClose">
            <Toolbar className="CardToolbar">
              <div>
                <ReminderComponent/>
              </div>
              <div className="showcardlist">
                <CollaboratorComponent/>
              </div>
              <div className="showcardlist">
                <ColorComponent/>
              </div>
              <div className="showcardlist">
                <ImageComponent/>
              </div>
              <div className="showcardlist">
                <ArchiveComponent/>
              </div>
              <div className="closeButton">
              <Button onClick={(event) => this.addNotes(event)}>Close</Button>
              </div>
            </Toolbar>
            <ToastContainer/>
          </div>
        </Card>
      </div>
    );
  }
}
export default ShowCards;
