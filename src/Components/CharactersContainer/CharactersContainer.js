import React from "react";
import Character from "../Character/Character";
import "./CharactersContainer.css";
import { fetchCharacter } from "../../ApiCalls/apiCalls";

class CharactersContainer extends React.Component {
  constructor({ episode, favoriteCharacter }) {
    super();
    this.favoriteCharacter = favoriteCharacter
    this.state = {
      episode,
      characters: []
    };
  }

  componentDidMount = () => {
    const fetchCharacters = this.state.episode.characters.map(character => {
      return fetchCharacter(character);
    });
    return Promise.all(fetchCharacters).then(characters =>
      this.createCharacterCard(characters)
    )
  };

  createCharacterCard = characters => {
    const characterCards = characters.map(character => {
      return {
        name: character.name,
        species: character.response[0],
        homeworld: character.response[1],
        films: character.response[2],
        characterid: parseInt(character.url.split('/').splice(5,1).pop())
      };
    });
    this.setState({ characters: characterCards });
  };

  render() {
    return (
      <div className="CharactersContainer">
        <h1 className="CharactersContainer-h1">{this.state.episode.opening_crawl}</h1>

        <section className="CharactersContainer-section"> 
          <Character characterInfo={this.state.characters} favoriteCharacter={this.favoriteCharacter}/>
        </section>
      </div>
    );
  }
}

export default CharactersContainer;
