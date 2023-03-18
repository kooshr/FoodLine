import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { StyleSheet, View, Button, Text, ScrollView } from "react-native";
import { db } from "../firebase";
import { ref } from "firebase/storage";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { SafeAreaView } from "react-native-safe-area-context";

const Sales = ({ navigation }) => {
  const [products, setProducts] = useState(null);
  const [trial, setTrial] = useState(false);
  const fetchProducts = async () => {
    console.log("called 2");
    const q = query(collection(db, "products"));
    // getDocs(q).then((querySnapshot) => {
    //   const prods = [];
    //   console.log("start");
    //   querySnapshot.forEach((doc) => {
    //     console.log("middle");
    //     prods.push(doc.data());
    //   });
    //   console.log(prods);
    //   setProducts(prods);
    // });

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const prods = [];
      querySnapshot.forEach((doc) => {
        prods.push(doc.data());
      });
      setProducts(prods);
    });
  };

  useEffect(() => {
    const getProducts = () => {
      console.log("called");
      fetchProducts();
      //console.log(prods);
    };

    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Button
            title="Sell a product"
            onPress={() => {
              navigation.navigate("AddProduct");
            }}
          />
          <Button
            title="Enter a verification code"
            onPress={() => {
              navigation.navigate("Verification");
            }}
          />
          {products &&
            products.map((product) => {
              return (
                <ProductCard
                  key={product.name}
                  title={product.name}
                  img={product.productImage}
                  price={product.productPrice}
                  desc={product.description}
                  location={product.productLocation}
                  navigation={navigation}
                />
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Sales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
