import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import Item from '../components/item.js';
import SearchBar from "../components/search.js";
import Navbar from "../components/navbar.js";
import itemData from "../data/itemData.js";
import { TextInput } from "react-native-gesture-handler";


const Sell = ({ navigation }) => {

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
                <Text style={{ margin: 16,textAlign:"center", marginTop: 10, fontSize: 32, fontWeight: "bold", }}>Sell Items!</Text>
                <View style = {styles.nameouter}>
                    <Text style={styles.subheading}>
                        Item Name:
                    </Text>
                    <View style={styles.inner}>
                        <TextInput
                            placeholder="ie. $1.25"
                            style={styles.text}
                        />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',}}>
                <View style = {styles.outer}>
                    <Text style={styles.subheading}>
                        Price per Item:
                    </Text>
                    <View style={styles.inner}>
                        <TextInput
                            placeholder="ie. $1.25"
                            style={styles.text}
                        />
                    </View>
                </View>
                <View style={styles.outer}>
                    <Text style={styles.subheading}>
                        Quantity:
                    </Text>
                    <View style={styles.inner}>
                        <TextInput
                            placeholder="ie. 5"
                            style={styles.text}
                        />
                    </View>
                </View>
            </View>
            <View style = {styles.Imageouter}>
                    <TouchableOpacity style = {styles.AddImage}>
                        <Text style = {styles.AddImageText}>Add Image!</Text>
                    </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.Checkout}>
                <Text style = {styles.checkoutText}>Post Product!</Text>
            </TouchableOpacity>
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
    nameouter:{
        margin:12,
        width:364,
        height:95,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
    },
    outer:{
        margin:12,
        width:170,
        height:95,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
    },
    subheading:{
        marginTop:12,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    inner: {
        margin: 8,
        marginTop:14,
        height: 40,
        backgroundColor: "#F26C68",
        borderRadius: 20,
    },
    Imageouter:{
        margin:12,
        width:364,
        height:235,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
    },
    text:{
        marginTop:8,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color:"#FFFFFF",
    },
    Checkout:{
        margin: 12,
        width: 364,
        height: 95,
        backgroundColor: "#F26C68",
        borderRadius: 20,
    },
    checkoutText:{
        marginTop: 25,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    AddImage:{
        marginTop: 20,
        alignSelf:"center",
        width: 150,
        height: 45,
        backgroundColor: "#F26C68",
        borderRadius: 20,
    },
    AddImageText:{
        marginTop: 8,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
})

export default Sell;