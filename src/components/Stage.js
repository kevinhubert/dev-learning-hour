import React from 'react';

class Stage extends React.Component {
  render() {
    const { selectedVideo } = this.props;
    return (
      <div className="stage">
        <iframe
          width="100%"
          height="315"
          src={
            !selectedVideo
              ? 'https://www.youtube.com/embed/hY7m5jjJ9mM'
              : `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
          }
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Stage;
