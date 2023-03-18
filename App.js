import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text, LogBox } from "react-native";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home.js";
import Verification from "./Screens/Verification.js";
import Sales from "./Screens/Sales.js";
import AddProduct from "./Screens/AddProduct.js";
import Success from "./Screens/Success.js";
import VerificationSuccess from "./Screens/VerificationSuccess.js";
import ViewProduct from "./Screens/ViewProduct.js";
import Tracker from "./Screens/Tracker.js";
import ChooseLocation from "./Screens/ChooseLocation.js";
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Sales" component={Sales} /> */}
        {/* <Stack.Screen name="ChooseLocation" component={ChooseLocation} /> */}
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen
          name="VerificationSuccess"
          component={VerificationSuccess}
        />
        <Stack.Screen name="ViewProduct" component={ViewProduct} />
        {/* <Stack.Screen name="Tracker" component={Tracker} />
        <Stack.Screen name="ChooseLocation" component={ChooseLocation} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
