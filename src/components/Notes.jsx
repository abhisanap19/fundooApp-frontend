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
      <div
        className="show"
        style={{
          marginLeft: "136px",
          marginTop: "15px"
        }}
      >
        <div
          style={{
            marginLeft: "156px",
            marginTop: "30px"
          }}
        >
          <Card className="notesCard">
            <div
              style={{
                marginLeft: "502px",
                marginTop: "33px",
                paddingRight: "243px"
              }}
            >
              <InputBase
                className="takeNote"
                style={{ marginLeft: "-476px" }}
                type="email"
                onClick={event => this.openCard()}
                placeholder="Take a notes..."
              />
            </div>
            <div
              style={{
                marginLeft: "663px",
                marginTop: "-52px"
              }}
            >
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
