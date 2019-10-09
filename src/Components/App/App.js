import React from "react";
import "./App.css";
import Form from "../Form/Form";
import ReactModal from "react-modal";
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
      favoriteCharacters: []
    };
  }

  handleFormSubmit = ({ name, favQuote, ranking }) => {
    if (name.length > 0 && favQuote.length > 0) {
      this.setState({ name, favQuote, ranking });
    }
    this.createMoviePlanets();
    this.hideFormModal();
  };

  createMoviePlanets = () => {};

  updateState = () => {};

  hideFormModal = () => {
    console.log('hello')
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
