import React from 'react';
import Header from './Header';
import Stage from './Stage';
import Sidebar from './Sidebar';

import '../App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="l-container">
        <Header />
        <div className="app">
          <Stage />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
