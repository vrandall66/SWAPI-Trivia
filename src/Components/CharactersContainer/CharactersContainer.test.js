import React from "react";
import { shallow } from "enzyme";
import CharactersContainer from "./CharactersContainer";
import ScrollingText from "../ScrollingText/ScrollingText";
import Character from "../Character/Character";

describe("CharactersContainer", () => {
  let wrapper1;
  let wrapper2;
  let BB8Loading;
  let episode = {
    characters: [],
    created: "",
    director: "",
    edited: "",
    episode_id: 0,
    opening_crawl: "",
    planets: [],
    producer: "",
    releaseDate: "",
    species: [],
    starships: [],
    title: "The Phantom Menace",
    url: "",
    vehicles: []
  };
  let addFavoriteCharacter = jest.fn();

  beforeEach(() => {
    wrapper1 = shallow(
      <CharactersContainer
        episode={episode}
        addFavoriteCharacter={addFavoriteCharacter}
      />
    );
  });

  wrapper2 = shallow(
    <div className="CharactersContainer">
      <ScrollingText episode={episode} />
      <section className="CharactersContainer-section">
        {episode.characters.length === 0 ? (
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

  it("should match the snapshot when menu is collapsed", () => {
    expect(wrapper1).toMatchSnapshot();
  });

  it("should match the snapshot when menu is open", () => {
    expect(wrapper2).toMatchSnapshot();
  });

  it("should update character favorites", () => {
    const mockState = {
      episode,
      characters: [
        {
          name: "Yoda",
          species: "Yoda's species",
          homeworld: {
            homeName: "unknown",
            homePopulation: "unknown"
          },
          films: [
            "The Empire Strikes Back",
            "Attack of the Clones",
            "The Phantom Menace",
            "Revenge of the Sith",
            "Return of the Jedi"
          ],
          characterid: 20,
          favorite: true
        },
        {
          name: "R2-D2",
          species: "Droid",
          homeworld: {
            homeName: "Naboo",
            homePopulation: 4500000000
          },
          films: [
            "The Empire Strikes Back",
            "Attack of the Clones",
            "The Phantom Menace",
            "Revenge of the Sith",
            "Return of the Jedi",
            "A New Hope",
            "The Force Awakens"
          ],
          characterid: 3,
          favorite: true
        },
        {
          name: "Leia Organa",
          species: "Human",
          homeworld: {
            homeName: "Alderaan",
            homePopulation: 2000000000
          },
          films: [
            "The Empire Strikes Back",
            "Revenge of the Sith",
            "Return of the Jedi",
            "A New Hope",
            "The Force Awakens"
          ],
          characterid: 5,
          favorite: true
        }
      ],
      remainingCharacters: []
    };

    let newUnFavorite = {
      characterid: 5,
      favorite: false,
      name: "Leia Organa",
      films: [
        "The Empire Strikes Back",
        "Revenge of the Sith",
        "Return of the Jedi",
        "A New Hope",
        "The Force Awakens"
      ],
      species: "Human",
      homeworld: {
        homeName: "Alderaan",
        homePopulation: 2000000000
      }
    };

    wrapper1.instance().setState(mockState);

    wrapper1.instance().updateCharacterFavorite(newUnFavorite);

    expect(wrapper1.state().characters).toEqual([
      {
        characterid: 20,
        favorite: true,
        films: [
          "The Empire Strikes Back",
          "Attack of the Clones",
          "The Phantom Menace",
          "Revenge of the Sith",
          "Return of the Jedi"
        ],
        homeworld: {
          homeName: "unknown",
          homePopulation: "unknown"
        },
        name: "Yoda",
        species: "Yoda's species"
      },
      {
        characterid: 3,
        favorite: true,
        films: [
          "The Empire Strikes Back",
          "Attack of the Clones",
          "The Phantom Menace",
          "Revenge of the Sith",
          "Return of the Jedi",
          "A New Hope",
          "The Force Awakens"
        ],
        homeworld: {
          homeName: "Naboo",
          homePopulation: 4500000000
        },
        name: "R2-D2",
        species: "Droid"
      },
      {
        characterid: 5,
        favorite: false,
        films: [
          "The Empire Strikes Back",
          "Revenge of the Sith",
          "Return of the Jedi",
          "A New Hope",
          "The Force Awakens"
        ],
        homeworld: {
          homeName: "Alderaan",
          homePopulation: 2000000000
        },
        name: "Leia Organa",
        species: "Human"
      }
    ]);
  });
});
