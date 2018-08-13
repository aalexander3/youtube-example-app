import React, { Component } from 'react';
import SearchBar from './SearchBar'
import YouTubeContainer from './YouTubeContainer'
import keys from './keys';
import items from './items'

class App extends Component {
  state = {
    term: 'paul bomba',
    videos: items,
    selectedVideo: items[0]
  }

  componentDidMount() {
    // lifecycle that will be called after the initial render
    this.sendFetch()
  }

  // comparing changes in state
  // deciding whether or not to re-render the page

  // onClick of a list item turn that item into the selected video
  selectVideo = video => {
    // set State of selected video
    this.setState({
      selectedVideo: video
    })
  }


  handleClick = (e) => {
    // grab the input
    // send a fetch request with the term
    // take the response and set the state of videos
    e.preventDefault()
    this.sendFetch()
  }

  sendFetch = () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.term}&type=video`
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          videos: json.items,
          selectedVideo: json.items[0]
        })
    })
  }

  handleChange = (e) => {
    // setState of term
    this.setState({
      term: e.target.value
    }, ()=>console.log(this.state.term))
  }

  render() {
    return (
      <div className="ui grid container" >
        <SearchBar handleClick={ this.handleClick } handleChange={ this.handleChange } searchTerm={this.state.term} />
        <YouTubeContainer videos={ this.state.videos } selectedVideo={ this.state.selectedVideo } selectVideo={ this.selectVideo } />
      </div>
    );
  }
}

export default App;


//`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${searchTerm}&type=video`
