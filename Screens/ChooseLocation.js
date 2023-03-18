import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AddressPickup from "../Components/AddressPickup";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { showError } from "../helper/helperFunction";

const ChooseLocation = (props) => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    destinationCoords: {},
  });
  const { pickupCoords, destinationCoords } = state;
  const checkValid = () => {
    if (Object.keys(destinationCoords).length === 0) {
      showError("Please enter your desired meetup location");
      return false;
    }
    return true;
  };
  const onDone = () => {
    const isValid = checkValid();
    if (isValid) {
      props.route.params.getCoordinates({
        pickupCoords,
        destinationCoords,
      });
      navigation.goBack();
    }
  };

  const fetchDestinationCoords = (lat, lng) => {
    setState({
      ...state,
      destinationCoords: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  console.log("props: ", props);
  // console.log("pickup coords: ", pickupCoords);
  // console.log("destination coords: ", destinationCoords);
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "white", flex: 1, padding: 24 }}
      >
        <View style={{ marginBottom: 16 }} />
        <AddressPickup
          placeholderText="Enter destination location"
          fetchAddress={fetchDestinationCoords}
        />
        <CustomButton
          btnText="Done"
          btnStyle={{ marginTop: 24 }}
          onPress={onDone}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChooseLocation;
