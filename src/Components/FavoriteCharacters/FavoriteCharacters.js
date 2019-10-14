import React from 'react';
import Character from '../Character/Character'
import '../Character/Character.css'
import './FavoriteCharacters.css'

const FavoriteCharacters = ({ characterInfo, addFavoriteCharacter}) => {

  return (
     <section className="CharactersContainer-section">
      <Character characterInfo={characterInfo} updateCharacterFavorite={addFavoriteCharacter} />
     </section>
  )
}

export default FavoriteCharacters;