import React, { useEffect, useState } from "react";
import { Alert, Button, View } from "react-native";
import { CardField, StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { keys } from "../keys";

const Payment = () => {
  const stripePublishableKey = keys.public;

  return (
    <StripeProvider publishableKey={stripePublishableKey}>
      <StripeTest />
    </StripeProvider>
  );
};

const StripeTest = () => {
  const { confirmPayment, initPaymentSheet, presentPaymentSheet } = useStripe();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await fetch("http://your-api-endpoint.com/create-payment-intent", {
          method: "POST",
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
        initPaymentSheet({ paymentIntentClientSecret: data.clientSecret });
      } catch (error) {
        console.error("Error fetching payment intent: ", error);
      }
    };

    fetchPaymentIntent();
  }, []);

  const handlePayment = async () => {
    try {
      const { error } = await confirmPayment(clientSecret, {
        type: "Card",
        billingDetails: {
          email: "test@example.com",
        },
      });

      if (error) {
        Alert.alert("Payment failed. Please try again.");
      } else {
        Alert.alert("Payment successful!");
      }
    } catch (error) {
      console.error("Error during payment: ", error);
      Alert.alert("Payment failed. Please try again.");
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
      />
      <Button title="Pay" onPress={handlePayment} />
      <Button title="Present sheet" onPress={() => presentPaymentSheet()} />
    </View>
  );
};

export default Payment;
