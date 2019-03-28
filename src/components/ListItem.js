import React from 'react';

class ListItem extends React.Component {
  render() {
    const { thumbnails, title, description } = this.props.video.snippet;

    return (
      <div
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="list-item"
      >
        <div className="list-item__image">
          <img src={thumbnails.default.url} alt="" />
        </div>
        <div className="list-item__desc">
          <div className="list-item__desc--title">{title}</div>
        </div>
      </div>
    );
  }
}

export default ListItem;
