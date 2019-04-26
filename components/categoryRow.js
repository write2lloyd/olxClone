import React from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

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