import React from 'react';
import { Link } from 'react-router-dom'
import Character from '../Character/Character'
import '../Character/Character.css'
import './FavoriteCharacters.css'
import "../CharactersContainer/CharactersContainer.css"


const FavoriteCharacters = ({ characterInfo, addFavoriteCharacter}) => {

  return (
    <div className='FavoriteCharacters'>
      <div className='toMoviesBtn__div'>
        <div className='back--episodes--saber'>
          <Link to="/movies">
            <div className='saberButt sbleft'></div>
          </Link>
          <Link to="/movies">
            <button 
            type='button'
            className='backToMovies'>Back To All Episodes</button>
          </Link>
        </div>
      </div>
      <h3 className='noFavText'>Favorite Characters:</h3>
     <section className="CharactersContainer-section">
     { characterInfo.length ?  <Character characterInfo={characterInfo} updateCharacterFavorite={addFavoriteCharacter} /> : <h3 className='noFavText'>No Character's Favorited</h3>
     }
     </section>
    </div>
  )
}

export default FavoriteCharacters;