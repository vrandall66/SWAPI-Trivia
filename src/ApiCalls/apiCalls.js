let allMovies;
export const getAllMovies = () => {
  return fetch("https://swapi.co/api/films/")
    .then(res => res.json())
    .then(data => {
      allMovies = data.results;
      logAllMovies();
    })
}

const logAllMovies = () => {
  return allMovies;
}