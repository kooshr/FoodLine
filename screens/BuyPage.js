import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const BuyPage = () => {
  return (
    <View style={styles.buyPage}>
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarInnerShadowBox, styles.searchLayout]}>
          <View style={[styles.groupPosition, styles.searchLayout]} />
        </View>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search-icon.png")}
        />
        <View style={styles.searchLine} />
        <Text style={styles.search}>Search</Text>
      </View>
      <View style={styles.recentlySearched}>
        <Text style={styles.recentlyOrdered}>Recently Searched</Text>
        <View style={[styles.item1, styles.itemLayout, styles.itemLayout1]}>
          <Text style={[styles.sunkistMangoSearch, styles.searchTypo]}>
            Sunkist Sun Dried Mango
          </Text>
          <Image
            style={[
              styles.clockIco1,
              styles.itemLayout,
              styles.clockIco1Position,
            ]}
            resizeMode="cover"
            source={require("../assets/clock-ico-1.png")}
          />
        </View>
        <View style={[styles.item2, styles.itemLayout, styles.itemLayout1]}>
          <Text style={[styles.sunkistMangoSearch, styles.searchTypo]}>
            Diet Pepsi, 8 oz.
          </Text>
          <Image
            style={[
              styles.clockIco1,
              styles.itemLayout,
              styles.clockIco1Position,
            ]}
            resizeMode="cover"
            source={require("../assets/clock-ico-2.png")}
          />
        </View>
        <View style={[styles.item3, styles.itemLayout, styles.itemLayout1]}>
          <Text style={[styles.fairlifeSearch, styles.searchTypo]}>
            Fairlife, 18 pack
          </Text>
          <Image
            style={[
              styles.clockIco1,
              styles.itemLayout,
              styles.clockIco1Position,
            ]}
            resizeMode="cover"
            source={require("../assets/clock-ico-1.png")}
          />
        </View>
      </View>
      <View style={[styles.navBar, styles.navLayout]}>
        <View style={[styles.navLayout, styles.clockIco1Position]}>
          <View style={[styles.navLayout, styles.searchBarInnerShadowBox]}>
            <View style={[styles.navLayout, styles.groupPosition]} />
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
  searchLayout: {
    height: 53,
    width: 379,
    position: "absolute",
  },
  itemLayout: {
    height: 32,
    position: "absolute",
  },
  itemLayout1: {
    width: 367,
    left: 3,
    height: 32,
  },
  searchTypo: {
    top:15,
    width: 328,
    fontSize: FontSize.size_sm,
    left: 39,
    height: 29,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  clockIco1Position: {
    left: 0,
    top:10,
  },
  navLayout: {
    height: 68,
    width: 379,
    position: "absolute",
  },
  searchBarInnerShadowBox: {
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
  groupPosition: {
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
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
  searchIcon: {
    top: 11,
    left: 20,
    width: 31,
    height: 30,
    position: "absolute",
  },
  searchLine: {
    top: 42,
    backgroundColor: Color.black,
    width: 292,
    height: 1,
    left: 64,
    position: "absolute",
  },
  search: {
    top: 15,
    fontSize: 18,
    color: "#b3b3b3",
    width: 94,
    height: 24,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    left: 64,
    position: "absolute",
  },
  searchBar: {
    top: 45,
    left: 5,
  },
  recentlyOrdered: {
    fontSize: 24,
    fontWeight: "600",
    width: 324,
    height: 50,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    left: 0,
    top:10,
    position: "absolute",
  },
  sunkistMangoSearch: {
    top: 4,
  },
  clockIco1: {
    width: 32,
    overflow: "hidden",
  },
  item1: {
    top: 40,
  },
  item2: {
    top: 80,
  },
  fairlifeSearch: {
    top: 5,
  },
  item3: {
    top: 120,
  },
  recentlySearched: {
    top: 100,
    width: 370,
    height: 148,
    left: 6,
    position: "absolute",
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
  buyPage: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default BuyPage;
