import React from "react";
import { shallow } from "enzyme";
import Character from "./Character";

describe("Character", () => {
  let wrapper;
  let characterInfo = [
    {
      characterid: 1,
      favorite: false,
      films: [
        "The Empire Strikes Back",
        "Revenge of the Sith",
        "Return of the Jedi",
        "A New Hope",
        "The Force Awakens"
      ],
      homeworld: { homeName: "Tatooine", homePopulation: "200000" },
      name: "Luke Skywalker",
      species: "Human"
    }
  ];
  let updateCharacterFavorite = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Character
        characterInfo={characterInfo}
        updateCharacterFavorite={updateCharacterFavorite}
      />
    );
  });

  it("should match the wrapper", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should iterate through the characterInfo property and create a Character Card for each character", () => {
    
  });
});
