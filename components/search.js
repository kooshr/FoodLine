import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function SearchBar({ onSearch }) {
    const [text, setText] = useState('');

    const handleSearch = () => {
        onSearch(text);
    };

    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Search"
                style={styles.SearchBar}
                value={text}
                onChangeText={setText}
                clearButtonMode="always"
                onSubmitEditing={handleSearch}
                onKeyPress={handleKeyPress}
            />
            <TouchableOpacity style={styles.Search} onPress={handleSearch}>
                <Image style={styles.SearchIcon} source={require("../assets/searchicon.png")} />
            </TouchableOpacity>
        </View>
    );
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