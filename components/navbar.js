import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Navbar = ({navigation}) => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity 
                style={styles.home}
                onPress={() => navigation.navigate('Home')}
                >
                <Image
                    style={styles.homeIcon}
                    source={require("../assets/home.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.home}
                onPress={() => navigation.navigate('Search')}
                >
                <Image
                    style={styles.buyIcon}
                    source={require("../assets/buy.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.home}
                onPress={() => navigation.navigate('Sell')}
            >
                <Image
                    style={styles.homeIcon}
                    source={require("../assets/sell.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.home}>
                <Image
                    style={styles.homeIcon}
                    source={require("../assets/home.png")}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        height: 60,
        padding: 16,
        margin:16,
        borderRadius: 20,
    },
    home: {
        marginTop:-20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        height:40,
        padding: 10,
    },
    homeIcon: {
        height: 40,
        width: 40,
    },
    buyIcon: {
        height: 40,
        width: 46,
    },
});

export default Navbar;