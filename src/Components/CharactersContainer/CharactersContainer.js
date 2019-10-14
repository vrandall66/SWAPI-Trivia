import React from "react";
import Character from "../Character/Character";
import ScrollingText from "../ScrollingText/ScrollingText";
import BB8Loading from "../../../src/images/BB8Loading.gif";
import "./CharactersContainer.css";
import { fetchCharacter } from "../../ApiCalls/apiCalls";

class CharactersContainer extends React.Component {
  constructor({ episode, addFavoriteCharacter, checkFavoriteStatus }) {
    super();
    this.addFavoriteCharacter = addFavoriteCharacter;
    this.checkFavoriteStatus = checkFavoriteStatus;
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
    );
  };

  createCharacterCard = characters => {
    const characterCards = characters.map(character => {
      return {
        name: character.name,
        species: character.response[0],
        homeworld: character.response[1],
        films: character.response[2],
        characterid: parseInt(character.url.split('/').splice(5,1).pop()),
        favorite: this.checkFavoriteStatus(parseInt(character.url.split('/').splice(5, 1).pop()))
      };
    });
    this.setState({ characters: characterCards });
  };

  updateCharacterFavorite = favoriteCharacter => {
    const updatedCharacters = this.state.characters;
    const characterIndex = updatedCharacters
      .map(character => character.characterid)
      .indexOf(favoriteCharacter.characterid);
    updatedCharacters.splice(characterIndex, 1, favoriteCharacter);
    this.setState({ characters: updatedCharacters });
    this.addFavoriteCharacter(favoriteCharacter);
  };

  render() {
    return (
      <div className="CharactersContainer">
        <ScrollingText episode={this.state.episode} />
        <section className="CharactersContainer-section">
          {this.state.characters.length === 0 ? (
            <div className="BB8--Parent-Container">
              <div className="BB8">
                <div className="BB8--loading">
                  <h1>Loading Characters</h1>
                  <img
                    src={BB8Loading}
                    alt="Loading GIF"
                    className="MoviesContainer-loading"
                  />
                </div>
              </div>
            </div>
          ) : (
            <Character
              characterInfo={this.state.characters}
              updateCharacterFavorite={this.updateCharacterFavorite}
            />
          )}
        </section>
      </div>
    );
  }
}

export default CharactersContainer;
