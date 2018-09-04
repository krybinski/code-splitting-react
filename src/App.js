import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Page1 from './components/Page1';
// import AsyncComponent from './components/AsyncComponent';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      components: null
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    const Loading = () => <div>Loading...</div>;

    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page2') {
      const AsyncPage2 = Loadable({
        loader: () => import('./components/Page2'),
        loading: Loading
      });

      return <AsyncPage2 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page3') {
      const AsyncPage3 = Loadable({
        loader: () => import('./components/Page3'),
        loading: Loading
      });

      return <AsyncPage3 onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
