import React from "react";
import "./App.css";
import Form from "../Form/Form";
import ReactModal from "react-modal";
import { getAllMovies } from "../../ApiCalls/apiCalls";
import MoviePlanet from "../MoviePlanet/MoviePlanet";
import { Route, Link } from "react-router-dom";

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
          <Route exact path='/movies' component={MoviePlanet}/>
          {/* <Movies /> */}
        </ReactModal>
      </div>
    );
  }
}

export default App;
