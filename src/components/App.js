import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Stage from './Stage';

import '../App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Youtube took my $$$" />
        <div className="app">
          <div className="stage">
            <Stage />
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
