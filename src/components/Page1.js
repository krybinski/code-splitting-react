import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

const Page1 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Page 1</h1>
      </header>
      <button type="button" className="btn btn__disabled">Page 1</button>
      <button type="button" className="btn" onClick={() => onRouteChange('page2')}>Page 2</button>
      <button type="button" className="btn" onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>
  );
};

Page1.propTypes = {
  onRouteChange: PropTypes.func.isRequired
};

export default Page1;
