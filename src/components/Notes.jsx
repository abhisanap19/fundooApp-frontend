import React, { Component } from "react";
import { Card, InputBase } from "@material-ui/core";
import ShowCards from "./ShowCards";
import IconButton from "@material-ui/core/IconButton";
class Notes extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.openCard = this.openCard.bind(this);
  }
  async openCard() {
    await this.setState({ open: !this.state.open });
    console.log("In open card");
    console.log(this.state.open);
  }
  render() {
    return !this.state.open ? (
      <div className="display">
        <div className="move">
          <Card className="notesCard">
            <div className="inp">
              <InputBase
                className="takeNote"
                type="email"
                onClick={event => this.openCard()}
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
        <ShowCards changeCard={this.openCard} />
      </div>
    );
  }
}
export default Notes;
