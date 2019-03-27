import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search videos..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
