import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Page 2</h1>
    </header>
    <button className="btn" onClick={() => onRouteChange('page1')}>Page 1</button>
    <button className="btn btn__disabled">Page 2</button>
    <button className="btn" onClick={() => onRouteChange('page3')}>Page 3</button>
  </div>;

export default Page2;
