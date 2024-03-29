import React from "react";
import MoviePlanet from "../MoviePlanet/MoviePlanet";
import "./MoviesContainer.css";

const MoviesContainer = ({
  movies,
  updatePlanetModalState,
  reactModal,
  updateCurrentMovie,
  resetMovieState
}) => {
  const sortMovies = movies => {
    return movies.sort((a, b) => {
      return a.id - b.id;
    });
  };

  const createMovieObjects = () => {
    const planets = movies.map(movie => {
      return {
        title: movie.title,
        id: movie.episode_id,
        releaseDate: movie.release_date,
        url: movie.url
      };
    });
    return sortMovies(planets);
  };

  const moviePlanets = createMovieObjects().map((movie, index) => {
    return (
      <MoviePlanet
        className={`planetImage planetImage${index + 1}`}
        movie={movie}
        key={index}
        updatePlanetModalState={updatePlanetModalState}
        updateCurrentMovie={updateCurrentMovie}
        resetMovieState={resetMovieState}
      />
    );
  });

  return (
    <div className="MoviesContainer">
      <h1 className="MoviesContainer__h1--Episodes">Episodes</h1>
      <div className="MoviesContainer-planets">{moviePlanets}</div>
      {reactModal}
    </div>
  );
};

export default MoviesContainer;
