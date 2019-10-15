import React from 'react';
import { Link } from 'react-router-dom'
import Character from '../Character/Character'
import '../Character/Character.css'
import './FavoriteCharacters.css'

const FavoriteCharacters = ({ characterInfo, addFavoriteCharacter}) => {

  return (
    <div className='FavoriteCharacters'>
      <div className='toMoviesBtn__div'>
        <Link to="/movies">
          <button 
          type='button'
          className='backToMovies'>Back To All Episodes</button>
        </Link>
      </div>
     <section className="CharactersContainer-section">
      <Character characterInfo={characterInfo} updateCharacterFavorite={addFavoriteCharacter} />
     </section>
    </div>
  )
}

export default FavoriteCharacters;