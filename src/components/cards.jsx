import React, { Component } from "react";
import { Card, MuiThemeProvider, createMuiTheme,Toolbar } from "@material-ui/core";
import { getNotes } from "../services/noteService";
import ReminderComponent from "./reminder";
import CollaboratorComponent from "./collaborator";
import ColorComponent from "./color";
import ImageComponent from "./image";
import ArchiveComponent from "./archive";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: "0px"
      }
    },
    MuiChip: {
      root: {
        fontSize: 10,
        marginTop: 15,
        height: 20,
        backgroundColor: "rgba(0, 0, 0, 0.10)",
        padding: 2
      },
      deleteIcon: {
        width: 20,
        height: 20
      }
    }
  }
  
});
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

  displayNewCard(newCard) {
    this.setState({
      notes: [...this.state.notes, newCard]
    });
  }
  render() {
    let cardsView = this.props.noteProps ? "cards" : "listCards";
  
    return (
      <MuiThemeProvider theme={theme}>
      
          <Card
            className={cardsView}
            style={{
           
              borderRadius: "10px",
              border: "1px solid #dadce0"
            }}
          >
            <div>
              <div onClick={this.handleClick}>
            
              </div>
            </div>

            <div  />

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
            </Toolbar>
          </Card>
        
        
      </MuiThemeProvider>
    );
  }
}
export default Cards;
