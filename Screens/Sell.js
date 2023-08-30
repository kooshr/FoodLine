import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Navbar from "../components/navbar.js";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native-elements";
import { db } from "../firebase";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import uuid from "react-native-uuid";
import { addDoc, collection } from "firebase/firestore";

const Sell = ({ route, navigation }) => {
    /*states for keeping track of inputted item info*/
    const [pImage, setpImage] = useState(null);
    const [iName, setiName] = useState(null);
    const [iPrice, setiPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);

    //const email = useState(navigation.email);
    const { email } = route.params;


    //handles image picker stuff for picking a photo
    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            mediaType: "photo",
            cropping: true,
            cropperCircleOverlay: false,
            compressImageQuality: 0.8,
        });

        if (!result.canceled) {
            setpImage(result.assets[0].uri);
        }
    };

    //submitListing uploads the form to firebase
    const submitListing = async () => {
        console.log(email)
        if (pImage && iName && iPrice && quantity) {
            let c = Math.random().toString(36).slice(2);
            let response = await fetch(pImage);
            let blob = await response.blob();
            console.log("Blob created");
            const fileRef = ref(getStorage(), uuid.v4());
            console.log("File reference created");

            const timestamp = new Date().getTime();

            uploadBytesResumable(fileRef, blob).then((snapshot) => {
                console.log("uploaded a blob or file");
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    addDoc(collection(db, "products"), {
                        title: iName,
                        price: iPrice,
                        productImage: downloadURL,
                        quantity: quantity,
                        key: c,
                        timestamp: timestamp,
                        email:email,
                    }).then((docRef) => {
                        console.log("Doc has been added successfully");
                        console.log(downloadURL)

                        // Clear fields
                        setpImage(null);
                        setiName(null);
                        setiPrice(null);
                        setQuantity(null);
                    });
                });
            });
        } else {
            console.log("Error: please try again!");
            console.log(email)
        }
    };
    
    return (
        <View style={{ backgroundColor: "#F9F9FB" }}>
            <View style={styles.View}>
                <Text style={{ margin: 16, textAlign: "center", marginTop: 10, fontSize: 32, fontWeight: "bold", }}>Sell Items!</Text>
                <View style={styles.nameouter}>
                    <Text style={styles.subheading}>
                        Item Name:
                    </Text>
                    <View style={styles.inner}>
                        <TextInput
                            placeholder="ie. $1.25"
                            style={styles.text}
                            onChangeText={(value) => setiName(value)}
                        />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <View style={styles.outer}>
                        <Text style={styles.subheading}>
                            Price per Item:
                        </Text>
                        <View style={styles.inner}>
                            <TextInput
                                placeholder="ie. $1.25"
                                style={styles.text}
                                onChangeText={(value) => setiPrice(value)}
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
                                onChangeText={(value) => setQuantity(value)}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.Imageouter}>
                    <TouchableOpacity style={styles.AddImage} onPress={handleChoosePhoto}>
                        <Text style={styles.AddImageText}>Add Image!</Text>
                    </TouchableOpacity>
                    {pImage && (
                        <Image source={{ uri: pImage }} style={styles.Image} />
                    )}
                </View>
                <TouchableOpacity style={styles.Checkout} onPress={submitListing}>
                    <Text style={styles.checkoutText}>Post Product!</Text>
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
    Imageouter: {
        margin: 12,
        width: 364,
        height: 290,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    Image: {
        width: 200,
        height: 200,
        marginLeft: 82,
        borderRadius: 20,
        marginTop: 10,
    },
    text: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    Checkout: {
        margin: 12,
        marginBottom: -10,
        marginTop: -5,
        width: 364,
        height: 95,
        backgroundColor: "#F26C68",
        borderRadius: 20,
    },
    checkoutText: {
        marginTop: 25,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    AddImage: {
        marginTop: 20,
        alignSelf: "center",
        width: 150,
        height: 45,
        backgroundColor: "#F26C68",
        borderRadius: 20,
    },
    AddImageText: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
})

export default Sell;