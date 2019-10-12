import React from "react";
// import Character from "../Character/Character"
import "./CharactersContainer.css";
import { fetchCharacter } from '../../ApiCalls/apiCalls'

class CharactersContainer extends React.Component {
  constructor({ episode }) {
    super();
    this.state = { 
      episode,
      characters: []
     };
  }

  componentDidMount = () => {
    const fetchCharacters = this.state.episode.characters.map(character => {
      return fetchCharacter(character)
    })
      return Promise.all(fetchCharacters)
        .then(characters => {this.setState({ characters }, console.log(this.state.characters) )})
  }

  render() {
    return (
      <div className="CharactersContainer">
        <h1>{this.state.episode.opening_crawl}</h1>
        <>
          {/* {this.getCharacter()} */}
        </>
      </div>
    );
  }
}

export default CharactersContainer;
