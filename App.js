import React, { useEffect } from "react";
import Home from "./Screens/Home";
import Sell from "./Screens/Sell";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Payment from "./Screens/Payment";
import Search from "./Screens/Search"
import Details from "./Screens/Details";
import Profile from "./Screens/Profile"

import { AuthProvider } from "./Auth";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { StyleSheet, Text, Button, Alert } from "react-native";
import { StripeProvider, usePaymentSheet } from "@stripe/stripe-react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false,}}/>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false, }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false, }} />
            <Stack.Screen name="Sell" component={Sell} options={{headerShown:false,}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false,}}/>
            <Stack.Screen name="Payment" component={Payment} options={{headerShown:false,}}/>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});

export default App;
