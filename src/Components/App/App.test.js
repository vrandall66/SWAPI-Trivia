import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the wrapper", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be able to add a favorite character", () => {
    let character = {
      name: "R2-D2",
      species: "Droid",
      homeworld: {
        homeName: "Naboo",
        homePopulation: "4500000000"
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
    };

    wrapper.instance().addFavoriteCharacter(character);

    expect(wrapper.state()).toEqual({
      allMovies: [],
      currentMovie: {},
      favQuote: "",
      favoriteCharacters: [
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
          homeworld: { homeName: "Naboo", homePopulation: "4500000000" },
          name: "R2-D2",
          species: "Droid"
        }
      ],
      name: "",
      ranking: "",
      showFormModal: true,
      showPlanetModal: false,
      showUserMenu: false
    });
  });

  it("should not add favorite character if character.favorite is false", () => {
    let character = {
      name: "R2-D2",
      species: "Droid",
      homeworld: {
        homeName: "Naboo",
        homePopulation: "4500000000"
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
      favorite: false
    };

    wrapper.instance().addFavoriteCharacter(character);

    expect(wrapper.state()).toEqual({
      allMovies: [],
      currentMovie: {},
      favQuote: "",
      favoriteCharacters: [],
      name: "",
      ranking: "",
      showFormModal: true,
      showPlanetModal: false,
      showUserMenu: false
    });
  })

  it("should be able to remove a favorite character from state", () => {
    let favorites = [
      {
      name: "R2-D2",
      species: "Droid",
      homeworld: {
        homeName: "Naboo",
        homePopulation: "4500000000"
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
      name: "Darth Vader",
      species: "Human",
      homeworld: {
        homeName: "Tatooine",
        homePopulation: 200000
      },
      films: [
        "The Empire Strikes Back",
        "Revenge of the Sith",
        "Return of the Jedi",
        "A New Hope"
      ],
      characterid: 4,
      favorite: true
    }
  ]
    wrapper.instance.setState({
      favoriteCharacters: favorites
    })

    
  })
});
