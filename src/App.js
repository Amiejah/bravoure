import React, { Component } from 'react';
import Header from './components/Header';
import Media from './components/Media/index';
import './styling/index.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Bravoure app"></Header>
        <div className="container">
          {/* For now We are hardcoding the name, but this could just as well be done with an input[search]? */}
          <Media search="insecure" season='1'></Media>
        </div>
      </div>
    );
  }
};