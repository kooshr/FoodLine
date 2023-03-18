import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import {
  Card,
  Text,
  Button,
  Divider,
  Image,
  Icon,
} from "react-native-elements";
const ProductCard = (props) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.container}>
      <View style={{ flexShrink: 1 }}>
        <Card.Title style={{ flexShrink: 1 }}>{props.title}</Card.Title>
      </View>
      <Card.Divider />
      <Card.Image
        source={{
          uri: props.img,
        }}
      />
      <Text style={{ marginBottom: 10 }}>
        {props.title} : {props.price}
      </Text>
      <Text>{props.desc}</Text>
      <Text>{props.location.placename}</Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        color="8b0000"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
        onPress={() => {
          navigation.navigate("ViewProduct", {
            name: props.title,
            image: props.img,
            description: props.desc,
            price: props.price,
          });
        }}
      />
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "20%",
  },
});
