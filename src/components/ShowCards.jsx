import React, { Component } from "react";
import {
  Card,
  InputBase,
  IconButton,
  Toolbar,
  Button
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ShowCards extends Component {
  constructor() {
    super();
    this.state = {
      nextLine: true,
      title: "",
      description: "",
      reminder: "",
      collaborator: "",
      color: "",
      image: "",
      pin: false,
      trash: false,
      label: [],
      openCard: false
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
    if (this.state.title === "" && this.state.description === "") {
      console.log("reminder----", this.state.reminder);
      this.props.changeCard();
    } else {
      toast("Title And Description not empty", {
        position: toast.POSITION.TOP_CENTER
      });
    }
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
                <img
                  src={require("../assets/images/reminder.svg")}
                  alt=""
                  title="remind me"
                />
              </div>
              <div className="showcardlist">
                <img
                  src={require("../assets/images/collaborator.svg")}
                  alt=""
                  title="collaborator"
                />
              </div>
              <div className="showcardlist">
                <img
                  src={require("../assets/images/changeColor.svg")}
                  alt=""
                  title="change color"
                />
              </div>
              <div className="showcardlist">
                <img
                  src={require("../assets/images/saveimage.svg")}
                  alt=""
                  title="Add image"
                />
              </div>
              <div className="showcardlist">
                <img
                  src={require("../assets/images/archive.svg")}
                  alt=""
                  title="Archive"
                />
              </div>
              <div className="closeButton">
                <Button onClick={event => this.addNotes(event)}>Close</Button>
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
