import React from "react";
import "./MoviePlanet.css";

const MoviePlanet = ({ movie, updatePlanetModalState, updateCurrentMovie }) => {
  return (
    <div
      key={movie.id}
      className="planet"
      movieData={movie}
      onClick={() => {
        // updatePlanetModalState()
        updateCurrentMovie(movie)
      }
    }
    >
      <h1>{movie.id}</h1>
    </div>
  );
};

export default MoviePlanet;
