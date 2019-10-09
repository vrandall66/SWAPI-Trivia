import React from "react";
import "./App.css";
import Form from "../Form/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: true,
      showPlanet: false
    }
  }

  handleFormSubmit = () => {
    this.createMoviePlanets();
    this.hideFormModal();
  };

  createMoviePlanets = () => {};

  updateState = () => {};

  hideFormModal = () => {
    this.setState({ showForm: false })
  }

  render() {
    const formModal = document.createElement('div')
    return (
      <div className="App">
        <Form handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
