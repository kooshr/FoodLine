import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function SearchBar({}) {
    const [text, setText] = useState('');
    //Add this for testing: <Text style = {{margin:10,}}>{text}</Text>
    return (
        <View>
            <TextInput
                placeholder="Search"
                style = {styles.SearchBar}
                value={text}
                onChangeText={(val) => setText(val)}
                clearButtonMode="always"
            />
            <TouchableOpacity 
                style = {styles.Search}
                onPress={() => setText("")}
            >
                <Image style = {styles.SearchIcon} source={require("./assets/searchicon.png")}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar:{
        borderRadius:20,
        height:50,
        margin:16,
        backgroundColor:"#FFFFFF",
        padding:10,
        paddingLeft:50,
    },
    Search:{
        position:"absolute",
        margin:19,
        height:44,
        width:44,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    SearchIcon:{
        margin:6,
        width:30,
        height:30,
        resizeMode: "contain",
    },
})