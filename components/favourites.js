import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Favourites extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favourites!</Text>
        </View>
    );
  }
}

export default Favourites;