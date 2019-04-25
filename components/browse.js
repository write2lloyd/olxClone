import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, Button, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CategoryRow from './categoryRow';
import categoryData from '../categoryData.json';

class Browse extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <Text>testing header</Text>,
  };
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.placeAnAdContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceAd')}>
                <View style={styles.placeAnAd}>
                  <Text style={{height: 50, top: -30, color:"white", fontSize:50, margin: 20}}>+</Text>
                  <View style={{}}>
                    <Text style={{marginTop: 5, color:"white", fontSize:20, fontWeight:"bold", height: 20}}>Place an Ad</Text>
                    <Text style={{marginTop: 5, color:"white", fontSize:12}}>Fast and Easy</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
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
  placeAnAdContainer: {
    backgroundColor: "white",
    width: "100%",

  },
  placeAnAd: {
    height: 60,
    borderRadius: 5,
    backgroundColor: "#FF6F00",
    margin: 10,
    flexDirection: "row",
    shadowOpacity: 0.50,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 }
  }

})

export default Browse;