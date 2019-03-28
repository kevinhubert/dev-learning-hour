import React from "react";

class Stage extends React.Component {
  render() {
    const { id, snippet } = this.props.selectedVideo;
    return (
      <div>
        <h3>{!snippet ? "Cat Video" : snippet.title}</h3>
        <iframe
          title="Youtube Video"
          width="100%"
          height="315"
          src={
            !id
              ? "https://www.youtube.com/embed/hY7m5jjJ9mM"
              : `https://www.youtube.com/embed/${id.videoId}`
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
