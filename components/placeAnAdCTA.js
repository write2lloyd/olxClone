import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native"

const placeAnAdCTA = (props) => {
    return (
        <View style={styles.placeAnAdContainer}>
            <TouchableOpacity onPress={() => props.nav.navigate('PlaceAd')}>
                <View style={styles.placeAnAd}>
                    <Text style={{height: 50, top: -30, color:"white", fontSize:50, margin: 20}}>+</Text>
                    <View style={{}}>
                    <Text style={{marginTop: 5, color:"white", fontSize:20, fontWeight:"bold", height: 20}}>Place an Ad</Text>
                    <Text style={{marginTop: 5, color:"white", fontSize:12}}>Fast and Easy</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
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
export default placeAnAdCTA;