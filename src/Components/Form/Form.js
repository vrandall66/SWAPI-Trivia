import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Form.css";

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      favQuote: "",
      ranking: "Novice",
      error: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.name.length && this.state.favQuote.length) {
      this.props.handleFormSubmit(this.state);
      this.props.history.push("/movies");
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <form className="Form">
        <label htmlFor="name" className="UserModalFormLabel">
          Name
        </label>
        <input
          className="UserModalFormInput"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="favQuote" className="UserModalFormLabel">
          Favorite Quote
        </label>
        <input
          className="UserModalFormInput"
          id="favQuote"
          type="text"
          name="favQuote"
          placeholder="Favorite quote from the films"
          onChange={this.handleChange}
          value={this.state.favQuote}
        />
        <label htmlFor="ranking" className="UserModalFormLabel">
          Select Fan Ranking
        </label>
        <select
          id="ranking"
          name="ranking"
          className="UserModalFormSelect"
          onChange={this.handleChange}
        >
          <option value="Novice">Novice</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <button
          type="button"
          className="UserModalFormBtn"
          onClick={() => this.handleSubmit()}
        >
          Submit
        </button>
        {this.state.error && (
          <h3>
            The Force Is Not With You! <br /> Please Complete The Form
          </h3>
        )}
      </form>
    );
  }
}

export default withRouter(Form);
