import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfilePage = () => {
  return (
    <View style={styles.profilePage}>
      <View style={[styles.locationGroup, styles.groupLayout]}>
        <View style={[styles.wrapperShadowBox, styles.groupLayout]}>
          <View style={[styles.groupPosition, styles.groupLayout]} />
        </View>
        <Text style={[styles.payment, styles.paymentTypo]}>Location</Text>
        <Image
          style={[styles.locationGroupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-32.png")}
        />
        <Image
          style={[styles.rightChevron12, styles.rightLayout]}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-22.png")}
        />
        <Image
          style={styles.mapsIcon82141}
          resizeMode="cover"
          source={require("../assets/mapsicon8214-11.png")}
        />
      </View>
      <View style={[styles.paymentGroup, styles.groupLayout]}>
        <View style={styles.groupLayout}>
          <View style={styles.groupLayout} />
        </View>
        <Text style={[styles.payment1, styles.paymentTypo]}>Payment</Text>
        <Image
          style={[styles.paymentPosition, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-33.png")}
        />
        <Image
          style={[styles.rightChevron121, styles.rightLayout]}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-23.png")}
        />
        <Image
          style={[styles.paymentIcon, styles.paymentPosition]}
          resizeMode="cover"
          source={require("../assets/payment-icon.png")}
        />
      </View>
      <View style={[styles.basicInformatonGroup, styles.rectLayout]}>
        <View style={[styles.rectLayout, styles.wrapperShadowBox]}>
          <View style={[styles.rectLayout, styles.groupPosition]} />
        </View>
        <View style={[styles.firstName, styles.nameLayout]}>
          <View style={styles.firstNameChild} />
          <Text style={[styles.firstName1, styles.nameTypo]}>First name</Text>
          <Text style={styles.joe}>Joe</Text>
        </View>
        <View style={[styles.lastName, styles.nameLayout]}>
          <View style={styles.firstNameChild} />
          <Text style={[styles.lastName1, styles.nameTypo]}>Last name</Text>
          <Text style={styles.joe}>Mitchell</Text>
        </View>
        <View
          style={[styles.phoneNumber, styles.emailLayout1, styles.numberLayout]}
        >
          <Text style={[styles.phoneNumber1, styles.nameTypo]}>
            <Text style={styles.phoneNumber2}>Phone Number</Text>
          </Text>
          <View style={[styles.childPosition, styles.numberLayout]} />
          <Text style={[styles.numberTypo, styles.numberLayout]}>
            (925) - 226 - 6783
          </Text>
        </View>
        <View style={[styles.email, styles.emailLayout, styles.emailLayout1]}>
          <Text style={[styles.email1, styles.nameTypo]}>Email</Text>
          <View style={[styles.emailLayout, styles.childPosition]} />
          <Text style={[styles.emailLayout, styles.numberTypo]}>
            jit.licker@boof.net
          </Text>
        </View>
      </View>
      <View style={[styles.navBar, styles.navInnerLayout]}>
        <View style={[styles.navBarInner, styles.navInnerLayout]}>
          <View style={[styles.navInnerLayout, styles.wrapperShadowBox]}>
            <View style={[styles.navInnerLayout, styles.groupPosition]} />
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
  groupLayout: {
    height: 95,
    width: 353,
    position: "absolute",
  },
  paymentTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 101,
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    width: 25,
    left: 301,
  },
  rightLayout: {
    height: 8,
    width: 8,
    left: 310,
    position: "absolute",
    overflow: "hidden",
  },
  paymentPosition: {
    top: 29,
    position: "absolute",
  },
  rectLayout: {
    height: 355,
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
    width: 152,
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
    position: "absolute",
  },
  emailLayout1: {
    height: 81,
    left: 11,
  },
  numberLayout: {
    width: 223,
    position: "absolute",
  },
  emailLayout: {
    width: 260,
    position: "absolute",
  },
  childPosition: {
    top: 41,
    height: 40,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_xs,
    left: 0,
  },
  numberTypo: {
    top: 48,
    textAlign: "center",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    left: 0,
  },
  navInnerLayout: {
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
    width: 194,
    height: 44,
    top: 27,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 101,
  },
  locationGroupChild: {
    top: 36,
    position: "absolute",
  },
  rightChevron12: {
    top: 45,
  },
  mapsIcon82141: {
    top: 21,
    left: 33,
    width: 54,
    height: 53,
    position: "absolute",
  },
  locationGroup: {
    top: 563,
    left: 18,
  },
  payment1: {
    top: 25,
    width: 202,
    height: 49,
  },
  rightChevron121: {
    top: 38,
  },
  paymentIcon: {
    left: 25,
    width: 62,
    height: 45,
  },
  paymentGroup: {
    top: 441,
    left: 18,
  },
  firstNameChild: {
    top: 39,
    height: 40,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_xs,
    width: 152,
    left: 0,
    position: "absolute",
  },
  firstName1: {
    width: 115,
  },
  joe: {
    top: 47,
    left: 21,
    width: 106,
    textAlign: "center",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserrat,
    fontWeight: "600",
    position: "absolute",
  },
  firstName: {
    left: 11,
    width: 152,
  },
  lastName1: {
    width: 112,
  },
  lastName: {
    left: 183,
  },
  phoneNumber2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  phoneNumber1: {
    width: 165,
  },
  phoneNumber: {
    top: 137,
  },
  email1: {
    width: 61,
  },
  email: {
    top: 249,
  },
  basicInformatonGroup: {
    top: 59,
    left: 18,
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
    top: 770,
    left: 5,
  },
  profilePage: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ProfilePage;
