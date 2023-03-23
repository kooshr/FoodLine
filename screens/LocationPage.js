import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LocationPage = () => {
  return (
    <View style={styles.locationPage}>
      <View style={[styles.goBack, styles.backLayout]}>
        <View style={[styles.wrapperShadowBox, styles.backLayout]}>
          <View
            style={[styles.groupChild, styles.groupPosition, styles.backLayout]}
          />
        </View>
        <Text style={styles.payment}>Go Back</Text>
        <Image
          style={styles.goBackChild}
          resizeMode="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={styles.rightChevron12}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-21.png")}
        />
      </View>
      <View style={[styles.paymentAreaGroup, styles.rectLayout]}>
        <View style={[styles.rectLayout, styles.wrapperShadowBox]}>
          <View
            style={[styles.bgRect, styles.rectLayout, styles.groupPosition]}
          />
        </View>
      </View>
      <View style={styles.mapsZoomLevels2City}>
        <Image
          style={styles.mapOfBirminghamCity}
          resizeMode="cover"
          source={require("../assets/map-of-birmingham-city.png")}
        />
      </View>
      <View style={[styles.navBar, styles.navLayout]}>
        <View style={[styles.navBarInner, styles.navLayout]}>
          <View style={[styles.navLayout, styles.wrapperShadowBox]}>
            <View
              style={[styles.groupItem, styles.navLayout, styles.groupPosition]}
            />
          </View>
        </View>
        <Image
          style={[styles.sellIcon, styles.iconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/sell-icon.png")}
        />
        <Image
          style={[styles.buyIcon, styles.iconPosition, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/buy-icon.png")}
        />
        <Image
          style={[styles.homeIcon, styles.iconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/home-icon.png")}
        />
        <Image
          style={[styles.profileIcon, styles.iconPosition, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/profile-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backLayout: {
    height: 70,
    width: 339,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  rectLayout: {
    height: 531,
    width: 339,
    position: "absolute",
  },
  wrapperShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: 0,
    top: 0,
  },
  navLayout: {
    height: 68,
    width: 379,
    position: "absolute",
  },
  iconPosition: {
    height: 42,
    top: 8,
    position: "absolute",
  },
  iconLayout: {
    width: 41,
    height: 42,
    top: 8,
  },
  iconLayout1: {
    height: 42,
    top: 8,
  },
  groupChild: {
    backgroundColor: Color.white,
  },
  payment: {
    top: 15,
    left: 100,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserrat,
    color: Color.black,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 156,
    height: 40,
    position: "absolute",
  },
  goBackChild: {
    top: 20,
    left: 33,
    height: 31,
    width: 42,
    position: "absolute",
  },
  rightChevron12: {
    top: 29,
    left: 44,
    width: 17,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  goBack: {
    top: 35,
    left: 24,
  },
  bgRect: {
    backgroundColor: Color.white,
  },
  paymentAreaGroup: {
    top: 166,
    left: 24,
  },
  mapOfBirminghamCity: {
    marginTop: -239,
    marginLeft: -142.5,
    top: "50%",
    left: "50%",
    width: 1056,
    height: 699,
    position: "absolute",
  },
  mapsZoomLevels2City: {
    top: 191,
    left: 51,
    width: 285,
    height: 478,
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    backgroundColor: Color.white,
  },
  navBarInner: {
    left: 0,
    top: 0,
    width: 379,
  },
  sellIcon: {
    left: 213,
  },
  buyIcon: {
    left: 124,
    width: 48,
  },
  homeIcon: {
    left: 42,
  },
  profileIcon: {
    left: 295,
    width: 42,
  },
  navBar: {
    top: 774,
    left: 6,
  },
  locationPage: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LocationPage;
