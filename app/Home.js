import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import Header from './components/header'
import AlbumList from './components/AlbumList'
//import { StackNavigator } from 'react-navigation';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  _onPressButton = () => {

  } 

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Home Title'} />
        <AlbumList />
      </View>
    );
  }
}

export default Home;
