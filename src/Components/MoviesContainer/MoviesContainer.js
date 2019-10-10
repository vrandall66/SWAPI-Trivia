import React from "react";
import MoviePlanet from "../MoviePlanet/MoviePlanet";
import './MoviesContainer.css'

const MoviesContainer = ({ movies }) => {
  const sortMovies = movies => {
    return movies.sort((a, b) => {
      return a.id - b.id;
    });
  };

  const createMovieObjects = () => {
    const planets = movies.map(movie => {
      console.log('container', movie)
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
    return <MoviePlanet movie={movie} key={index} />;
  });

  return (
    <div className="MoviesContainer">
      <h1>Episodes</h1>
      <div className="MoviesContainer-planets">{moviePlanets}</div>
    </div>
  );
};

export default MoviesContainer;
