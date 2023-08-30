import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList } from "react-native";
import Navbar from "../components/navbar";
import { collection, addDoc, getDocs, where, updateDoc, onSnapshot, query, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Dimensions } from 'react-native';

export const updateListing = async (email, listingId, newData) => {
    console.log("Update Listing - email:", email);
    console.log("Update Listing - listingId:", listingId);
    console.log("Update Listing - newData:", newData);

    try {
        const listingQuerySnapshot = await getDocs(collection(db, "products"), where("email", "==", email), where("id", "==", listingId));
        
        const listingDocs = listingQuerySnapshot.docs;
        
        const listingRef = listingDocs[0].ref;
        await updateDoc(listingRef, newData);
    } catch (error) {
        console.error("Error updating listing: ", error);
    }
};


const Profile = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [id, setID] = useState("");
    const [listings, setListings] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log(email);

            // Fetch profile data
            try {
                const profileSnapshot = await getDocs(collection(db, "profiles"), where("email", "==", email));
                profileSnapshot.forEach((doc) => {
                    const data = doc.data();
                    setFirstName(data.firstName || "");
                    setLastName(data.lastName || "");
                    setPhoneNumber(data.phoneNumber || "");
                    setEmail(data.email || "");
                    setID(data.id || "");
                });
            } catch (error) {
                console.error("Error fetching profile data: ", error);
            }

            // Fetch listings data
            const unsubscribe = onSnapshot(query(collection(db, "products"), where("email", "==", email)), (snapshot) => {
                const prods = [];
                snapshot.forEach((doc) => {
                    prods.push(doc.data());
                });
                setListings(prods);
                console.log("done");
            });

            console.log(listings);

            return () => unsubscribe();
        };

        fetchData();
    }, [email]);

    const handleSaveProfile = async () => {
        try {
            const profileData = {
                firstName,
                lastName,
                phoneNumber,
                email,
            };

            const querySnapshot = await getDocs(collection(db, "profiles"), where("email", "==", email));
            const profileDocs = querySnapshot.docs;

            if (profileDocs.length === 0) {
                // Profile not found, create a new one
                const newProfileRef = await addDoc(collection(db, "profiles"), profileData);
                await updateDoc(newProfileRef, { id: newProfileRef.id }); // Set the id field
                console.log("New profile created successfully!");
            } else {
                // Update the existing profile data
                await Promise.all(profileDocs.map(doc => updateDoc(doc.ref, profileData)));
                console.log("Profile updated successfully!");
            }
        } catch (error) {
            console.error("Error updating profile: ", error);
        }
        console.log(id)
        console.log(email)
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
                <View style={styles.outerListingContainer}>
                    <Text style={styles.subheading}>Listings:</Text>
                    <FlatList
                        style={styles.flatList}
                        data={listings}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                            <View style={styles.listingContainer}>
                                <Text style={styles.listingTitle}>{item.title}</Text>
                                <Text style={styles.listingPrice}>{item.price}</Text>
                                <TouchableOpacity
                                    style={styles.editButton}
                                    onPress={() => {
                                        navigation.navigate("Edit", { listing: item, email: email, });
                                    }}
                                >
                                    <Text style={styles.editButtonText}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />

                </View>
                <TouchableOpacity style={styles.bottom} onPress={handleSaveProfile}>
                    <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>

                <Navbar navigation={navigation} email={email} />
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
    outerListingContainer: {
        marginHorizontal: 12,
        marginBottom: 12,
        height: 250,
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
        marginTop: 5,
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
    flatList: {
        marginTop: 20,
        height: 100,
    },
    listingContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listingTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    listingPrice: {
        fontSize: 16,
        color: "#808080",
    },
    editButton: {
        backgroundColor: "#F26C68",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignSelf: "flex-end",
    },
    editButtonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default Profile;
