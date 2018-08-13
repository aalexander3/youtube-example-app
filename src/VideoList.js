import React from 'react'
import VideoListItem from './VideoListItem'


const VideoList = (props) => {
  // take videos, map over them and render the components
  const videoMap = props.videos.map(video => (<VideoListItem
    key={video.etag}
    handleClick={props.handleClick}
    title={video.snippet.title}
    image={video.snippet.thumbnails.default.url}
    description={video.snippet.description}
    video={video} />)
  )

  return (
    <div className="four wide column">
      <div className="ui relaxed items">
        {videoMap}
      </div>
    </div>
  )
}

export default VideoList
