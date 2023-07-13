
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import Item from '../components/item.js';
import SearchBar from "../components/search.js";
import Navbar from "../components/navbar.js";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { db } from "../firebase";
import {
    collection,
    getDocs,
    onSnapshot,
    query,
    QuerySnapshot,
  } from "firebase/firestore";

//Images not rendering (Firebase Limit Reached)
const Home = ({ navigation }) => {
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);

    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const prods = [];
        querySnapshot.forEach((doc) => {
            prods.push(doc.data());
        });
        setProducts(prods);
        setFilteredProducts(prods);
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
            const prods = [];
            snapshot.forEach((doc) => {
                prods.push(doc.data());
            });
            setProducts(prods);
            setFilteredProducts(prods);
        });

        return () => unsubscribe();
    }, []);

    const handleSearch = (text) => {
        const filtered = products.filter((product) => {
            return product.title.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredProducts(filtered);
    };

    const renderItem = ({ item }) => (
        <Item
            key={item.key}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            img={{ uri: item.productImage }}
            onPress={() => navigation.navigate('Details', { item: item })}
        />
    );

    return (
        <View style={{ backgroundColor: "#F9F9FB" }}>
            <View style={styles.View}>
                <Text style={{ margin: 16, marginTop: 30, marginBottom: 0, fontSize: 32, fontWeight: "bold", textAlign: "center" }}>FoodLine</Text>
                <SearchBar onSearch={handleSearch} />
                <Text style={{ margin: 16, marginTop: 0, fontSize: 16, fontWeight: "bold" }}>Recently Posted Items</Text>
                <Animated.FlatList
                    style={{ height: 510 }}
                    data={filteredProducts}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    onScroll={useAnimatedScrollHandler((event) => {
                        //console.log(event.contentOffset.y)
                    })}
                    scrollEventThrottle={16}
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