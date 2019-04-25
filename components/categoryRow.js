import React from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';

const categoryRow = (props) => {
    return(
        <TouchableOpacity onPress={() => props.nav.navigate('BrowseDetail')}>
            <View style={styles.container}>
                <Image 
                    style={{width: 50, height: 50, marginLeft: 10}}
                    source={{uri: props.image}}
                />
                <View style={{flexDirection:"column", paddingLeft: 20}}>
                    <Text style={{color: "#6E6B6B", fontSize:18, fontWeight: "bold", marginTop:5}}>{props.categoryName}</Text>
                    <Text style={{fontSize:12, color: "gray", marginTop:5}}>{props.subtitle}</Text>
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
        
    }
})

export default categoryRow;