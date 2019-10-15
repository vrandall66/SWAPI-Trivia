export const getAllMovies = () => {
  return fetch("https://swapi.co/api/films/")
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const fetchCharacter = character => {
  return fetch(character)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const fetchSpecies = url => {
  if (!url) {
    return "NO SPECIES AVAILABLE";
  } else {
    return fetch(url)
      .then(res => res.json())
      .then(lifeForm => lifeForm.name)
      .catch(err => console.log(err));
  }
};

export const fetchHomeworld = url => {
  return fetch(url)
    .then(res => res.json())
    .then(home => ({ homeName: home.name, homePopulation: home.population }))
    .catch(err => console.log(err));
};

export const fetchAllFilms = allFilmUrls => {
  const allFilms = allFilmUrls.map(film => {
    return fetch(film)
      .then(film => film.json())
      .then(film => film.title)
      .catch(err => console.log(err));
  });
  return Promise.all(allFilms);
};

export const fetchAllCharacterData = (speciesUrl, homeworldUrl, filmUrl) => {
  let speciesData = fetchSpecies(...speciesUrl);
  let homeworldData = fetchHomeworld(homeworldUrl);
  let filmsData = fetchAllFilms(filmUrl);

  return Promise.all([speciesData, homeworldData, filmsData]);
};
