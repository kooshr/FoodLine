import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { updateListing } from "./Profile";

const Edit = ({ route, navigation }) => {
    const { listing, email } = route.params;

    const [title, setTitle] = useState(listing.title);
    const [price, setPrice] = useState(listing.price.toString()); // Convert price to string
    const [quantity, setQuantity] = useState(listing.quantity.toString()); // Convert quantity to string

    const handleSave = () => {
        // Convert price and quantity back to numbers before saving
        const newData = {
            title,
            price: parseFloat(price), // Convert back to number
            quantity: parseInt(quantity), // Convert back to number
        };

        updateListing(listing.email, listing.key, newData);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Edit Listing</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Title:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter title"
                    value={title}
                    onChangeText={setTitle}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Price:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter price"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric" // Set numeric keyboard input
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Quantity:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter quantity"
                    value={quantity}
                    onChangeText={setQuantity}
                    keyboardType="numeric" // Set numeric keyboard input
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F9F9FB",
    },
    heading: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 8,
        padding: 10,
    },
    saveButton: {
        backgroundColor: "#F26C68",
        borderRadius: 20,
        padding: 12,
        alignItems: "center",
    },
    saveButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Edit;
