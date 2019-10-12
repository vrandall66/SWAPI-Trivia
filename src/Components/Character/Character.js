import React from "react";
import "./Character.css";

const Character = ({ characterInfo }) => {
  console.log('characterInfo', characterInfo)
  return characterInfo.map( character => {
    console.log('character', character)
    const { name, species, homeworld, films } = character
    return (
      <div className="Character">
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
