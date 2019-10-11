import React from 'react'
import "./Character.css"


const Character = ({ character }) => {
  console.log('in char', character)
  return(
    <div>
      <h1>{character.name}</h1>
      <p>character</p>

    </div>
  )
}

export default Character;