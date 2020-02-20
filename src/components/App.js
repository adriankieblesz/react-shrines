import React, { Component } from 'react';
import MainHead from './MainHead.js';
import './App.scss';
import Introduction from './Introduction.js';
import ShrineDescription from './ShrineDescription.js';
import ShrinePresentation from './ShrinePresentation.js';



class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <MainHead />
        <Introduction />
        <ShrinePresentation />
        <ShrineDescription />
      </div>
    );
  }
}

export default App;