import React from "react";
import { getAllMovies } from "../../ApiCalls/apiCalls";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import ReactModal from "react-modal";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MovieModal from "../MovieModal/MovieModal";
import CharactersContainer from "../CharactersContainer/CharactersContainer";
import "./App.css";
// import '../'

ReactModal.setAppElement("#root");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showFormModal: true,
      showPlanetModal: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    };
  }

  componentDidMount = () => {
    getAllMovies().then(moviedata =>
      this.setState({ allMovies: moviedata.results })
    );
  };

  createMovieObjects = () => {
    const planets = this.state.allMovies.map(movie => {
      return {
        title: movie.title,
        id: movie.episode_id,
        releaseDate: movie.release_date
      };
    });
    return this.sortMovies(planets);
  };

  sortMovies = movies => {
    return movies.sort((a, b) => {
      return a.id - b.id;
    });
  };

  handleFormSubmit = ({ name, favQuote, ranking }) => {
    this.setState({ name, favQuote, ranking });
    this.hideFormModal();
    // start building page
    this.createMovieObjects();
  };

  hideFormModal = () => {
    this.setState({ showFormModal: false });
  };

  updatePlanetModalState = () => {
    this.setState({ showPlanetModal: !this.state.showPlanetModal });
  };

  updateCurrentMovie = movie => {
    this.setState({ currentMovie: movie }, this.updatePlanetModalState());
    // filter through state.movies
    // to find the id of the movie that matches argument id
  };

  render() {
    return (
      <div className="App">
        <ReactModal
          isOpen={this.state.showFormModal}
          onRequestClose={this.handleFormSubmit}
          style={{ overlay: {}, content: {} }}
          contentLabel="Welcome Form"
          className="WelcomeFormModal"
          overlayClassName="WelcomeFormOverlay"
        >
          <Form handleFormSubmit={this.handleFormSubmit} />
          {/* <Movies /> */}
        </ReactModal>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/movies"
          render={() => (
            <MoviesContainer
              movies={this.state.allMovies}
              updatePlanetModalState={this.updatePlanetModalState}
              updateCurrentMovie={this.updateCurrentMovie}
              className="MoviesContainer"
              reactModal={
                <ReactModal
                  isOpen={this.state.showPlanetModal}
                  style={{ overlay: {}, content: {} }}
                >
                  <MovieModal
                    currentMovie={this.state.currentMovie}
                    updatePlanetModalState={this.updatePlanetModalState}
                  />
                </ReactModal>
              }
            />
          )}
        />
        <Route
          extact
          path="/movies/:id"
          render={({ match }) => {
            const id = parseInt(match.params.id);
            const episode = this.state.allMovies.find(
              episode => episode.episode_id === id
            );
            return (
              <>
                <CharactersContainer episode={episode} />
              </>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
