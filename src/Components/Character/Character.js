import React from "react";
import "./Character.css";
import notFavorited from "../../images/not-favorite-ds.svg";

const Character = ({ characterInfo, updateCharacterFavorite }) => {
  return characterInfo.map(character => {
    const { name, species, homeworld, films, characterid } = character;

    const favoriteCharacter = character => {
      let {
        name,
        species,
        homeworld,
        films,
        characterid,
        favorite
      } = character;
      favorite = !favorite;
      return { name, species, homeworld, films, characterid, favorite };
    };

    return (
      <div className="Character" key={characterid}>
        <input
          type="image"
          alt="not favorite"
          src={notFavorited}
          onClick={() => updateCharacterFavorite(favoriteCharacter(character))}
        />
        <h1>{name}</h1>
        <p>{species}</p>
        <p>{homeworld.homeName}</p>
        <p>{homeworld.homePopulation}</p>
        <p>{films}</p>
      </div>
    );
  });
};

export default Character;
