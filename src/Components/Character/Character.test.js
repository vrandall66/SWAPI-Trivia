import React from "react";
import { shallow } from "enzyme";
import Character from "./Character";

describe("Character", () => {
  let wrapper;
  let characterInfo = [];
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
});
