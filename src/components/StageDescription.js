import React from 'react';

const StageDescription = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {selectedVideo.snippet.title}
      {console.log(selectedVideo.snippet)}
    </div>
  );
};

export default StageDescription;
