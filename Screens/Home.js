import * as React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import colors from "./colors.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

Feather.loadFont();

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <View style={styles.SearchBgLight}></View>
          <View style={styles.SearchBgDarkRight}></View>
          <View style={styles.SearchBgDarkLeft}></View>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <View>
          <View style={styles.FeaturedBG}></View>
          <View style={styles.FeaturedBGInner}></View>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <View>
          <View style={styles.menuTabs}></View>
          <View style={styles.menuTabs}></View>
          <View style={styles.menuTabs}></View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },

  SearchBgLight: {
    position: "relative",
    width: 370,
    height: 50,
    left: 10,
    top: 15,
    backgroundColor: colors.tint,
    borderRadius: 40,
  },

  SearchBgDarkRight: {
    position: "relative",
    width: 270,
    height: 40,
    left: 100,
    top: -30,
    backgroundColor: colors.search,
    borderRadius: 40,
  },

  SearchBgDarkLeft: {
    position: "relative",
    width: 70,
    height: 40,
    left: 20,
    top: -70,
    backgroundColor: colors.search,
    borderRadius: 40,
  },

  FeaturedBG: {
    position: "absolute",
    left: 10,
    top: -50,
    width: 370,
    height: 230,
    backgroundColor: colors.tint,
    borderRadius: 40,
  },

  FeaturedBGInner: {
    position: "relative",
    left: 20,
    top: -40,
    width: 350,
    height: 210,
    backgroundColor: colors.search,
    borderRadius: 40,
  },

  menuTabs: {
    position: "relative",
    left: 10,
    top: -10,
    width: 370,
    height: 110,
    backgroundColor: colors.tint,
    borderRadius: 40,
    marginBottom: 15,
  },
});
