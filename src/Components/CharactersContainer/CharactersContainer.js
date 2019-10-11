import React from "react";
import "./CharactersContainer.css";
import { thisExpression } from "@babel/types";

class CharactersContainer extends React.Component {
  constructor({ episode }) {
    super();
    this.state = { episode };
  }

  getCharacters = (characters) => {
    const fetchCharacters = characters.map( character => {
      return fetch(character)
      .then( response => response.json())
    
    })

    return Promise.all(fetchCharacters)
    .then( data => console.log(data))
  }
  render() {
    this.getCharacters(this.state.episode.characters)
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
