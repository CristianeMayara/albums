/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/index';

class Albums extends Component {
  render() {
    return (
      <App />
    );
  }
}

export default Albums;

AppRegistry.registerComponent('Albums', () => Albums);
