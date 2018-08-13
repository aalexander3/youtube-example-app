import React from 'react';

const VideoDetail = (props) => {
  
  const videoUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`
  const { title, description } = props.video.snippet

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={videoUrl} title={title} frameBorder="0" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
