import React from 'react'
import "./Character.css"
import { getCharacterInfo } from '../../ApiCalls/apiCalls'


const Character = ({ character }) => {
  console.log('in char', character)
  
  const getFetch = (url) => {
    return getCharacterInfo(url)
    .then( info => info)
    // .then( data => console.log(data.name))
  }
  let homeworldFetch = getFetch(character.homeworld)
   

  return(
    <div>
      <h1>{character.name}</h1>
      <p>{console.log('line19',homeworldFetch.name)}</p>
      <p>{console.log('line20', console.log(getFetch((character.species))), )}</p>

    </div>
  )
}

export default Character;