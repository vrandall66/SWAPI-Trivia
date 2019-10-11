import React from "react";
import { Link } from "react-router-dom";
import "./MovieModal.css";

const MovieModal = ({ currentMovie, updatePlanetModalState }) => {
  const { title, id, releaseDate, url } = currentMovie;
  return (
    <div>
      <button type="button" onClick={updatePlanetModalState}>
        Close
      </button>
      <h1>{title}</h1>
      <h3>{id}</h3>
      <h5>{releaseDate}</h5>
      <Link to={`/movies/${id}`}>
        <button type="button" onClick={updatePlanetModalState}>
          View Characters
        </button>
      </Link>
    </div>
  );
};

export default MovieModal;
