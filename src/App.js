// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

const handleUpdate = () => {
  console.log("sasasasasasa")
}

function App() {
  return (
    <div className="App">
      <ReactFormBuilder
      onChange={handleUpdate}
      />
    </div>
  );
}

export default App;
