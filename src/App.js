import React, { Component } from 'react';
import './App.css';
import Assessment from './containers/assessment/assessment';
import Header from './components/header/header';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Assessment />
      </div>
    );
  }
}

export default App;
