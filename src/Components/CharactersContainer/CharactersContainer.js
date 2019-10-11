import React from 'react';

class CharactersContainer extends React.Component {
  constructor({ episode }) {
    super()
    this.state = { episode }
  }
  render() {
    console.log(this.state.episode)
    return(
      <div>
        <h1>{this.state.episode.opening_crawl}</h1>
      </div>
    )
  }
}

export default CharactersContainer;