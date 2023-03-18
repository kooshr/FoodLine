import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Button, Text, View } from "react-native";
const VerificationSuccess = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Icon name="check-circle" size={200} color="green" />
      <Text style={styles.message}>
        Success! You have received {route.params.paramKey}
      </Text>
      <Button
        title="View Products"
        onPress={() => navigation.navigate("Sales")}
      />
      <Button
        title="Sell another product"
        onPress={() => {
          navigation.navigate("AddProduct");
        }}
      />
    </View>
  );
};

export default VerificationSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 30,
  },
});