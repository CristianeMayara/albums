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
      <View>
        <Header headerText={'Home Title'} />
        <AlbumList />
        <Text>
          Welcome home!
        </Text>
        <Button
          onPress={this._onPressButton}
          title="Next"
          color="#841584"
        />
      </View>
    );
  }
}

export default Home;
