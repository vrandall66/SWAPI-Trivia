import React from "react";
import Character from "../Character/Character";
import "./CharactersContainer.css";
import { fetchCharacter } from "../../ApiCalls/apiCalls";

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
        films: character.response[2]
      };
    });
    this.setState({ characters: characterCards });
  };

  // buildCharacterCards = () => {
  //   return this.state.characters.map((character, i) => {
  //     return <Character characterInfo={character} key={i}/>;
  //   });
  // };

  render() {
    // let characters = this.state.characters.map((character, i) => {
    //   return <Character characterInfo={character} key={i} />;
    // })
    return (
      <div className="CharactersContainer">
        <h1>{this.state.episode.opening_crawl}</h1>

        <> <Character characterInfo={this.state.characters} /> </>
      </div>
    );
  }
}

export default CharactersContainer;
