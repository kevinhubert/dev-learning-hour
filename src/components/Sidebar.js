import React from "react";
import ListItem from "./ListItem";

class Sidebar extends React.Component {
  render() {
    const { videos } = this.props;
    return (
      <div className="sidebar">
        {videos.map(video => {
          return (
            <ListItem onVideoSelect={this.props.onVideoSelect} video={video} />
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
