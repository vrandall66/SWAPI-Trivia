import React from "react";
import { shallow } from "enzyme";
import MoviePlanet from "./MoviePlanet";

describe("MoviePlanet", () => {
  let wrapper;
  let movie = {
    id: 0,
    releaseDate: "",
    title: ""
  };
  let index = 0;
  let updatePlanetModalState = jest.fn();
  let updateCurrentMovie = jest.fn();
  let resetMovieState = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MoviePlanet
        movie={movie}
        key={index}
        updatePlanetModalState={updatePlanetModalState}
        updateCurrentMovie={updateCurrentMovie}
        resetMovieState={resetMovieState}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
