import React from "react";
import './MoviePlanet.css'

const MoviePlanet = ({ movie }) => {
  console.log('planet', movie)
  return (<div key={movie.id} className="planet">
    <h1>{movie.id}</h1>
  </div>);
};

export default MoviePlanet;
