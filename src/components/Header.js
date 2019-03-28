import React from 'react';

class Header extends React.Component {
  state = { term: '' };

  inputChange = event => {
    this.setState({ term: event.target.value });
  };
  handleInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.onFormSubmit} action="">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search videos..."
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
