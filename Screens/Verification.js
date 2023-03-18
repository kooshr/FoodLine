import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  QueryDocumentSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Verification = ({ navigation }) => {
  ``;
  const [code, setCode] = useState("hello");
  const [price, setPrice] = useState(null);
  const alphanum = /^[a-z0-9]+$/i;
  const updateCode = async (s) => {
    console.log(s);
    const q = query(collection(db, "products"), where("transID", "==", code));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size == 1) {
      console.log("Transaction exists.");
      querySnapshot.forEach((doc) => {
        let p = doc.get("productPrice");
        deleteDoc(doc.ref);
        navigation.navigate("VerificationSuccess", {
          paramKey: p,
        });
      });
    } else {
      console.log("Code does not exist.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.sell}>
        <Button
          title="Sell a product"
          onPress={() => {
            navigation.navigate("AddProduct");
          }}
        />
      </View>
      <Text>Enter your verification code</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setCode(value)}
      />
      <Button title="submit" onPress={() => updateCode(code)} />
      <StatusBar style="auto" />
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  sell: {
    margin: 30,
  },
});
