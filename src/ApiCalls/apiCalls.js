export const getAllMovies = () => {
  return fetch("https://swapi.co/api/films/").then(res => res.json());
};

export const fetchCharacter = (character) => {
  console.log(window.location.href)
  return fetch(character)
  .then(res => res.json())
  .then ( character => {
    const { name, homeworld, species, films, url} = character
    console.log('apicalls url', url)
      return fetchAllCharacterData(species, homeworld, films)
        .then(response => ({ name, response, url}))
    })
  }
  
  const fetchSpecies = (url) => {
  return fetch(url)
    .then( res => res.json())
    .then(lifeForm => lifeForm.name)
}

const fetchHomeworld = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(home => ({homeName: home.name, homePopulation: home.population}))
}

const fetchAllFilms = (allFilmUrls) => {
  const allFilms = allFilmUrls.map(film => {
    return fetch(film)
    .then(film => film.json())
    .then(film => film.title)
  })
  return Promise.all(allFilms)
}

const fetchAllCharacterData = (speciesUrl, homeworldUrl, filmUrl) => {
    let speciesData = fetchSpecies(...speciesUrl);
    let homeworldData = fetchHomeworld(homeworldUrl);
    let filmsData = fetchAllFilms(filmUrl);

    return Promise.all([speciesData, homeworldData, filmsData])
}