import React from "react";
import { getAllMovies } from "../../ApiCalls/apiCalls";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import ReactModal from "react-modal";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MovieModal from "../MovieModal/MovieModal";
import CharactersContainer from "../CharactersContainer/CharactersContainer";
import UserProfile from "../UserProfile/UserProfile";
import imperialGif from "../../images/ImperialGif.gif";
import "./App.css";

ReactModal.setAppElement("#root");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showFormModal: true,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      allMovies: [],
      currentMovie: {}
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then(moviedata => this.setState({ allMovies: moviedata.results }))
      .catch(err => console.log(err));
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
    this.createMovieObjects();
  };

  resetMovieState = () => {
    this.setState({ currentMovie: {} });
  };

  hideFormModal = () => {
    this.setState({ showFormModal: false });
  };

  updatePlanetModalState = () => {
    this.setState({ showPlanetModal: !this.state.showPlanetModal });
  };

  updateUserMenuState = () => {
    this.setState({ showUserMenu: !this.state.showUserMenu });
  };

  updateCurrentMovie = movie => {
    this.setState({ currentMovie: movie }, this.updatePlanetModalState());
  };

  userLogoutReset = () => {
    this.setState({
      showFormModal: true,
      showPlanetModal: false,
      showUserMenu: false,
      name: "",
      favQuote: "",
      ranking: "",
      favoriteCharacters: [],
      currentMovie: {}
    });
  };

  render() {
    return (
      <div className="App">
        <UserProfile
          isOpen={this.state.showUserMenu}
          userName={this.state.name}
          userFavQuote={this.state.favQuote}
          userRanking={this.state.ranking}
          userFavCharacters={this.state.favoriteCharacters}
          updateUserMenuState={this.updateUserMenuState}
          userLogoutReset={this.userLogoutReset}
        />
        <ReactModal
          isOpen={this.state.showFormModal}
          onRequestClose={this.handleFormSubmit}
          style={{ overlay: {}, content: {} }}
          contentLabel="Welcome Form"
          className="WelcomeFormModal"
          overlayClassName="WelcomeFormOverlay"
        >
          <Form handleFormSubmit={this.handleFormSubmit} />
        </ReactModal>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/movies"
          render={() =>
            this.state.allMovies.length === 0 ? (
              <img
                src={imperialGif}
                alt="Loading GIF"
                className="MoviesContainer-loading"
              />
            ) : (
              <MoviesContainer
                movies={this.state.allMovies}
                updatePlanetModalState={this.updatePlanetModalState}
                updateCurrentMovie={this.updateCurrentMovie}
                className="MoviesContainer"
                resetMovieState={this.resetMovieState}
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
            )
          }
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

// {
//   this.state.ideas.length === 0 && (
//     <img
//       src="https://www.bluewaysireland.org/Style%20Library/img/loader.gif"
//       alt="Loading GIF"
//     />
//   )
// }
