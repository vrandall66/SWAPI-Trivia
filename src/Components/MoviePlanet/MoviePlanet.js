import React from "react";
import "./MoviePlanet.css";

const MoviePlanet = ({ movie, updateCurrentMovie, resetMovieState }) => {
  return (
    <div
      key={movie.id}
      className="planet"
      onClick={() => {
        updateCurrentMovie(movie);
      }}
    >
      <h1>{movie.id}</h1>
    </div>
  );
};

export default MoviePlanet;
