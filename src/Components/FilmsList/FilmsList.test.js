import React from "react";
import { shallow } from "enzyme";
import FilmsList from "./FilmsList";

describe("FilmsList", () => {
  let wrapper;
  let films = [
    "The Empire Strikes Back",
    "Attack of the Clones",
    "The Phantom Menace",
    "Revenge of the Sith",
    "Return of the Jedi",
    "A New Hope",
    "The Force Awakens"
  ];

  beforeEach(() => {
    wrapper = shallow(<FilmsList films={films} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
