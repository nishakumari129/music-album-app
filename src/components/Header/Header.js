import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    const { updateList, value } = this.props;
    return (
      <div className="header-fixed">
        <div className="header-container">
          <div className="header-wrapper">
              <div className="headerTitle">Top 100 music albums</div>
            <div className="header-search-wrapper">
              <i className="material-icons black-text">search</i>
              <input
                type="text"
                placeholder="Search by artist name"
                value={value}
                onChange={updateList}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
    updateList: PropTypes.func,
    value: PropTypes.string,
};
Header.defaultProps = {
    updateList: f => f,
    value: '',
};

export default Header;
