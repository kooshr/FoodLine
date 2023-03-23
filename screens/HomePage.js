import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homePage}>
      <Text style={[styles.popularItems, styles.myLocationTypo]}>
        Popular Items
      </Text>
      <Text style={[styles.recentlyOrdered, styles.myLocationTypo]}>
        Recently Ordered
      </Text>
      <Text style={[styles.myLocation, styles.myLocationTypo]}>
        My Location
      </Text>
      <Text style={[styles.foodline, styles.foodlineFlexBox]}>FoodLine</Text>
      <View style={[styles.locationGroup, styles.groupLayout1]}>
        <View
          style={[
            styles.groupInnerShadowBox,
            styles.groupInnerShadowBox1,
            styles.groupLayout1,
          ]}
        >
          <View
            style={[
              styles.groupChildPosition,
              styles.groupChildLayout1,
              styles.groupLayout1,
            ]}
          />
        </View>
        <Text style={[styles.deliveringTo, styles.deliveringToTypo]}>
          Delivering to:
        </Text>
        <Text
          style={[
            styles.santaCruzCa,
            styles.crown1IconPosition,
            styles.topOfTheFlexBox,
          ]}
        >
          Santa Cruz, CA
        </Text>
        <Image
          style={styles.mapsIcon82141}
          resizeMode="cover"
          source={require("../assets/mapsicon8214-1.png")}
        />
        <Image
          style={[styles.locationGroupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.rightChevron12, styles.rightLayout]}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-2.png")}
        />
      </View>
      <View
        style={[
          styles.easyBakePizzaRecentGroup,
          styles.groupLayout,
          styles.recentGroupPosition,
        ]}
      >
        <View
          style={[
            styles.groupLayout,
            styles.groupInnerShadowBox,
            styles.groupInnerShadowBox1,
          ]}
        >
          <View
            style={[
              styles.groupLayout,
              styles.groupChildPosition,
              styles.groupChildLayout1,
            ]}
          />
        </View>
        <Image
          style={styles.easyBakePizzaRecentGroupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text
          style={[
            styles.easyBakePizza,
            styles.topOfTheTypo,
            styles.foodlineFlexBox,
          ]}
        >
          Easy Bake Pizza
        </Text>
        <Image
          style={[styles.icons8Pizza1001, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8pizza100-1.png")}
        />
        <Image
          style={[styles.rightChevron11, styles.rightLayout]}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-1.png")}
        />
      </View>
      <View
        style={[
          styles.shrimpChipsRecentGroup,
          styles.groupLayout,
          styles.recentGroupPosition,
        ]}
      >
        <View style={[styles.groupInnerShadowBox, styles.groupInnerShadowBox1]}>
          <View style={[styles.groupChildPosition, styles.groupChildLayout1]} />
        </View>
        <Image
          style={styles.easyBakePizzaRecentGroupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Text
          style={[styles.shrimpChips, styles.topOfTheTypo, styles.dietPepsiClr]}
        >
          Shrimp Chips
        </Text>
        <Image
          style={[styles.icons8Pizza1001, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8shrimp100-1.png")}
        />
        <Image
          style={[styles.rightChevron11, styles.rightLayout]}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-11.png")}
        />
      </View>
      <View style={[styles.dietPepsiRecentGroup, styles.dietGroupLayout]}>
        <View
          style={[
            styles.dietGroupLayout,
            styles.groupInnerShadowBox,
            styles.groupInnerShadowBox1,
          ]}
        >
          <View
            style={[
              styles.dietGroupLayout,
              styles.groupChildPosition,
              styles.groupChildLayout1,
            ]}
          />
        </View>
        <Image
          style={[styles.dietPepsiRecentGroupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-22.png")}
        />
        <Text
          style={[styles.dietPepsi, styles.topOfTheTypo, styles.dietPepsiClr]}
        >
          Diet Pepsi
        </Text>
        <Image
          style={styles.rightChevron112}
          resizeMode="cover"
          source={require("../assets/rightchevron-1-12.png")}
        />
        <Image
          style={[styles.icons8OrangeSodaBottle641, styles.icons8Layout]}
          resizeMode="cover"
          source={require("../assets/icons8orangesodabottle64-1.png")}
        />
      </View>
      <View style={[styles.cheetosPopGroup, styles.cheetosGroupLayout]}>
        <View
          style={[
            styles.cheetosPopGroupChild,
            styles.cheetosGroupLayout,
            styles.groupChildPosition,
            styles.groupInnerShadowBox,
          ]}
        />
        <Text style={[styles.seeAllOffers, styles.textTypo]}>
          See all Offers
        </Text>
        <Text style={[styles.flamingHotCheetos, styles.deliveringToTypo]}>
          Flaming Hot Cheetos
        </Text>
        <Text style={[styles.text, styles.textTypo]}>5.0</Text>
        <Text
          style={[styles.topOfThe, styles.topOfTheTypo, styles.topOfTheFlexBox]}
        >
          top of the week
        </Text>
        <Image
          style={[styles.crown1Icon, styles.crown1IconPosition]}
          resizeMode="cover"
          source={require("../assets/crown-1.png")}
        />
        <View style={styles.cheetosPopGroupItem} />
        <Image
          style={[styles.plus1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/plus-1.png")}
        />
        <Image
          style={[styles.star1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/star-1.png")}
        />
        <Image
          style={[
            styles.cheetosCrunchyFlaminHot1,
            styles.cupNoodlesJpgPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/cheetos-crunchy-flamin-hot-1-1.png")}
        />
      </View>
      <View style={[styles.cupNoodlesPopGroup, styles.cheetosGroupLayout]}>
        <View
          style={[
            styles.cheetosPopGroupChild,
            styles.cheetosGroupLayout,
            styles.groupChildPosition,
            styles.groupInnerShadowBox,
          ]}
        />
        <Text style={[styles.seeAllOffers, styles.textTypo]}>
          See All Offers
        </Text>
        <Text
          style={[
            styles.nissanCupNoodles,
            styles.topOfTheTypo,
            styles.topOfTheFlexBox,
          ]}
        >
          Nissan Cup Noodles
        </Text>
        <Text style={[styles.text, styles.textTypo]}>4.8</Text>
        <Text
          style={[styles.topOfThe, styles.topOfTheTypo, styles.topOfTheFlexBox]}
        >
          top of the week
        </Text>
        <Image
          style={[styles.crown1Icon, styles.crown1IconPosition]}
          resizeMode="cover"
          source={require("../assets/crown-11.png")}
        />
        <View style={styles.cheetosPopGroupItem} />
        <Image
          style={[styles.plus1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/plus-11.png")}
        />
        <Image
          style={[styles.star1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/star-11.png")}
        />
        <Image
          style={[styles.cupNoodlesJpg, styles.cupNoodlesJpgPosition]}
          resizeMode="cover"
          source={require("../assets/cup-noodles-jpg.png")}
        />
      </View>
      <View style={[styles.navBar, styles.navLayout]}>
        <View style={[styles.navBarInner, styles.navLayout]}>
          <View
            style={[
              styles.navLayout,
              styles.groupInnerShadowBox,
              styles.groupInnerShadowBox1,
            ]}
          >
            <View
              style={[
                styles.navLayout,
                styles.groupChildPosition,
                styles.groupChildLayout1,
              ]}
            />
          </View>
        </View>
        <Image
          style={[styles.sellIcon, styles.iconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/sell-icon.png")}
        />
        <Image
          style={[styles.buyIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/buy-icon.png")}
        />
        <Image
          style={[styles.homeIcon, styles.iconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/home-icon.png")}
        />
        <Image
          style={[styles.profileIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/profile-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myLocationTypo: {
    height: 19,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserrat,
    fontWeight: "700",
    left: 15,
    position: "absolute",
  },
  foodlineFlexBox: {
    textAlign: "center",
    color: Color.darkslategray,
  },
  groupLayout1: {
    height: 53,
    width: 361,
    position: "absolute",
  },
  groupInnerShadowBox1: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    top: 0,
  },
  groupChildLayout1: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.white,
  },
  deliveringToTypo: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.darkslategray,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  crown1IconPosition: {
    top: 25,
    position: "absolute",
  },
  topOfTheFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  groupChildLayout: {
    height: 25,
    width: 26,
    position: "absolute",
  },
  rightLayout: {
    height: 7,
    width: 8,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 163,
    width: 105,
    position: "absolute",
  },
  recentGroupPosition: {
    top: 235,
    width: 105,
  },
  groupInnerShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  groupChildPosition: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  topOfTheTypo: {
    height: 16,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  icons8Layout: {
    width: 60,
    position: "absolute",
  },
  dietPepsiClr: {
    color: Color.darkslategray,
    height: 16,
    textAlign: "left",
  },
  dietGroupLayout: {
    height: 169,
    width: 105,
    position: "absolute",
  },
  cheetosGroupLayout: {
    height: 148,
    width: 336,
    position: "absolute",
  },
  textTypo: {
    height: 14,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.montserrat,
    position: "absolute",
  },
  iconLayout1: {
    height: 9,
    width: 10,
    top: 120,
    position: "absolute",
    overflow: "hidden",
  },
  cupNoodlesJpgPosition: {
    left: 199,
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
  },
  popularItems: {
    top: 416,
    width: 121,
  },
  recentlyOrdered: {
    top: 203,
    width: 148,
  },
  myLocation: {
    top: 108,
    width: 133,
  },
  foodline: {
    top: 50,
    left: 78,
    fontSize: FontSize.size_lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 37,
    fontFamily: FontFamily.montserrat,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  deliveringTo: {
    left: 130,
    width: 177,
    height: 21,
    fontWeight: "600",
    top: 5,
  },
  santaCruzCa: {
    left: 123,
    fontSize: FontSize.size_base,
    width: 172,
    height: 22,
    fontWeight: "600",
    fontFamily: FontFamily.montserrat,
  },
  mapsIcon82141: {
    top: 1,
    left: 24,
    width: 55,
    height: 50,
    position: "absolute",
  },
  locationGroupChild: {
    top: 14,
    left: 308,
  },
  rightChevron12: {
    left: 317,
    top: 22,
  },
  locationGroup: {
    top: 136,
    left: 14,
  },
  easyBakePizzaRecentGroupChild: {
    top: 121,
    left: 39,
    height: 24,
    width: 26,
    position: "absolute",
  },
  easyBakePizza: {
    top: 82,
    width: 96,
    left: 6,
    wrap: 'break-word',
  },
  icons8Pizza1001: {
    height: 55,
    left: 22,
    top: 22,
  },
  rightChevron11: {
    top: 129,
    left: 48,
  },
  easyBakePizzaRecentGroup: {
    top:125,
    left: 15,
  },
  shrimpChips: {
    top: 87,
    left: 5,
    width: 98,
  },
  shrimpChipsRecentGroup: {
    top: 125,
    left:142,
  },
  dietPepsiRecentGroupChild: {
    top: 125,
    left: 35,
  },
  dietPepsi: {
    top: 90,
    left: 16,
    width: 74,
  },
  rightChevron112: {
    top: 134,
    left: 44,
    height: 8,
    width: 8,
    position: "absolute",
    overflow: "hidden",
  },
  icons8OrangeSodaBottle641: {
    top: 23,
    left: 23,
    height: 58,
  },
  dietPepsiRecentGroup: {
    top: 229,
    left: 270,
  },
  cheetosPopGroupChild: {
    borderRadius: Border.br_md,
    shadowColor: "#000",
  },
  seeAllOffers: {
    top: 76,
    fontWeight: "500",
    color: Color.gray_100,
    width: 88,
    left: 22,
  },
  flamingHotCheetos: {
    top: 57,
    width: 163,
    height: 15,
    left: 22,
    fontWeight: "600",
  },
  text: {
    top: 117,
    left: 125,
    width: 18,
    fontWeight: "600",
    color: Color.black,
    fontSize: FontSize.size_2xs,
  },
  topOfThe: {
    width: 124,
    left: 42,
    top: 22,
  },
  crown1Icon: {
    left: 20,
    width: 12,
    height: 11,
    overflow: "hidden",
  },
  cheetosPopGroupItem: {
    top: 100,
    borderTopRightRadius: Border.br_md,
    borderBottomLeftRadius: Border.br_md,
    backgroundColor: Color.salmon,
    width: 90,
    height: 49,
    left: 0,
    position: "absolute",
  },
  plus1Icon: {
    left: 40,
  },
  star1Icon: {
    left: 110,
  },
  cheetosCrunchyFlaminHot1: {
    width: 122,
    height: 133,
    top: 8,
    left: 199,
  },
  cheetosPopGroup: {
    top: 445,
    left: 15,
  },
  nissanCupNoodles: {
    top: 56,
    width: 199,
    left: 22,
  },
  cupNoodlesJpg: {
    width: 116,
    height: 134,
    top: 5,
  },
  cupNoodlesPopGroup: {
    top: 612,
    left: 15,
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
  homePage: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomePage;
