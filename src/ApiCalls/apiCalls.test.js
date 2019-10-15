import {
  getAllMovies,
  fetchCharacter,
  fetchSpecies,
  fetchHomeworld,
  fetchAllFilms,
  fetchAllCharacterData
} from "./apiCalls";

describe("getAllMovies", () => {
  const mockResponse = {
    count: 7,
    next: null,
    previous: null,
    results: [{}, {}, {}, {}, {}, {}, {}]
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct URL", () => {
    getAllMovies();

    expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/films/");
  });

  it("Should return an object with 7 movie objects", () => {
    getAllMovies().then(movies => expect(movies).toEqual(mockResponse));
  });
});

describe("fetchCharacter", () => {
  const charURL = "https://swapi.co/api/people/1/";
  const mockResponse = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [
      "https://swapi.co/api/vehicles/14/",
      "https://swapi.co/api/vehicles/30/"
    ],
    starships: [
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/22/"
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.co/api/people/1/"
  };
  const newCharacter = {
    name: "Luke Skywalker",
    homeworld: "https://swapi.co/api/planets/1/",
    species: ["https://swapi.co/api/species/1/"],
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    url: "https://swapi.co/api/people/1/"
  }

  beforeEach(() => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  });

  it("should call fetch with the correct URL", () => {
    window.fetch.mockClear();
    fetchCharacter(charURL);

    expect(window.fetch).toHaveBeenCalledWith(charURL);
  });

  it("Should return an object with character info", () => {

    expect(fetchCharacter(newCharacter)).resolves.toEqual(mockResponse);
  });
});

describe("fetchSpecies", () => {});
