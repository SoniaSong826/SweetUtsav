import React from "react";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import AppText from "./AppText";

const windowWidth = Dimensions.get("window").width;

function CityPicker({ img, onPress, title, navigation }) {
  return (
    <TouchableOpacity onPress={onPress, navigation}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={img}></Image>
          <AppText style={styles.text}>{title}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    paddingVertical: 10,
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
export default CityPicker;
