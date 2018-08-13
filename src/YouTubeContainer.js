import React, { Component } from 'react';

import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class YouTubeContainer extends Component {

  // turn youtube back into a state-full component
  // does it need to be a react component?
    // does my component need state?

  render(){
    return (
      <div className="ui grid container">
        <VideoDetail video={this.props.selectedVideo} />
        <VideoList videos={this.props.videos} handleClick={this.props.selectVideo} />
      </div>
    )
  }
}

export default YouTubeContainer;
