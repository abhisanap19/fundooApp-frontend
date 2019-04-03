// import React, { Component } from 'react';
// import { DragSource } from 'react-dnd';


// const itemSource = {
//   beginDrag(props) {
//     console.log('dragging');
//     return props.note;
//   },
//   endDrag(props, monitor, component) {
//     if (!monitor.didDrop()) {
//       return;
//     }

//     return props.handleDrop(props.node._id);
//   }
// }

// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     connectDragPreview: connect.dragPreview(),
//     isDragging: monitor.isDragging(),
//   }
// }

// class Item extends Component {
//   render() {
//     const { isDragging, connectDragSource,note } = this.props;
//     const opacity = isDragging ? 0 : 1;

//     return connectDragSource(
//       <div className="note" style={{ opacity }}>
//         <span>{note._id}</span>
//       </div>
//     );
//   }
// }

// export default DragSource('item', itemSource, collect)(Item);
