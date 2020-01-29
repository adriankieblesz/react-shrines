import React, { Component } from 'react';
import Head from './Head.js';
import './App.scss';
import Introduction from './Introduction.js';
import ShrineDescription from './ShrineDescription.js';
import ShrinePresentation from './ShrinePresentation.js';


class App extends Component {
  state = {

  }




  render() {
    return (
      <div className="App">
        <Head />
        <Introduction />
        <ShrinePresentation />
        <ShrineDescription />

      </div>
    );
  }
}

export default App;
