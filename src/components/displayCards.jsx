// import React, { Component } from 'react';
// import { Card, InputBase, IconButton, Toolbar, Chip } from '@material-ui/core';
// import ArchiveComponent from './archive';
// import ColorComponent from './color';
// import CollaboratorComponent from './collaborator';
// import ImageComponent from './image';
// import ReminderComponent from './reminder';
// class DisplayCard extends Component {
//     constructor() {
//         super();
//         this.state = {
//             edit: false,
//             open: false,
//             label: [],
//             reminder:""
//         }
//         this.handleEdit = this.handleEdit.bind(this);
//         this.handleReminder = this.handleReminder.bind(this);
//         this.openPop = this.openPop.bind(this);
//         this.handleLabel = this.handleLabel.bind(this);
//     }

//     handleLabel(val) {
     
//         this.setState({
//             label: val
//         })

//     }
//     openPop() {
//         this.setState({
//             open: !this.state.open
//         })
//     }
  
//     handleEdit() {
//         this.setState({ edit: !this.state.edit })
//     }
   
//     handleReminder(rem) {
       
//         this.setState({
//             reminder: rem
//         })
//     }
//     render() {
//         const stl = this.props.gridNote ?  'Showlist' :'ShowCard'
//         return (
//             <Card className={stl}
//                 style={{ backgroundColor: this.props.show.Colors }}>
//                 <div className="titleAndPin">
//                     <div>
//                         <InputBase className="titleNote"
//                             readOnly={this.props.show.Title}
//                             defaultValue={this.props.show.Title}
//                             onChange={(event) => this.setState({ title: event.target.value })}
                            
//                         >
//                         </InputBase>
//                     </div>

//                         <div>
//                             <IconButton
//                                 onClick={(event) => this.isPinned(event, this.props.show, this.props.index)}>
//                                 <img src={require('../assets/images/pin.svg')}
//                                     alt="" />
//                             </IconButton>
//                         </div>}
//                 </div>
//                 <div className="inp">
//                     <InputBase className="in"
//                         readOnly={this.props.show.Description}
//                         defaultValue={this.props.show.Description}
//                         type={File}
//                         onChange={(event) => this.setState({ description: event.target.value })}
//                         multiline={this.state.nextLine}
//                     >
//                     </InputBase>
//                 </div>
//                 <div className="chipLabel">
//                     {this.props.show.Reminder ? (
//                         <div>
//                             <Chip
//                                 label={this.props.show.Reminder}
//                                 onDelete={() => this.deleteReminder(this.props.show,this.props.index)}>
//                             </Chip>
//                         </div>
//                     )
//                         : (
//                             <div>

//                             </div>
//                         )}

//                     {this.props.show.label &&
//                         <div>
//                             {this.props.show.label.map((option, index) =>

//                                 <Chip style={{ backgroundColor: this.props.show.Colors }}
//                                     label={option}
//                                     onDelete={() => this.deleteLabel(this.props.show, this.props.index, index)}

//                                 ></Chip>
//                             )
//                             }
//                         </div>
                
//                                    }
//                 </div>

//                 <div className="toolbarAndClose">

//                             <Toolbar className="CardToolbar">
//                                 <div>
//                                     <ReminderComponent r={this.handleReminder}
//                                         note={this.props.show}
//                                         index={this.props.index} />
//                                 </div>
//                                 <div>
//                                     <CollaboratorComponent show={this.props.show}
//                                         index={this.props.index} />
//                                 </div>
//                                 <div>
//                                     <ColorComponent clr={this.openPop}
//                                         note={this.props.show}
//                                         index={this.props.index} />
//                                 </div>
//                                 <div>
//                                     <ImageComponent />
//                                 </div>
//                                 <div>
//                                     <ArchiveComponent
//                                         show={this.props.show}
//                                         index={this.props.index} />
//                                 </div>
//                             </Toolbar>
//                         )}
//                 </div>
//             </Card>
//         );
//     }
// }
// export default DisplayCard;



import React, { Component } from 'react';
import { Card, InputBase, IconButton, Toolbar, Chip } from '@material-ui/core';
import ArchiveComponent from './archive';
import ColorComponent from './color';
import CollaboratorComponent from './collaborator';
import ImageComponent from './image';
import ReminderComponent from './reminder';
import MoreComponent from './more';
import EditNotes from './EditNote';
import { pinnedNote, removeLabel, removeReminder } from '../../controller/DatabaseController';
import Delete from './deleteNote';

class DisplayCard extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            open: false,
            label: [],
            reminder:""

        }
        this.handleEdit = this.handleEdit.bind(this);
        this.editNote = this.editNote.bind(this);
        this.handleReminder = this.handleReminder.bind(this);
        this.openPop = this.openPop.bind(this);
        this.handleLabel = this.handleLabel.bind(this);
    }

    handleLabel(val) {
     
        this.setState({
            label: val
        })

    }

    openPop() {
        this.setState({
            open: !this.state.open
        })
    }
    editNote() {
        this.setState({
            edit: !this.state.edit
        })
    }
    handleEdit() {
        this.setState({ edit: !this.state.edit })
    }
    isPinned(event, note, key) {
        pinnedNote(note, key);


    }
    handleReminder(rem) {
       
        this.setState({
            reminder: rem
        })
    }
    deleteReminder(note,key){
      
        this.setState({
            reminder:""
        })
        removeReminder(this.state.reminder,note,key);
    }
    deleteLabel(note, key, index) {
      
        removeLabel(note, key, index);


    }

    render() {

        const stl = this.props.gridNote ?  'Showlist' :'ShowCard'
     

        return (


            <Card className={stl}
                style={{ backgroundColor: this.props.show.Colors }}>


                <div className="titleAndPin">
                    <div>
                        <InputBase className="titleNote"
                            readOnly={this.props.show.Title}
                            defaultValue={this.props.show.Title}
                            onChange={(event) => this.setState({ title: event.target.value })}
                            onClick={(event) => this.editNote(event)}
                        >

                        </InputBase>
                    </div>
                    {this.props.show.Pinned ?
                        <div>
                            <IconButton
                                onClick={(event) => this.isPinned(event, this.props.show, this.props.index)}>
                                <img src={require('../../assets/fillpin.svg')}
                                    alt="" />
                            </IconButton>
                        </div>
                        :
                        <div>
                            <IconButton
                                onClick={(event) => this.isPinned(event, this.props.show, this.props.index)}>
                                <img src={require('../../assets/pin.svg')}
                                    alt="" />
                            </IconButton>
                        </div>}
                </div>
                <div className="inp">
                    <InputBase className="in"
                        readOnly={this.props.show.Description}
                        defaultValue={this.props.show.Description}
                        type={File}
                        onChange={(event) => this.setState({ description: event.target.value })}
                        multiline={this.state.nextLine}
                    >
                    </InputBase>
                </div>
                <div className="chipLabel">
                    {this.props.show.Reminder ? (
                        <div>
                            <Chip
                                label={this.props.show.Reminder}
                                onDelete={() => this.deleteReminder(this.props.show,this.props.index)}>
                            </Chip>
                        </div>
                    )
                        : (
                            <div>

                            </div>
                        )}

                    {this.props.show.label &&
                        <div>
                            {this.props.show.label.map((option, index) =>

                                <Chip style={{ backgroundColor: this.props.show.Colors }}
                                    label={option}
                                    onDelete={() => this.deleteLabel(this.props.show, this.props.index, index)}

                                ></Chip>
                            )
                            }
                        </div>
                
                                   }
                </div>

                <div className="toolbarAndClose">

                    {this.props.show.Trash ?
                        (
                            <Delete note={this.props.show}
                                index={this.props.index} />

                        )
                        : (

                            <Toolbar className="CardToolbar">
                                <div>
                                    <ReminderComponent r={this.handleReminder}
                                        note={this.props.show}
                                        index={this.props.index} />
                                </div>
                                <div>
                                    <CollaboratorComponent show={this.props.show}
                                        index={this.props.index} />
                                </div>
                                <div>
                                    <ColorComponent clr={this.openPop}
                                        note={this.props.show}
                                        index={this.props.index} />
                                </div>
                                <div>
                                    <ImageComponent />
                                </div>
                                <div>
                                    <ArchiveComponent
                                        show={this.props.show}
                                        index={this.props.index} />
                                </div>

                                <div>
                                    <MoreComponent note={this.props.show} index={this.props.index}
                                        lblVal={this.handleLabel} />
                                </div>

                            </Toolbar>
                        )}
                    <EditNotes open={this.state.edit}
                        show={this.props.show}
                        index={this.props.index}
                        close={this.handleEdit} />
                </div>
            </Card>
        );
    }
}
export default DisplayCard;