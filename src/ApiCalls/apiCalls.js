export const getAllMovies = () => {
  return fetch("https://swapi.co/api/films/").then(res => res.json());
};

export const fetchCharacter = (character) => {
  return fetch(character)
  .then(res => res.json())
  .then ( character => {
      const { name, homeworld, species, films } = character
      return fetchSpecies(species)
      .then(lifeForm => ({ name, homeworld, lifeForm, films}))
    })
    // .then(character => {
    //   const { name, homeworld, species, films } = character
    //   return fetchHomeworld(homeworld)
    //     .then(homeworld => ({ name, homeworld, species, films }))
    // })
  }
  
  const fetchSpecies = (url) => {
  return fetch(...url)
    .then( res => res.json())
    .then(lifeForm => lifeForm.name)
}

// const fetchHomeworld = (url) => {
//   return fetch(url)
//     .then(res => res.json())
//     .then(home => home.name)
// }

export const getCharacterInfo = (characterUrl) => {
  return fetch(characterUrl)
  .then(res => res.json())
  .then( character => {
    return fetch(character.homeworld)
      .then(res => res.json())
      .then( home => {
        return home.name
      })
  })

}