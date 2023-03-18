import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Image } from "react-native-elements";

const ViewProduct = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      <Image
        source={{ uri: route.params.image }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{route.params.description}</Text>
      <Text>{route.params.price}</Text>
      <Text>{route.params.location.placename}</Text>
      <Button
        title="View Products"
        onPress={() => navigation.navigate("Sales")}
      />
    </View>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({});
