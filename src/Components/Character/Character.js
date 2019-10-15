import React from "react";
import "./Character.css";
import "../CharactersContainer/CharactersContainer.css"
import notFavorited from '../../images/not-favorite-ds.svg'
import favorited from '../../images/favorited-ds.svg'
import FilmsList from '../FilmsList/FilmsList'

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
        <h1>Name: {name}</h1>
        <p>Species: {species}</p>
        <p>Homeworld: {homeworld.homeName}</p>
        <p>Homeworld Population: {homeworld.homePopulation}</p>
        {<FilmsList films={films}/>}
      </div>
    );
  });
};

export default Character;
