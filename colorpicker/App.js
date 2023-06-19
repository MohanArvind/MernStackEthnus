import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import ColorPicker from './colorpicker'

function App() {
  return (
    <div className="App container">
      <h3>Welcome to colour picker!</h3>
      <h5>Tap the box to select any colour of your choice.</h5>
        <ColorPicker/>  
    </div>
  );
}
 
export default App;