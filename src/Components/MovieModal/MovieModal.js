import React from "react";
import "./MovieModal.css";

const MovieModal = ({ currentMovie }) => {
  const { title, id, releaseDate, url } = currentMovie;
  return (
    <div>
      <button type="button">Close</button>
      <h1>{title}</h1>
      <h3>{id}</h3>
      <h5>{releaseDate}</h5>
      <button type="button">View Characters</button>
    </div>
  );
};

export default MovieModal;
