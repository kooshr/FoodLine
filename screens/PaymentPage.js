import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PaymentPage = () => {
  return (
    <View style={styles.paymentPage}>
      <View style={[styles.goBack, styles.backLayout]}>
        <View style={[styles.wrapperShadowBox, styles.backLayout]}>
          <View style={[styles.groupPosition, styles.backLayout]} />
        </View>
        <Text style={styles.payment}>Go Back</Text>
        <Image
          style={styles.goBackChild}
          resizeMode="cover"
          source={require("../assets/ellipse-34.png")}
        />
        <Image
          style={styles.rightChevron12}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-24.png")}
        />
      </View>
      <View style={[styles.paymentAreaGroup, styles.rectLayout]}>
        <View style={[styles.rectLayout, styles.wrapperShadowBox]}>
          <View style={[styles.rectLayout, styles.groupPosition]} />
        </View>
        <View style={[styles.firstName, styles.nameLayout]}>
          <View style={styles.firstNameChild} />
          <Text style={[styles.firstName1, styles.nameTypo]}>First name</Text>
          <Text style={[styles.joe, styles.joeTypo]}>Joe</Text>
        </View>
        <View style={[styles.lastName, styles.nameLayout]}>
          <View style={styles.firstNameChild} />
          <Text style={[styles.lastName1, styles.nameTypo]}>Last name</Text>
          <Text style={[styles.joe, styles.joeTypo]}>Mitchell</Text>
        </View>
        <View style={[styles.cardNumber, styles.cvvLayout1]}>
          <Text style={[styles.cardNumber1, styles.nameTypo]}>
            <Text style={styles.cardNumber2}>Card Number</Text>
          </Text>
          <View style={[styles.numberPosition, styles.childLayout]} />
          <Text style={[styles.inputTypo, styles.numberPosition]}>
            4097 5800 6594 1756
          </Text>
        </View>
        <View
          style={[styles.expirationDate, styles.cvvLayout, styles.cvvLayout1]}
        >
          <Text style={[styles.cvvLayout, styles.nameTypo]}>
            Expiration Date (MM/YY)
          </Text>
          <View style={[styles.inputPosition, styles.childLayout]} />
          <Text style={[styles.inputPosition, styles.inputTypo]}>09</Text>
          <View style={[styles.yearInputPosition, styles.childLayout]} />
          <Text style={[styles.yearInputPosition, styles.inputTypo]}>29</Text>
        </View>
        <View style={[styles.cvv, styles.cvvLayout, styles.cvvLayout1]}>
          <Text style={styles.nameTypo}>Expiration Date (MM/YY)</Text>
          <View style={styles.childLayout} />
          <Text style={[styles.cvvInput, styles.inputPosition, styles.joeTypo]}>
            075
          </Text>
        </View>
      </View>
      <View style={[styles.navBar, styles.navLayout]}>
        <View style={[styles.navBarInner, styles.navLayout]}>
          <View style={[styles.navLayout, styles.wrapperShadowBox]}>
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
  backLayout: {
    height: 75,
    width: 353,
    position: "absolute",
  },
  rectLayout: {
    height: 461,
    width: 353,
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
  groupPosition: {
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  nameLayout: {
    height: 79,
    width: 133,
    top: 27,
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  joeTypo: {
    textAlign: "center",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
  },
  cvvLayout1: {
    height: 81,
    left: 26,
  },
  childLayout: {
    top: 41,
    height: 40,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_xs,
  },
  numberPosition: {
    width: 282,
    left: 0,
    position: "absolute",
  },
  cvvLayout: {
    width: 268,
    position: "absolute",
  },
  inputTypo: {
    top: 48,
    textAlign: "center",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
  },
  inputPosition: {
    width: 56,
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
  payment: {
    top: 16,
    left: 104,
    fontSize: FontSize.size_xl,
    display: "flex",
    alignItems: "center",
    width: 162,
    height: 43,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    position: "absolute",
  },
  goBackChild: {
    top: 21,
    left: 34,
    width: 44,
    height: 33,
    position: "absolute",
  },
  rightChevron12: {
    top: 31,
    left: 46,
    width: 18,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  goBack: {
    top: 66,
    left: 20,
  },
  firstNameChild: {
    top: 39,
    width: 132,
    height: 40,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  firstName1: {
    width: 127,
    position: "absolute",
  },
  joe: {
    top: 47,
    left: 18,
    width: 93,
    position: "absolute",
  },
  firstName: {
    left: 26,
    width: 133,
    top: 27,
  },
  lastName1: {
    width: 118,
    position: "absolute",
  },
  lastName: {
    left: 176,
    width: 133,
    top: 27,
  },
  cardNumber2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  cardNumber1: {
    width: 204,
    position: "absolute",
  },
  cardNumber: {
    top: 137,
    width: 283,
    position: "absolute",
  },
  yearInputPosition: {
    left: 71,
    width: 56,
    position: "absolute",
  },
  expirationDate: {
    top: 249,
  },
  cvvInput: {
    top: 49,
  },
  cvv: {
    top: 345,
  },
  paymentAreaGroup: {
    top: 172,
    left: 20,
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
    top: 767,
    left: 5,
  },
  paymentPage: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PaymentPage;
