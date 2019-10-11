import React from "react";
import MoviePlanet from "../MoviePlanet/MoviePlanet";
import "./MoviesContainer.css";

const MoviesContainer = ({ movies, updatePlanetModalState, reactModal, updateCurrentMovie }) => {
  console.log(movies);
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
        movie={movie}
        key={index}
        updatePlanetModalState={updatePlanetModalState}
        updateCurrentMovie={updateCurrentMovie}
      />
    );
  });

  return (
    <div className="MoviesContainer">
      <h1>Episodes</h1>
      <div className="MoviesContainer-planets">{moviePlanets}</div>
      {reactModal}
    </div>
  );
};

export default MoviesContainer;
