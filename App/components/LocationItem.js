import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function LocationItem({
  image,
  title,
  address1,
  address2,
  tel,
  mobile,
  iconFirst,
  iconSecond,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.text}>{address1}</AppText>
        <AppText style={styles.text}>{address2}</AppText>
        <View style={styles.telContainer}>
          <MaterialCommunityIcons
            name={iconFirst}
            size={15}
            color={colors.black}
          ></MaterialCommunityIcons>
          <AppText style={styles.text}>{tel}</AppText>
        </View>
        <View style={styles.telContainer}>
          <MaterialCommunityIcons
            name={iconSecond}
            size={15}
            color={colors.black}
          ></MaterialCommunityIcons>
          <AppText style={styles.text}>{mobile}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "flex-start",
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
  textContainer: {
    justifyContent: "center",
  },
  title: {
    color: colors.black,
    fontSize: 18,
  },
  text: {
    color: colors.black,
    fontFamily: "Roboto_400Regular",
  },
  telContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  telIcon: {
    height: 14,
    width: 14,
    marginRight: 2,
  },
});

export default LocationItem;
