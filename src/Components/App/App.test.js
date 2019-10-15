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
  });

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
    ];
    wrapper.instance().setState({
      favoriteCharacters: favorites
    });

    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
    // FINISH TESTING THIS
  });

  it("should update state when handleFormSubmit has been called", () => {
    const mockUserInput = {
      name: "Vanessa",
      favQuote: "I know",
      ranking: "Intermediate"
    };

    wrapper.instance().handleFormSubmit(mockUserInput);

    expect(wrapper.state()).toEqual({
      showFormModal: false,
      showPlanetModal: false,
      showUserMenu: false,
      name: "Vanessa",
      favQuote: "I know",
      ranking: "Intermediate",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    });
  });

  it("should be able to reset movie state", () => {
    wrapper.instance().setState({
      showFormModal: true,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {
        id: 5,
        releaseDate: "1980-05-17",
        title: "The Empire Strikes Back",
        url: "https://swapi.co/api/films/2/"
      }
    });

    wrapper.instance().resetMovieState();

    expect(wrapper.state()).toEqual({
      showFormModal: true,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    });
  });

  it("should be able to reset formModal in state", () => {
    wrapper.instance().setState({
      showFormModal: true,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    });

    wrapper.instance().hideFormModal();

    expect(wrapper.state()).toEqual({
      showFormModal: false,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    });
  });

  it("should be able to reset the planetModal in state", () => {
    wrapper.instance().setState({
      showFormModal: false,
      showPlanetModal: true,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    });

    wrapper.instance().updatePlanetModalState();

    expect(wrapper.state()).toEqual({
      showFormModal: false,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    });
  });

  it("should be able to update the userMenu state", () => {
    wrapper.instance().setState({
      showFormModal: false,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    });

    wrapper.instance().updateUserMenuState();

    expect(wrapper.state()).toEqual({
      showFormModal: false,
      showPlanetModal: false,
      showUserMenu: true,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    })
  })

  
});