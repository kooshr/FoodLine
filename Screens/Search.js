import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Item from '../components/item.js';
import SearchBar from "../components/search.js";
import Navbar from "../components/navbar.js";
import { db } from "../firebase";
import {
    collection,
    getDocs,
    onSnapshot,
    query,
    QuerySnapshot,
} from "firebase/firestore";


const Search = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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
                <SearchBar onSearch={handleSearch} />
                <Text style={{ margin: 16, marginTop: 0, fontSize: 32, fontWeight: "bold" }}>Results</Text>
                <FlatList
                    style={{ height: 560 }}
                    data={filteredProducts}
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