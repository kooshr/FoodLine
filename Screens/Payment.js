import {
  CardField,
  StripeProvider,
  useStripe,
} from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import { Alert, Button, SafeAreaView, View } from "react-native";
import { keys } from "../keys";

const Payment = () => {
  const stripePublishableKey = keys.public;
  // console.log(stripePublishableKey);
  return (
    <StripeProvider publishableKey={stripePublishableKey}>
      <SafeAreaView>
        <StripeTest />
      </SafeAreaView>
    </StripeProvider>
  );
};

const StripeTest = () => {
  const { confirmPayment, initPaymentSheet, presentPaymentSheet } = useStripe();

  const [key, setKey] = useState("");
  useEffect(() => {}, []);

  const handleSheet =  () => {
    console.log("came in here");
       fetch("http://169.233.200.247:3000/create-payment-intent", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("intent", res);
        setKey(res.clientSecret);
        initPaymentSheet({ paymentIntentClientSecret: key });
      })
      .catch((e) => {
        Alert.alert(e.message);
        console.log("fetch error");
      });
    presentPaymentSheet({
      clientSecret: key,
    });
  };

  const createCustomer = () => {};

  // const handlePayment = async () => {
    const { error } = await confirmPayment(key, {
      paymentMethodType: "Card",
      billingDetails: {
        email: "hoe@doe.com",
      },
    });

    if (error) {
      console.log("payment error");
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Payment succesfull");
    }
  // };

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
        // onCardChange={(cardDetails) => {
        //   console.log("cardDetails", cardDetails);
        // }}
        // onFocus={(focusedField) => {
        //   console.log("focusField", focusedField);
        // }}
      />
      {/* <Button title="Pay" onPress={handlePayment} /> */}
      <Button title="Present sheet" onPress={handleSheet} />
      <Button title="Create customer" onPress={createCustomer} />-
    </View>
  );
};

export default Payment;
