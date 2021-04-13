import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, price, image }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.image} source={image} />
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.price}>{price}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 115,
    height: 172,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: colors.white,
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 12,
    marginVertical: 8,
    marginHorizontal:5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    //overflow:"hidden",
  },
  title: {
    flexWrap: "nowrap",
    color: colors.black,
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    flex: 1,
    flexWrap: "nowrap",
  },
  image: {
    width: 105,
    height: 105,
    marginBottom: 10,
  },
});

export default Card;
