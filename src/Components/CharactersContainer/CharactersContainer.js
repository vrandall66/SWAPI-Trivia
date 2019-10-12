import React from "react";
import Character from "../Character/Character"
import "./CharactersContainer.css";
import { getAllCharacters } from '../../ApiCalls/apiCalls'

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
      return getAllCharacters(character)
    })
      return Promise.all(fetchCharacters)
        .then(characters => this.setState({ characters } ))
  }

  getCharacter = () => {
    return this.state.characters.map( character => <Character character={character} />)
  }

  render() {
    return (
      <div className="CharactersContainer">
        <h1>{this.state.episode.opening_crawl}</h1>
        <>
          {this.getCharacter()}
        </>
      </div>
    );
  }
}

export default CharactersContainer;
