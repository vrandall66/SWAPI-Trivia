import React from 'react';
import './Home.css';
import deathStar from '../../images/DeathStar.png'

const Home = () => {
  return(
    <div>
      <img src={deathStar} alt="Death Star Ship" className="deathStar-Home"/>
    </div>
  )
}

export default Home;