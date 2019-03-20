import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <form action="">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search videos..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
