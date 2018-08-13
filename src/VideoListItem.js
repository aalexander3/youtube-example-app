import React from 'react'

const VideoListItem = ({title, image, description, handleClick, video}) => {


  const sendVideo = () => {
    // send a whole video object use that to set state
    handleClick(video)
  }

  return (
    <div className="item" onClick={sendVideo} >
      <div className="ui small image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h5>{title.slice(0,30)}...</h5>
        <p style={{lineHeight: '0.7em'}}>{description.slice(0,40)}...</p>
      </div>
    </div>
  )
}

export default VideoListItem


// const imageUrl = video.snippet.thumbnails.default.url
