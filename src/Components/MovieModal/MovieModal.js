import React from "react";
import { Link } from "react-router-dom";
import "./MovieModal.css";
import lightsaberClose from "../../images/LightsaberCross.png";

const MovieModal = ({ currentMovie, updatePlanetModalState }) => {
  const { title, id, releaseDate, url } = currentMovie;
  return (
    <div className="MovieModalContainer">
      <div className='MovieModalContainer__div'>
        <input
          type="image"
          src={lightsaberClose}
          alt="Crossed lightsabers - close"
          className="MovieModal__btn--close"
          onClick={updatePlanetModalState}
        />
      </div>
      <h1 className="MovieModal__h1">{title}</h1>
      <h3 className="MovieModal__h3">Episode: {id}</h3>
      <h5 className="MovieModal__h5">Release Date:<br/> {releaseDate}</h5>
      <Link to={`/movies/${id}`}>
        <button
          type="button"
          className="MovieModal__btn--characters"
          onClick={updatePlanetModalState}
        >
          View Characters
        </button>
      </Link>
    </div>
  );
};

export default MovieModal;
