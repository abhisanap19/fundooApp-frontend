// import React, { Component } from 'react';
// import { Card } from '@material-ui/core';
// import Tools from './Tools';
// import { getNotes } from '../services/noteServices'
// class Cards extends Component {
//     constructor() {
//         super();
//         this.state = {
//             open: false,
//             notes: [],
//             label: false
//         }
//         this.handleClick = this.handleClick.bind(this);

//     }
//     async handleClick(note) {
//         await this.setState({ open: true })
//         this.cardsToDialogBox.current.getData(note);
//     }

//     componentDidMount() {
//         getNotes()
//             .then((result) => {
//                 this.setState({
//                     notes: result
//                 })
//                 console.log("get notes:", result);

//             })
//             .catch((error) => {
//                 alert(error)
//             });
//     }
    
//     displayNewCard(newCard) {
//         this.setState({
//             notes: [this.state.notes, newCard]
//         })
//     }
//     render() {
//         let cardArr = cardArray(this.state.notes);
//         return (
//             <div>
//                 <div className="CardsView">

//                     {Object.keys(cardArr).map((key) => {
//                         console.log("cardArr", cardArr[key].note);
//                         return (
//                             <div key={key} id="cardsViewDiv">
//                                 <Card className={cardsView}
//                                     style={{ backgroundColor: cardArr[key].note.color, borderRadius: "10px", border: "1px solid #dadce0" }}
//                                 >
//                                     <div >
//                                         <div style={{ display: "flex", justifyContent: "space-between" }}>
//                                             <b onClick={() => this.handleClick(cardArr[key].note)} >
//                                                 {cardArr[key].note.title}
//                                             </b>
//                                         </div>
//                                         <div onClick={this.handleClick}>
//                                             {cardArr[key].note.description}
//                                         </div>
//                                     </div>

//                                     <div className="noteicons">
//                                         <Tools createNotePropsToTools={this.getColor}
//                                             noteID={cardArr[key].note._id}
//                                             note={cardArr[key].note}
//                                         />
//                                     </div>

//                                 </Card>
//                             </div>
//                         )
//                     })}

//                 </div>
//                 }
//             </div>

//         )
//     }

// }

// export default Cards;