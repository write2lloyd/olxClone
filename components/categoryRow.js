import React from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const categoryRow = (props) => {
    return(
        <TouchableOpacity onPress={() => props.nav.navigate('BrowseDetail')}>
            <View style={styles.container}>
                <Image 
                    style={styles.leftIcon}
                    source={{uri: props.image}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{props.categoryName}</Text>
                    <Text style={styles.adsText}>{props.subtitle}</Text>
                </View>
                <View style={{margin: 10, justifyContent: "flex-end", flexDirection: "row", flex:1}}>
                    <FontAwesome name="chevron-right" size={15} color={"#CFCFCF"} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: "100%",
        flexDirection: "row"
    },
    leftIcon: {
        width: 50, 
        height: 50, 
        marginLeft: 10
    },
    textContainer: {
        flexDirection:"column", 
        paddingLeft: 20
    },
    titleText: {
        color: "#6E6B6B", 
        fontSize:18, 
        fontWeight: "bold", 
        marginTop:5
    },
    adsText: {
        fontSize:12, 
        color: "gray", 
        marginTop:5
    }
})

export default categoryRow;