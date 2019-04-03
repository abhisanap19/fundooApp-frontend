import React, { Component } from 'react';
import CreateNotes from '../components/CreateNotes';
import AppbarComponent from '../components/Appbar';
import Cards from '../components/notes';
class Note extends Component {
    constructor() {
        super();
        this.state = {
            label: "",
            cardStyles: false,
            reminder: false,
            archive: false,
            trash: false,
            searchNote: "",
            slideCards: false
        }

        this.noteToCards = React.createRef();

        this.handleCardStyle = this.handleCardStyle.bind(this);
        this.getNewNote = this.getNewNote.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.getSearchedNotes = this.getSearchedNotes.bind(this);
        this.searchLabels = this.searchLabels.bind(this);
        this.slideCards = this.slideCards.bind(this);
        this.makeLabelFalse = this.makeLabelFalse.bind(this);

    }

    searchLabels(value) {
        this.setState({ label: value });
        console.log("search labels", value);
        this.noteToCards.current.displayLabelledCards();
    }
    getNewNote(newCard) {
        this.noteToCards.current.displayNewCard(newCard);
    }

    getSearchedNotes(value) {
        this.setState({ searchNote: value })
    }

    slideCards() {
        this.setState({ slideCards: !this.state.slideCards })
    }

    handleCardStyle() {
        this.setState({ cardStyles: !this.state.cardStyles });
    }
    handleNavigation(reminder, archive, trash) {
        console.log("handleNAvigation", reminder, archive, trash);

        if (reminder === true || archive === true || trash === true) {

            this.setState({
                reminder: reminder,
                archive: archive,
                trash: trash
            })
        } else {
            this.setState({
                reminder: false,
                archive: false,
                trash: false
            })
        }
    }

    makeLabelFalse() {
        this.noteToCards.current.makeLabelFalse();
    }
    render() {
        if(localStorage.getItem('token1') !== "true"){
            return(
              window.location.href = 'login'
            )
          }
          else{
        const slidingCards = this.state.slideCards ? "afterSlide" : "beforeSlide"
        return (
            <div className={slidingCards}>
                <AppbarComponent
                    makeLabelFalse={this.makeLabelFalse}
                    slideCards={this.slideCards}
                    searchLabels={this.searchLabels}
                    notePropsToApp={this.handleCardStyle}
                    handleNavigation={this.handleNavigation}
                    getSearchedNotes={this.getSearchedNotes}
                />
                <div className="setFixedMargin">
                    <div id="dashboard">
                        <CreateNotes getNewNote={this.getNewNote} />

                        <Cards
                            labelValue={this.state.label}
                            noteProps={this.state.cardStyles}
                            navigateReminder={this.state.reminder}
                            navigateArchived={this.state.archive}
                            navigateTrashed={this.state.trash}
                            searchNote={this.state.searchNote}
                            ref={this.noteToCards} />
                    </div>
                </div>
            </div>
        )
          }
    }
}
export default Note;
