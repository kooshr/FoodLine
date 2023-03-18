import React, { useState, useRef, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { StyleSheet, Button, Text, View, Image } from "react-native";
import imagePath from "../constants/imagePath";
import MAPS_API_KEY from "../constants/googlemapsapikey";
import { TouchableOpacity } from "react-native-gesture-handler";
import { locationPermission } from "../helper/helperFunction";
import * as Location from "expo-location";
const Tracker = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // const getCurrentLocation = async () => {
  //   const locPermissionDenied = await locationPermission();
  //   console.log("location permission", locPermissionDenied);
  // };
  const [state, setState] = useState({
    c1: {
      latitude: 37.0016,
      longitude: -122.0573,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    },
    c2: {
      latitude: 37.0003,
      longitude: -122.0545,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    },
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords.latitude);
      setLocation(location);
    })();
  }, []);

  const mapRef = useRef();

  const { c1, c2 } = state;

  const onPressLocation = () => {
    navigation.navigate("ChooseLocation", { getCoordinates: fetchValues });
  };

  const fetchValues = (data) => {
    setState({
      c1: {
        latitude: data.pickupCoords.latitude,
        longitude: data.pickupCoords.longitude,
      },
      c2: {
        latitude: data.destinationCoords.latitude,
        longitude: data.destinationCoords.longitude,
      },
    });
    console.log("data: ", data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={c1}
        >
          <Marker coordinate={c1}>
            <Image
              source={imagePath.currLoc}
              style={{ width: 50, height: 50 }}
            />
          </Marker>
          {Object.keys(c2).length > 0 && (
            <Marker coordinate={c2}>
              <Image
                source={imagePath.greenMarker}
                style={{ width: 50, height: 50 }}
              />
            </Marker>
          )}
          {Object.keys(c2).length > 0 && (
            <MapViewDirections
              origin={c1}
              destination={c2}
              mode="WALKING"
              apikey={MAPS_API_KEY}
              strokeWidth={3}
              strokeColor="#690101"
              optimizeWaypoints={true}
              onReady={(result) => {
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100,
                  },
                });
              }}
            />
          )}
        </MapView>
      </View>
      <View style={styles.bottomCard}>
        <TouchableOpacity style={styles.inputStyle} onPress={onPressLocation}>
          <Text>Choose your location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomCard: {
    backgroundColor: "white",
    width: "100%",
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  inputStyle: {
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    marginTop: 16,
  },
});
