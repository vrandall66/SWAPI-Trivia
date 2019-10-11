import React from "react";
import "./CharactersContainer.css";

class CharactersContainer extends React.Component {
  constructor({ episode }) {
    super();
    this.state = { episode };
  }
  render() {
    console.log("anything?", this.state.episode);
    return (
      <div className="CharactersContainer">
        <section></section>
        <h1>{this.state.episode.opening_crawl}</h1>
      </div>
    );
  }
}

export default CharactersContainer;
