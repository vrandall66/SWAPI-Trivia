import React from "react";
import MoviePlanet from "../MoviePlanet/MoviePlanet";
import "./MoviesContainer.css";
import episodeI from "../../images/SWEpisode1.jpg";
import episodeII from "../../images/SWEpisode2.jpg";
import episodeIII from "../../images/SWEpisode3.jpg";
import episodeIV from "../../images/SWEpisode4.jpg";
import episodeV from "../../images/SWEpisode5.jpg";
import episodeVI from "../../images/SWEpisode6.jpg";
import episodeVII from "../../images/SWEpisode7.jpg";

const MoviesContainer = ({
  movies,
  updatePlanetModalState,
  reactModal,
  updateCurrentMovie,
  resetMovieState
}) => {
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

  const movieImages = [
    episodeI,
    episodeII,
    episodeIII,
    episodeIV,
    episodeV,
    episodeVI,
    episodeVII
  ];

  const moviePlanets = createMovieObjects().map((movie, index) => {
    return (
      <MoviePlanet
        movie={movie}
        key={index}
        updatePlanetModalState={updatePlanetModalState}
        updateCurrentMovie={updateCurrentMovie}
        resetMovieState={resetMovieState}
      />
    );
  });

  return (
    <div className="MoviesContainer">
      <h1 className="MoviesContainer__h1--Episodes">Episodes</h1>
      <div className="MoviesContainer-planets">{moviePlanets}</div>
      {reactModal}
    </div>
  );
};

export default MoviesContainer;
