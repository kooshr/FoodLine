import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import Navbar from "../components/navbar";
import { TextInput } from "react-native-gesture-handler";
import {userData} from "../data/userData"

const Profile = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#F9F9FB" }}>
            <View style={styles.View}>
                <Text style={{ margin: 16, textAlign: "center", marginTop: 10, fontSize: 32, fontWeight: "bold", }}>Profile!</Text>
                <View style={styles.nameouter}>
                    <Text style={styles.subheading}>
                        First Name:
                    </Text>
                    <View style={styles.inner}>
                        <TextInput
                            placeholder="Lebron"
                            style={styles.text}
                            onChangeText={(value) => setiName(value)}
                        />
                    </View>
                </View>
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
    nameouter: {
        margin: 12,
        width: 364,
        height: 95,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    outer: {
        margin: 12,
        width: 170,
        height: 95,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    subheading: {
        marginTop: 12,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    inner: {
        margin: 8,
        marginTop: 14,
        height: 40,
        backgroundColor: "#F26C68",
        borderRadius: 20,
    },
    text: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
})

export default Profile;