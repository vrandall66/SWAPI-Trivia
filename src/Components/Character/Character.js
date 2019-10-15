import React from "react";
import "./Character.css";
import "../CharactersContainer/CharactersContainer.css"
import notFavorited from '../../images/not-favorite-ds.svg'
import favorited from '../../images/favorited-ds.svg'

const Character = ({ characterInfo, updateCharacterFavorite }) => {
  return characterInfo.map( (character) => {
    const { name, species, homeworld, films, characterid, favorite } = character
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
          className='favoriteIcon'
          type='image' 
          alt='favoriteIcon' 
          src={favorite ? favorited : notFavorited} 
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
