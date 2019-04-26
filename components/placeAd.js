import React, {Component} from 'react';
import {Text, TouchableHighlight} from 'react-native';

class PlaceAd extends Component {
  render() {
    return (
        <TouchableHighlight
            style={{flex: 1, justifyContent: "center", alignItems: "center"}}
            onPress={() => {
                this.props.navigation.goBack();
            }}>
            <Text>Hide Modal</Text>
        </TouchableHighlight>
    );
  }
}

export default PlaceAd;