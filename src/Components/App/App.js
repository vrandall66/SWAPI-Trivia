import React from "react";
import { getAllMovies } from "../../ApiCalls/apiCalls";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import ReactModal from "react-modal";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import MovieModal from "../MovieModal/MovieModal";
import CharactersContainer from "../CharactersContainer/CharactersContainer";
import FavoriteCharacters from "../FavoriteCharacters/FavoriteCharacters";
import UserProfile from "../UserProfile/UserProfile";
import BB8Loading from "../../images/BB8Loading.gif";
import "./App.css";
if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

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

  addFavoriteCharacter = character => {
    const newArr = [...this.state.favoriteCharacters];
    if (!character.favorite) {
      this.removeFavorite(character, newArr);
    } else {
      newArr.push(character);
      this.setState({ favoriteCharacters: newArr });
    }
  };

  removeFavorite = (character, newArr) => {
    const characterIndex = newArr
      .map(character => character.characterid)
      .indexOf(character.characterid);
    newArr.splice(characterIndex, 1);
    this.setState({ favoriteCharacters: newArr });
  };

  checkFavoriteStatus = id => {
    return this.state.favoriteCharacters
      .map(character => character.characterid)
      .includes(id);
  };

  handleFormSubmit = ({ name, favQuote, ranking }) => {
    this.setState({ name, favQuote, ranking });
    this.hideFormModal();
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
          updateUserMenuState={this.updateUserMenuState}
          userLogoutReset={this.userLogoutReset}
          favoriteCharacters={this.state.favoriteCharacters}
        />
        <Route exact path="/">
          <ReactModal
            isOpen={this.state.showFormModal}
            onRequestClose={this.handleFormSubmit}
            style={{ overlay: {}, content: {} }}
            contentLabel="Welcome Form"
            className="WelcomeFormModal"
            overlayClassName="WelcomeFormOverlay"
          >
            <Form
              handleFormSubmit={this.handleFormSubmit}
              history={this.props.history}
            />
          </ReactModal>
        </Route>
        <Route exact path="/" component={Home} />
        <ReactModal
          isOpen={this.state.showPlanetModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)"
            },
            content: {}
          }}
          className="MovieModal"
          overlayClassName="MovieModalOverlay"
        >
          <MovieModal
            currentMovie={this.state.currentMovie}
            updatePlanetModalState={this.updatePlanetModalState}
          />
        </ReactModal>
        <Route
          exact
          path="/movies"
          render={() =>
            this.state.allMovies.length === 0 ? (
              <img
                src={BB8Loading}
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
              />
            )
          }
        />
        <Route exact path="/favorite-characters" component={FavoriteCharacters}>
          <FavoriteCharacters
            characterInfo={this.state.favoriteCharacters}
            addFavoriteCharacter={this.addFavoriteCharacter}
          />
        </Route>
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
                <CharactersContainer
                  episode={episode}
                  addFavoriteCharacter={this.addFavoriteCharacter}
                  checkFavoriteStatus={this.checkFavoriteStatus}
                />
              </>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
