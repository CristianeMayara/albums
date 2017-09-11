import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
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
