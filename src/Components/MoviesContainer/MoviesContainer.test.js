import React from "react";
import { shallow } from "enzyme";
import MoviesContainer from "./MoviesContainer";
import MovieModal from "../MovieModal/MovieModal";
import ReactModal from "react-modal";

describe("MoviesContainer", () => {
  let wrapper;
  let allMovies = [];
  let updatePlanetModalState = jest.fn();
  let updateCurrentMovie = jest.fn();
  let resetMovieState = jest.fn();
  let showPlanetModal = false;
  let currentMovie = {};

  beforeEach(() => {
    wrapper = shallow(
      <MoviesContainer
        movies={allMovies}
        updatePlanetModalState={updatePlanetModalState}
        updateCurrentMovie={updateCurrentMovie}
        className="MoviesContainer"
        resetMovieState={resetMovieState}
        reactModal={
          <ReactModal
            isOpen={showPlanetModal}
            style={{ overlay: {}, content: {} }}
          >
            <MovieModal
              currentMovie={currentMovie}
              updatePlanetModalState={updatePlanetModalState}
            />
          </ReactModal>
        }
      />
    );
  });

  it("should match the snapshot()", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
