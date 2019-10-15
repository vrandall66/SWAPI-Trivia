import React from "react";
import { shallow } from "enzyme";
import FavoriteCharacters from "./FavoriteCharacters";

describe("FavoriteCharacters", () => {
  let wrapper;
  let favorites = [];
  let addFavoriteCharacter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteCharacters
        characterInfo={favorites}
        addFavoriteCharacter={addFavoriteCharacter}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
