import React, { useState } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native-elements";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
  uploadBytesResumable,
} from "firebase/storage";
import uuid from "react-native-uuid";
import AddressPickup from "../Components/AddressPickup";

const AddProduct = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState(null);
  const [location, setLocation] = useState(null);
  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const fetchLocationCoords = (name, lat, lng) => {
    setLocation({
      placename: name,
      latitude: lat,
      longitude: lng,
    });
  };
  const submitListing = async () => {
    if (image && productName && desc && price && location) {
      let c = Math.random().toString(36).slice(2);
      let response = await fetch(image);
      let blob = await response.blob();
      console.log("Blob created");
      const fileRef = ref(getStorage(), uuid.v4());
      console.log("File reference created");

      uploadBytesResumable(fileRef, blob).then((snapshot) => {
        console.log("uploaded a blob or file");
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, "products"), {
            name: productName,
            description: desc,
            productPrice: price,
            productImage: downloadURL,
            productLocation: location,
            transID: c,
          }).then((docRef) => {
            console.log("Doc has been added successfully");
            navigation.navigate("Success", {
              paramKey: c,
            });
          });
        });
      });
    } else {
      console.log("Error: please try again!");
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add a Product for Sale</Text>
        <TextInput
          placeholder="Product Name"
          style={styles.input}
          onChangeText={(value) => setProductName(value)}
        />
        <Button title="Choose an image" onPress={handleChoosePhoto} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <TextInput
          placeholder="Description"
          style={styles.input}
          onChangeText={(value) => setDesc(value)}
        />
        <TextInput
          placeholder="Price"
          style={styles.input}
          onChangeText={(value) => setPrice(value)}
        />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ backgroundColor: "white", flex: 1, padding: 24 }}
        >
          <AddressPickup
            placeholderText="Enter pickup location"
            fetchAddress={fetchLocationCoords}
          />
        </ScrollView>

        <Button title="Submit" onPress={submitListing} />
        <Button
          title="View Products"
          onPress={() => navigation.navigate("Sales")}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: "40%",
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    margin: "5%",
    width: "80%",
    height: "5%",
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: "#b9e4c9",
  },
});
