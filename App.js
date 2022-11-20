import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { setDoc, doc } from "firebase/firestore";
import { db } from "/Users/rithwikvaidun/food-delivery/firebase.js";

export default function App() {
  const test = async (x) => {
    console.log(x);
    await setDoc(doc(db, "charachters", "mario"), {
      employment: "rithwik sad",
      outfit: "red",
    });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start rathik ? your apip!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => test(8)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
