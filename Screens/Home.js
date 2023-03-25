import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import colors from "./colors.js";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase.js";
import { TouchableOpacity } from "react-native";

Feather.loadFont();

const Home = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  const goToPay = () => {
    navigation.replace("Payment");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={navigation.navigate("AddProduct")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sell a Product</Text>
      </TouchableOpacity>

      {/* <Button
        onPress={goToPay}
        title="Payment Page"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    width: 100,
    padding: 10,
  },
  buttonText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
