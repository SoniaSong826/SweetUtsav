import { color } from "ansi-styles";
import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

function OrderItem({ title, price, dateTime, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.itemDetailsContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.text}>{"Time: " + dateTime}</AppText>
        </View>
      </View>
      <AppText style={styles.price}>{price}</AppText>
    </TouchableOpacity>
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
    borderRadius: 7,
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
    marginBottom: 3,
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
    color: colors.secondary,
    fontSize: 20,
  },
});

export default OrderItem;
