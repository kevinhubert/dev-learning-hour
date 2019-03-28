import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = event => {
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
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
