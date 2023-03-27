import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image} from "react-native";

export default function Item({key, title, quantity, price, img, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {styles.Background}>
                <View style = {styles.LeftCorner}>
                    <View style = {styles.Plus1}/>
                    <View style = {styles.Plus2}/>
                </View>
                <Text style={styles.ItemName}>{title}</Text>
                <Text style = {styles.Quantity}>Quantity:{quantity}</Text>
                <Text style = {styles.Price}>${price} per item</Text>
                <Image style = {styles.Image} source={img}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Background: {
        margin:16,
        marginTop:0,
        height:150,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
    },
    LeftCorner:{
        height:50,
        width:90,
        top:100,
        backgroundColor:'#F26C68',
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
    },
    Plus1:{
        position:'absolute',
        backgroundColor:'#FFFFFF',
        width:20,
        height:2,
        left:35,
        top:24,
    },
    Plus2:{
        position:'absolute',
        backgroundColor:'#FFFFFF',
        width:2,
        height:20,
        left:44,
        top:15,
    },
    ItemName:{
        position:'absolute',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft:16,
        marginTop:16,
        width:200,
        height:70,
    },
    Quantity:{
        color: '#888888',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop:50,
        marginLeft:100,
    },
    Price:{
        color: '#888888',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft:100,
    },
    Image:{
        position:'absolute',
        margin:11,
        marginLeft:220,
        height:128,
        width:128,
        resizeMode:"contain",
        borderRadius:5,
    },
})