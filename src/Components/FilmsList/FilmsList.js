import React from 'react';
import { Link } from 'react-router-dom';
import './FilmsList.css'

const FilmsList = ({films}) => {
  const filmsToLi = films.map( film => <li className='filmLi'>{film}</li>)
  
  return (
    <ul className='filmUl'>
      <li className='filmLi'>Also Seen In:</li>
      {filmsToLi}
    </ul>
  )
}

export default FilmsList