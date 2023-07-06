// import * as React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   SafeAreaView,
//   Button,
// } from "react-native";
// import colors from "./colors.js";
// import Feather from "react-native-vector-icons/Feather";
// import { useNavigation } from "@react-navigation/core";
// import { auth } from "../firebase.js";
// import { TouchableOpacity } from "react-native";

// Feather.loadFont();

// const Home = () => {
//   const navigation = useNavigation();

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigation.replace("Login");
//       })
//       .catch((error) => alert(error.message));
//   };
//   const goToPay = () => {
//     navigation.replace("Payment");
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>Email: {auth.currentUser?.email}</Text>
//         <TouchableOpacity onPress={handleSignOut} style={styles.button}>
//           <Text style={styles.buttonText}>Sign out</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         onPress={navigation.navigate("AddProduct")}
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Sell a Product</Text>
//       </TouchableOpacity>

//       {/* <Button
//         onPress={goToPay}
//         title="Payment Page"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       /> */}
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.background,
//     flex: 1,
//   },
//   button: {
//     elevation: 8,
//     backgroundColor: "#009688",
//     borderRadius: 10,
//     width: 100,
//     padding: 10,
//   },
//   buttonText: {
//     fontSize: 10,
//     color: "#fff",
//     fontWeight: "bold",
//     alignSelf: "center",
//     textTransform: "uppercase",
//   },
// });

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
                    data={products}
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