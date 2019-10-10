import React from "react";
import { getAllMovies } from "../../ApiCalls/apiCalls";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import ReactModal from "react-modal";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
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
      currentMovie: 0
    };
  }

  componentDidMount = () => {
    getAllMovies().then(movieData =>
      this.setState({ allMovies: movieData.results })
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

  render() {
    return (
      <div className="App">
        <ReactModal
          isOpen={this.state.showFormModal}
          onRequestClose={this.handleFormSubmit}
          style={{ overlay: {}, content: {} }}
          contentLabel="Welcome Form"
          // className="WelcomeFormModal"
          // overlayClassName="WelcomeFormOverlay"
        >
          <Form handleFormSubmit={this.handleFormSubmit} />
          {/* <Movies /> */}
        </ReactModal>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/movies"
          render={() => <MoviesContainer movies={this.state.allMovies} className="MoviesContainer"/>}
        />
      </div>
    );
  }
}

export default App;
