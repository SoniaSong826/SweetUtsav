import { color } from "ansi-styles";
import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CartItem({ title, price, amount, option, image, renderRightAction }) {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <View style={styles.card}>
        <View style={styles.itemDetailsContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.text}>{"Amount: " + amount}</AppText>
            <AppText style={styles.text}>{"Option: " + option}</AppText>
          </View>
        </View>
          <AppText style={styles.price}>{price}</AppText>
      </View>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  card: {
    width: windowWidth - 10,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius:7,

  },
  itemDetailsContainer: {
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    flexWrap: "nowrap",
    color: colors.black,
    fontSize: 16,
    marginBottom:3,
  },
  text: {
    color: colors.black,
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
    flexWrap: "nowrap",
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
  },
});

export default CartItem;
