import React from "react";

const StageDescription = props => {
  return (
    <div>
      {!props.selectedVideoDescription.snippet
        ? "Cat vido description"
        : props.selectedVideoDescription.snippet.description}
    </div>
  );
};

export default StageDescription;
