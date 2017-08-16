/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/index';

class NavigationProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

export default NavigationProject;

AppRegistry.registerComponent('NavigationProject', () => NavigationProject);