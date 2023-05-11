import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import Item from '../components/item.js';
import SearchBar from "../components/search.js";
import Navbar from "../components/navbar.js";
import itemData from "../data/itemData.js";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

//Images not rendering (Firebase Limit Reached)
const Home = ({ navigation }) => {

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
                <Text style={{ margin: 16, marginTop: 30, marginBottom: 0, fontSize: 32, fontWeight: "bold", textAlign: "center" }}>FoodLine</Text>
                <SearchBar />
                <Text style={{ margin: 16, marginTop: 0, fontSize: 16, fontWeight: "bold", }}>Recently Posted Items</Text>
                <Animated.FlatList
                    style={{ height: 490 }}
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

export default Home;
