import React from "react";
import "./App.css";
import Form from "../Form/Form";

class App extends React.Component {
  constructor() {
    super();
  }

  handleFormSubmit = () => {
    this.createMoviePlanets();
  };

  createMoviePlanets = () => {};

  updateState = () => {};

  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
