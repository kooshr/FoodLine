import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Item from '../components/item.js';
import SearchBar from "../components/search.js";
import Navbar from "../components/navbar.js";
import itemData from "../data/itemData.js";


const Search = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Item
            key={item.key}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            img={item.img}
            onPress={() => navigation.navigate('Details', { item: item })}
        />
    );

    return (
        <View style={{ backgroundColor: "#F9F9FB" }}>
            <View style={styles.View}>
                <SearchBar />
                <Text style={{ margin: 16, marginTop: 0, fontSize: 32, fontWeight: "bold", }}>Results</Text>
                <FlatList
                    style={{ height: 540 }}
                    data={itemData}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                />
                <Navbar navigation={navigation} />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    View: {
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: "#F9F9FB",
    },
})

export default Search;
