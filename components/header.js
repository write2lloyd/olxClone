import React from "react";
import {View, Image, TextInput, StyleSheet} from "react-native"
import { SafeAreaView } from "react-navigation";

const header = (props) => {
    return (
        <SafeAreaView  style={{flex: 1}}>
            <View style={{flex: 1, margin: 5, justifyContent: "flex-start"}}>
                <TextInput style={styles.textInput} placeholderTextColor="#fff" placeholder="Search..." />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: "white",
        flex: 1,
        paddingLeft: 10,
        backgroundColor: "#0082BA",
        borderRadius: 5
    }
})
export default header;