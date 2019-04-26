import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Favourites extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center'}}>
            <Text>Favourites!</Text>
        </View>
    );
  }
}

export default Favourites;