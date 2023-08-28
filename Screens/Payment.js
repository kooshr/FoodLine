import React, { useState } from "react";
import { View, Button, Alert, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Text, Image } from "react-native";
import { CardField, StripeProvider, useStripe } from "@stripe/stripe-react-native";
import Navbar from "../components/navbar"; // Import your Navbar component here

const Payment = ({ route, navigation }) => {
  const [isCardValid, setIsCardValid] = useState(false);
  const { confirmPayment } = useStripe();

  const { item } = route.params;

  const handlePayment = async () => {
    if (!isCardValid) {
      Alert.alert("Please enter valid card details.");
      return;
    }

    try {
      // Simulate a payment process here
      // You can show loading indicators or any other UI as needed

      // Simulating a successful payment
      Alert.alert("Payment successful!");
    } catch (error) {
      console.error("Error during payment: ", error);
      Alert.alert("Payment failed. Please try again.");
    }
  };

  const handleCardChange = (event) => {
    setIsCardValid(event.valid);
  };

  return (
    <View>
      <Text style={styles.title}>Payment</Text>
      <View style={styles.detailsContainer}>
        <Image style={styles.productImage} source={{ uri: item.productImage }} />
        <Text style={styles.productTitle}>{item.title}</Text>
      </View>
      <View style={styles.innerContainer}>
        <CardField
          postalCodeEnabled={false}
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          style={styles.cardField}
          onCardChange={handleCardChange}
        />
        <Button title="Pay" onPress={handlePayment} />
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F9FB",
  },
  title: {
    marginTop: 80,
    marginBottom: 20,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerContainer: {
    width: "80%",
    margin: 40,
    marginTop:0,
    marginBottom: 105,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
  },
  detailsContainer:{
    width: "60%",
    margin: 80,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardField: {
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
});

export default Payment;
