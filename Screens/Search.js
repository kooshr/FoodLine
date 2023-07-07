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
    const [products, setProducts] = useState(null);

    const fetchProducts = async () => {
        const q = query(collection(db, "products"));
        // getDocs(q).then((querySnapshot) => {
        //   const prods = [];
        //   console.log("start");
        //   querySnapshot.forEach((doc) => {
        //     console.log("middle");
        //     prods.push(doc.data());
        //   });
        //   console.log(prods);
        //   setProducts(prods);
        // });

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let prods = [];
            querySnapshot.forEach((doc) => {
                prods.push(doc.data());
                console.log(doc.data())
            });
            setProducts(prods)
        });
    };

    useEffect(() => {
        const getProducts = () => {
            console.log("called");
            setProducts(fetchProducts());
            //console.log(prods);
        };
        getProducts();
    }, []);

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
                <SearchBar />
                <Text style={{ margin: 16, marginTop: 0, fontSize: 32, fontWeight: "bold", }}>Results</Text>
                <FlatList
                    style={{ height: 540 }}
                    data={products}
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