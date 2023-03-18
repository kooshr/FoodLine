import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MAPS_API_KEY from "../constants/googlemapsapikey";

const AddressPickup = ({ placeholderText, fetchAddress }) => {
  const onPressAddress = (data, details) => {
    console.log("details====>>>", data);
    const placename = data.description;
    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;

    fetchAddress(placename, lat, lng);
  };
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder={placeholderText}
        onPress={onPressAddress}
        query={{
          key: MAPS_API_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: styles.containerStyle,
          textInput: styles.textInputStyle,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: "white",
  },
  textInputStyle: {
    height: 48,
    width: "80%",
    color: "black",
    fontSize: 16,
    backgroundColor: "#f3f3f3",
  },
});

export default AddressPickup;
