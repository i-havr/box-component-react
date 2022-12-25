import { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addUser({ ...this.state });

    this.setState({
      name: '',
      email: '',
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}
