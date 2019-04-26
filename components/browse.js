import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, Button, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CategoryRow from './categoryRow';
import categoryData from '../categoryData.json';
import Header from './header';
import PlaceAnAdCTA from './placeAnAdCTA';

class Browse extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#008DCB",
    },
    headerTitle: <Header/>
  };
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <PlaceAnAdCTA nav = {this.props.navigation}/>
            <View style={{backgroundColor: "#6E6B6B", width: "100%", height:1}}/>
            <FlatList style={{marginTop: 10, width: "100%"}}
              data={categoryData}
              renderItem={({item}) => 
                <CategoryRow
                  nav = {this.props.navigation}
                  image={item.icon} 
                  categoryName={item.categoryName}
                  subtitle= {item.subtitle}/>}
              keyExtractor={categoryData => categoryData.id.toString()}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  

})

export default Browse;