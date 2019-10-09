export const getAllMovies = () => {
  return fetch("https://swapi.co/api/films/")
    .then(res => res.json())
}