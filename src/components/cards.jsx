import React, { Component } from "react";
import { Card } from "@material-ui/core";

import { getNotes } from "../services/noteService";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      notes: [],
      label: false
    };
    this.cardsToDialogBox = React.createRef();

    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick(note) {
    await this.setState({ open: true });
    this.cardsToDialogBox.current.getData(note);
  }
  closeEditBox() {
    this.setState({ open: false });
  }
  displayLabelledCards() {
    this.setState({ label: true });
  }
  componentDidMount() {
    getNotes()
      .then(result => {
        this.setState({
          notes: result
        });
        console.log("get notes", result);
      })
      .catch(error => {
        alert(error);
      });
  }
  render() {
    return (
      <div className="CardsView">
       
        <div id="cardsViewDiv">
          <Card style={{ borderRadius: "10px", border: "1px solid #dadce0" }} />
        </div>
        
      </div>
    );
  }
}

export default Cards;
