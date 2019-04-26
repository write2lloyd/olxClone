/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, Image, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Browse from './components/browse';
import BrowseDetail from './components/browseDetail';
import Favourites from './components/favourites';
import PlaceAd from './components/placeAd';



class App extends Component {
  render() {
    return (
      <TabNavigator/>
    );
  }
}

const BrowseStackNavigator = createStackNavigator({
  Browse: {screen: Browse},
  BrowseDetail: {screen: BrowseDetail}
});

const modalStack = createStackNavigator({
  Main: {screen: BrowseStackNavigator},
  PlaceAd: {screen: PlaceAd}
},
{
  mode: "modal",
  headerMode: "none"
});

const TabNavigator = createBottomTabNavigator({
  BrowseStack: {
    screen: modalStack,
    navigationOptions: {
      tabBarLabel: 'Browse',
      // tabBarIcon: ({ tintColor }) => (
      //     <Image source={require('./assets/icon.png')}
      //       style= {{width:15, height:15, tintColor:'black'}}/>
      // )
    },
  },
  Favourites: Favourites
});

export default createAppContainer(TabNavigator);