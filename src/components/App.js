import React, { Component } from 'react';
import MainHead from './MainHead';
import './App.scss';
import Introduction from './Introduction';
import ShrineDescription from './ShrineDescription';
import ShrinePresentation from './ShrinePresentation';
import Footer from './Footer';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <MainHead />
        <Introduction />
        <ShrinePresentation />
        <ShrineDescription />
        <Footer />
      </div>
    );
  }
}

export default App;