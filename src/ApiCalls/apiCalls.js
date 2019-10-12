export const getAllMovies = () => {
  return fetch("https://swapi.co/api/films/").then(res => res.json());
};

export const getAllCharacters = (characters) => {
  return fetch(characters)
  .then(res => res.json())
}

export const getCharacterInfo = (characterUrl) => {
  return fetch(characterUrl)
  .then(res => res.json())
  .then( character => {
    return fetch(character.homeworld)
      .then(res => res.json())
      .then( home => {
        console.log(home.name)
        return home.name
      })
  })

}