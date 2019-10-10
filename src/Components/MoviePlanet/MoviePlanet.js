import React from "react";
import "./MoviePlanet.css";

const MoviePlanet = ({ movie, updatePlanetModalState }) => {
  console.log("planet", movie);
  return (
    <div key={movie.id} className="planet" onClick={updatePlanetModalState}>
      <h1>{movie.id}</h1>
    </div>
  );
};

export default MoviePlanet;
