import React from 'react';
import PropTypes from 'prop-types';

class FormUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: this.props.user};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.state.user[name] = value;
    this.setState(this.state);
    this.props.onChange(this.state.user);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    let idField = null;

    if (this.state.user.id !== 0) {
      idField = (<label> ID: {this.state.user.id} </label>);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {idField}
        <label>
          Name:
          <input type="text" name="name" value={this.state.user.name} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={this.state.user.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

FormUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default FormUser;
