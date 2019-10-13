import React from "react";
import "./Character.css";

const Character = ({ characterInfo }) => {
  return characterInfo.map( (character, i) => {
    const { name, species, homeworld, films, characterid } = character
    return (
      <div className="Character" key={characterid}>
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
