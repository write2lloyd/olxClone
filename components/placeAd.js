import React, {Component} from 'react';
import {Button, Text, TouchableHighlight} from 'react-native';
class PlaceAd extends Component {
  static navigationOptions = ({navigation }) => {
    return {
      headerLeft: (
        <Button 
          color= "#fff"
          title= "Close"
          onPress={() => navigation.goBack()}/>
      )
    }
  };
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