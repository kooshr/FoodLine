import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SellPage = () => {
  return (
    <View style={styles.sellPage}>
      <View style={[styles.addButton, styles.addLayout1]}>
        <View style={[styles.addPosition, styles.addLayout1]} />
        <Text style={[styles.add, styles.addTypo, styles.addClr]}>Add</Text>
      </View>
      <View style={[styles.image, styles.rectLayout1]}>
        <View style={[styles.rectWrapperShadowBox, styles.rectLayout1]}>
          <View style={[styles.rectPosition, styles.rectLayout1]} />
        </View>
        <View style={styles.productBox}>
          <Text style={[styles.email, styles.emailFlexBox1, styles.emailTypo]}>
            Post a picture of your product!
          </Text>
        </View>
        <View style={[styles.addButton1, styles.addLayout]}>
          <View style={[styles.addLayout, styles.addPosition]} />
          <Text style={[styles.insert, styles.emailFlexBox1, styles.addClr]}>
            Insert
          </Text>
        </View>
      </View>
      <View style={[styles.quantity, styles.rectLayout, styles.pricePosition]}>
        <View style={[styles.rectLayout, styles.rectWrapperShadowBox]}>
          <View style={[styles.rectLayout, styles.rectPosition]} />
        </View>
        <View style={[styles.quantityBox, styles.boxPosition]}>
          <Text
            style={[
              styles.email1,
              styles.emailFlexBox,
              styles.emailTypo,
              styles.emailTypo1,
            ]}
          >
            Quantity
          </Text>
          <View style={[styles.quantityBoxChild, styles.boxChildLayout]} />
          <Text
            style={[styles.quantityInput, styles.priceClr, styles.inputTypo]}
          >
            12
          </Text>
        </View>
      </View>
      <View style={[styles.price, styles.rectLayout, styles.pricePosition]}>
        <View style={styles.rectWrapperShadowBox}>
          <View style={styles.rectPosition} />
        </View>
        <View
          style={[styles.priceBox, styles.email2Layout, styles.boxPosition]}
        >
          <Text
            style={[
              styles.email2Layout,
              styles.emailFlexBox,
              styles.emailTypo,
              styles.emailTypo1,
            ]}
          >
            Price Per Item
          </Text>
          <View style={[styles.priceBoxChild, styles.boxChildLayout]} />
          <Text style={[styles.priceInput, styles.priceClr, styles.inputTypo]}>
            2.50
          </Text>
        </View>
      </View>
      <View style={[styles.product, styles.productLayout]}>
        <View style={[styles.productLayout, styles.rectWrapperShadowBox]}>
          <View style={[styles.productLayout, styles.rectPosition]} />
        </View>
        <View style={[styles.productBox1, styles.boxPosition]}>
          <Text style={[styles.email3, styles.email3Typo, styles.emailFlexBox]}>
            Product Name
          </Text>
          <View style={styles.productBoxChild} />
          <Text
            style={[styles.priceInput1, styles.email3Typo, styles.priceClr]}
          >
            Flaming Hot Cheetos
          </Text>
        </View>
      </View>
      <Text style={[styles.sellItems, styles.addTypo]}>Sell Items!</Text>
      <View style={[styles.navBar, styles.navLayout]}>
        <View style={[styles.navBarInner, styles.navLayout]}>
          <View style={[styles.navLayout, styles.rectWrapperShadowBox]}>
            <View style={[styles.navLayout, styles.rectPosition]} />
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
  addLayout1: {
    height: 73,
    width: 353,
    position: "absolute",
  },
  addTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  addClr: {
    color: Color.white,
    fontSize: FontSize.size_xl,
  },
  rectLayout1: {
    height: 346,
    width: 353,
    position: "absolute",
  },
  emailFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    position: "absolute",
  },
  emailTypo: {
    fontSize: FontSize.size_base,
    left: 0,
  },
  addLayout: {
    height: 55,
    width: 187,
    position: "absolute",
  },
  addPosition: {
    backgroundColor: Color.salmon,
    borderRadius: Border.br_lg,
    left: 0,
    top: 0,
  },
  rectLayout: {
    height: 95,
    width: 170,
    position: "absolute",
  },
  pricePosition: {
    top: 213,
    width: 170,
  },
  rectWrapperShadowBox: {
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
  rectPosition: {
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  boxPosition: {
    left: 12,
    top: 7,
  },
  emailFlexBox: {
    textAlign: "left",
    color: Color.black,
    top: 0,
  },
  emailTypo1: {
    fontFamily: FontFamily.montserrat,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "600",
  },
  boxChildLayout: {
    height: 40,
    width: 146,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  priceClr: {
    color: Color.gray_200,
    textAlign: "center",
  },
  inputTypo: {
    width: 146,
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  email2Layout: {
    width: 147,
    position: "absolute",
  },
  productLayout: {
    height: 91,
    width: 353,
    position: "absolute",
  },
  email3Typo: {
    height: 23,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    left: 0,
    position: "absolute",
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
  add: {
    top: 16,
    left: 138,
    width: 83,
    height: 41,
    fontWeight: "600",
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_xl,
  },
  addButton: {
    top: 681,
    left: 24,
  },
  email: {
    color: Color.black,
    width: 286,
    top: 0,
  },
  productBox: {
    top: 17,
    left: 34,
    height: 48,
    width: 286,
    position: "absolute",
  },
  insert: {
    top: 12,
    left: 23,
    width: 142,
    height: 31,
    color: Color.white,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  addButton1: {
    top: 118,
    left: 77,
  },
  image: {
    top: 322,
    left: 24,
  },
  email1: {
    width: 135,
    position: "absolute",
  },
  quantityBoxChild: {
    top: 40,
    left: 2,
  },
  quantityInput: {
    top: 47,
  },
  quantityBox: {
    width: 148,
    height: 80,
    position: "absolute",
  },
  quantity: {
    left: 207,
  },
  priceBoxChild: {
    top: 41,
    left: 0,
  },
  priceInput: {
    top: 48,
  },
  priceBox: {
    height: 81,
  },
  price: {
    left: 24,
  },
  email3: {
    width: 220,
  },
  productBoxChild: {
    top: 39,
    height: 38,
    width: 319,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  priceInput1: {
    top: 46,
    width: 319,
  },
  productBox1: {
    height: 77,
    width: 319,
    position: "absolute",
  },
  product: {
    top: 104,
    left: 24,
  },
  sellItems: {
    top: 34,
    left: 41,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    width: 308,
    height: 34,
    color: Color.black,
  },
  navBarInner: {
    left: 0,
    top: 0,
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
    top: 772,
    left: 5,
  },
  sellPage: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SellPage;
