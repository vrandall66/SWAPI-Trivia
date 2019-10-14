import React from "react";
import { shallow } from "enzyme";
import CharactersContainer from "./CharactersContainer";

describe("CharactersContainer", () => {
  let wrapper;
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
    wrapper = shallow(
      <CharactersContainer
        episode={episode}
        addFavoriteCharacter={addFavoriteCharacter}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
