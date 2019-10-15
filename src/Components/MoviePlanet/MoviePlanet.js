import React from "react";
import "./MoviePlanet.css";

const MoviePlanet = ({
  movie,
  updateCurrentMovie,
  resetMovieState,
  className
}) => {
  let convertToRomanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];
  return (
    <div
      key={movie.id}
      className={`planetImage planet${className}`}
      onClick={() => {
        updateCurrentMovie(movie);
      }}
    >
      <h1 className="planetNumber">{convertToRomanNumerals[movie.id - 1]}</h1>
    </div>
  );
};

export default MoviePlanet;
