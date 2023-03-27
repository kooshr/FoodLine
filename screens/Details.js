import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Details = ({route}) => {
    const {item} = route.params;
    return (
        <View style={styles.View}>
            <Text style = {styles.Title}>
                {item.title}
            </Text>
            <Image style={styles.Image} source={item.img} />
            <View style={{ display: 'flex', flexDirection: 'row',}}>
                <View style = {styles.outer}>
                    <Text style={styles.subheading}>
                        Price per Item:
                    </Text>
                    <View style={styles.inner}>
                        <Text style = {styles.text}>
                            ${item.price}
                        </Text>
                    </View>
                </View>
                <View style={styles.outer}>
                    <Text style={styles.subheading}>
                        Quantity:
                    </Text>
                    <View style={styles.inner}>
                        <Text style={styles.text}>
                            {item.quantity}
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style = {styles.Checkout}>
                <Text style = {styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        marginTop: 50,
        marginBottom: 50,
    },
    Title: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
    },
    Image: {
        margin:20,
        alignSelf:"center",
        height: 256,
        width: 256,
        resizeMode: "contain",
        borderRadius: 5,
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
})

export default Details;