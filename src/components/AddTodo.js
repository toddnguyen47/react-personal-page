import React from "react";
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  state = {
    title: "",
    email: ""
  }

  onChange = (evt) => {
    // State is in THIS component
    // Set the title to whatever we type in
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''}); 
  }

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />

        {/* <input
         type="text"
         name="email"
         value={this.state.email}
         onChange={this.onChange}
         /> */}
      </form>
    );
  }
}

// Prop Types
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
