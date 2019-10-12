import React from "react";
import "./Character.css";

const Character = ({ characterInfo }) => {
  console.log('characterInfo', characterInfo)
  return characterInfo.map( character => {
    console.log('character', character)
    const { name, species, homeworld, films } = character
    return (
      <div>
        <h1>{name}</h1>
        <p>{species}</p>
        <p>{homeworld.homeName}</p>
        <p>{homeworld.homePopulation}</p>
        <p>{films}</p>
      </div>
    );
  })
};

// const Character = ({ name, species, homeworld, films }) => {
//   console.log({name, species, homeworld, films})
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{species}</p>
//       <p>{homeworld.name}</p>
//       <p>{homeworld.population}</p>
//       <p>{films}</p>
//     </div>
//   );
// };

export default Character;
