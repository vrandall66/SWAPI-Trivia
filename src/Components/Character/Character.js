import React from "react";
import "./Character.css";

const Character = ({ characterInfo }) => {
  return characterInfo.map( (character, i) => {
    const { name, species, homeworld, films } = character
    return (
      <div className="Character" key={i}>
        <button type="button">Favorite</button>
        <h1>{name}</h1>
        <p>{species}</p>
        <p>{homeworld.homeName}</p>
        <p>{homeworld.homePopulation}</p>
        <p>{films}</p>
      </div>
    );
  })
};

export default Character;
