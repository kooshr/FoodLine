import React, { useState, createRef, useCallback } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

import { doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase.js";
import { useStripe, StripeProvider } from "@stripe/stripe-react-native";
import { keys } from "../keys";

const SignUp = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const stripe = new StripeProvider(
    "pk_test_51M7YkzGshYRC4YtBCaWGkXGZXP6zlPFQ0U7nop4WSY56KCPMk47nDj3kB7POneRlXdizsZpO5T9JQqXMcno1kNIx00ObRJab39"
  );

  const handleSubmitButton = async () => {
    //creates firebase user and stripe customer
    setErrortext("");

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.message);
      });

    await setDoc(doc(db, "Users", userName), {
      name: userName,
      email: userEmail,
      age: userAge,
      college: userAddress,
      password: userPassword,
    });

    try {
      const response = await fetch("http://192.168.1.26:3000/create-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "customer@example.com",
          name: "John Doe",
          metadata: {
            userId: "12345",
          },
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    // await setDoc(doc(db, "stripe_customers", userName), {
    //   customer_id: customer.id,
    //   setup_secret: intent.client_secret,
    // });

    setIsRegistraionSuccess(true);
  };

  const createStripeCustomer = async () => {
    try {
      const response = await fetch("http://192.168.1.26:3000/create-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "customer@example.com",
          name: "John Doe",
          metadata: {
            userId: "12345",
          },
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isRegistraionSuccess) {
    return (
      <StripeProvider>
        <View
          style={{
            flex: 1,
            backgroundColor: "#307ecc",
            justifyContent: "center",
          }}
        >
          <Text style={styles.successTextStyle}>Registration Successful</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextStyle}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </StripeProvider>
    );
  }
  return (
    <StripeProvider>
      <Text>Stripe Customer Creation</Text>
      <Button title="Create Customer" onPress={handleSubmitButton} />
      <View style={{ flex: 1, backgroundColor: "#307ecc" }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}></View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) => setUserName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                  ageInputRef.current && ageInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            {/* <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserAge) => setUserAge(UserAge)}
                underlineColorAndroid="#f000"
                placeholder="Enter Age"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                ref={ageInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  addressInputRef.current && addressInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserAddress) => setUserAddress(UserAddress)}
                underlineColorAndroid="#f000"
                placeholder="Enter Address"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                ref={addressInputRef}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
            </View> */}
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}
            >
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </StripeProvider>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
