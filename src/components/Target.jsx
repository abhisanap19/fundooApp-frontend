
// import React, { Component } from 'react';
// import Item from './Item';
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd'


// class App extends Component {
//   state = {
//     items: [
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' },
//       { id: 4, name: 'Item 4' },
//     ],
   
  
 
//   }
//   render() {
//     return (
//       <div className="App">
        
//         <div className="App-intro">
//           <div className="app-container">
//             <div className="item-container">
//               {this.state.items.map((item, index) => (
//                 <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
//               ))}
//             </div>

//           </div>
         
//         </div>
//       </div>
//     );
//   }
// }

// export default DragDropContext(HTML5Backend)(App);