import React from "react";
import './Form.css'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      favQuote: "",
      ranking: "novice",
      error: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.name.length > 0 && this.state.favQuote.length > 0) {
      this.props.handleFormSubmit(this.state)
    } else {
      this.setState({error: true})
    }
  }
  envokes 

  render() {
    return (
      <form>
        <label htmlFor='name'>Name</label>
        <input 
          id='name'
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor='favQuote'>Favorite Quote</label>
        <input 
          id='favQuote'
          type="text"
          name="favQuote"
          placeholder="Favorite quote from the films"
          onChange={this.handleChange}
          value={this.state.favQuote}
        />
        <label htmlFor='ranking'>Select Ranking</label>
        <select id='ranking' name="ranking" onChange={this.handleChange}>
          <option value="novice">Novice</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        <button type="button" onClick={() => this.handleSubmit()}>
          Submit
        </button>
        {this.state.error && <h3>The Force Is Not With You! <br/> Please Complete The Form</h3>}
      </form>
    );
  }
}

export default Form;
