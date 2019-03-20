import React from 'react';

class Stage extends React.Component {
  render() {
    return (
      <div className="l-stage">
        <div className="l-stage__video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/hY7m5jjJ9mM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="l-stage__info">
          <div className="l-stage__info--title">Video Title</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo,
          temporibus asperiores ratione dolores vel unde dicta molestias
          reiciendis tempore labore, nihil eligendi, cum minus. Quibusdam quia
          veritatis tempora temporibus.
        </div>
      </div>
    );
  }
}

export default Stage;
