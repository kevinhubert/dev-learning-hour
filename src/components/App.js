import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Stage from './Stage';
import StageDescription from './StageDescription';

import '../App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null,
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

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container">
        <Header onTermSubmit={this.onTermSubmit} />

        <div className="app">
          <Stage selectedVideo={this.state.selectedVideo} />
          <StageDescription selectedVideo={this.state.selectedVideo} />
          <Sidebar
            videoList={this.state.videoList}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
