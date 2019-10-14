import React from 'react';
import Character from '../Character/Character'
import '../Character/Character.css'
import './FavoriteCharacters.css'

const FavoriteCharacters = ({ characterInfo, updateCharacterFavorite}) => {


  return (
     <section className="CharactersContainer-section">
      <Character characterInfo={characterInfo} updateCharacterFavorite={updateCharacterFavorite} />
     </section>
  )
}

export default FavoriteCharacters;