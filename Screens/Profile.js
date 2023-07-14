import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Navbar from "../components/navbar";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Dimensions } from 'react-native';

const Profile = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "profiles"));
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    setFirstName(data.firstName || "");
                    setLastName(data.lastName || "");
                    setPhoneNumber(data.phoneNumber || "");
                    setEmail(data.email || "");
                });
            } catch (error) {
                console.error("Error fetching profile data: ", error);
            }
        };

        fetchProfileData();
    }, []);

    const handleSaveProfile = async () => {
        try {
            const profileData = {
                firstName,
                lastName,
                phoneNumber,
                email
            };

            // Save profileData to Firebase database
            await addDoc(collection(db, "profiles"), profileData);

            setFirstName(firstName);
            setLastName(lastName);
            setPhoneNumber(phoneNumber);
            setEmail(email);

            console.log("Profile saved successfully!");
        } catch (error) {
            console.error("Error saving profile: ", error);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ backgroundColor: "#F9F9FB", flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <View style={styles.View}>
                <Text style={{ margin: 16, textAlign: "center", marginTop: 10, fontSize: 32, fontWeight: "bold" }}>Profile!</Text>

                <View style={styles.nameContainer}>
                    <View style={styles.nameInputContainer}>
                        <Text style={styles.subheading}>First Name:</Text>
                        <TextInput
                            placeholder="Lebron"
                            style={styles.text}
                            value={firstName}
                            onChangeText={(value) => setFirstName(value)}
                        />
                    </View>

                    <View style={styles.nameInputContainer}>
                        <Text style={styles.subheading}>Last Name:</Text>
                        <TextInput
                            placeholder="James"
                            style={styles.text}
                            value={lastName}
                            onChangeText={(value) => setLastName(value)}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.subheading}>Phone Number:</Text>
                    <TextInput
                        placeholder="800-555-1234"
                        style={styles.text}
                        value={phoneNumber}
                        onChangeText={(value) => setPhoneNumber(value)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.subheading}>Email:</Text>
                    <TextInput
                        placeholder="lebron@example.com"
                        style={styles.text}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>

                <TouchableOpacity style={styles.bottom} onPress={handleSaveProfile}>
                    <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>

                <Navbar navigation={navigation} />
            </View>
        </KeyboardAvoidingView>
    );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    View: {
        marginTop: 50,
        marginBottom: 50,
        height: windowHeight,
        backgroundColor: "#F9F9FB",
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    nameInputContainer: {
        width: "48%",
        height: 95,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    inputContainer: {
        marginHorizontal: 12,
        marginBottom: 12,
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
    text: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#808080",
    },
    bottom: {
        marginTop: 265,
        backgroundColor: "#F26C68",
        height: 44,
        borderRadius: 20,
        justifyContent: "center",
    },
    saveButton: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});

export default Profile;
