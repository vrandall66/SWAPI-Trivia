import React from "react";
import { shallow } from "enzyme";
import MovieModal from "./MovieModal";

describe("MovieModal", () => {
  let wrapper;
  let currentMovie = {
    id: 1,
    releaseDate: "",
    title: "",
    url: ""
  };
  let updatePlanetModalState = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MovieModal
        currentMovie={currentMovie}
        updatePlanetModalState={updatePlanetModalState}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
