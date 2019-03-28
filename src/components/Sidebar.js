import React from 'react';
import ListItem from './ListItem';

class Sidebar extends React.Component {
  render() {
    const { videoList, onVideoSelect } = this.props;
    return (
      <div className="sidebar">
        {videoList.map(video => {
          return <ListItem video={video} onVideoSelect={onVideoSelect} />;
        })}
      </div>
    );
  }
}

export default Sidebar;
