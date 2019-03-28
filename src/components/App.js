import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Stage from './Stage';

import '../App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: '',
      videoList: []
    };
  }
  onTermSubmit = async term => {
    const KEY = 'AIzaSyD7n_rS8LNr6lAhVlj-AUPUEVswFcEh-Ww';
    const currentQuery = 'cats';

    const getVideos = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&maxResults=5&q=${term}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          // currentVideo: `https:/www.youtube.com/v/${res.items[0].id.videoId}`,
          videoList: res.items
        })
      );
  };

  onVideoSelect = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="container">
        <Header onTermSubmit={this.onTermSubmit} />

        <div className="app">
          <Stage currentVideo={this.state.currentVideo} />
          <Sidebar
            videoList={this.state.videoList}
            onVideoClick={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
