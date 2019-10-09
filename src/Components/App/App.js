import React from "react";
import "./App.css";
import Form from "../Form/Form";
import ReactModal from "react-modal";
import { getAllMovies } from "../../ApiCalls/apiCalls";
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
    };
    this.allMovies = {};
  }

  componentDidMount = () => {
    getAllMovies()
      .then(movieData => this.createMovieObjects(movieData.results))
  };

  createMovieObjects = (movies) => {
    return movies.map( movie => {
      
    })
    console.log("hello", movies);
  }

  createMoviePlanets = () => {
    console.log("hello");
    // console.log("movies", movies);
    // movies.map(film => console.log(film));
  };

  handleFormSubmit = ({ name, favQuote, ranking }) => {
      this.setState({ name, favQuote, ranking });
      this.hideFormModal();
      this.createMoviePlanets();
  };


  updateState = () => {};

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
        </ReactModal>
      </div>
    );
  }
}

export default App;
