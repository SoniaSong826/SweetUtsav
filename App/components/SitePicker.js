import React from "react";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function SitePicker({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.innerContainer}>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 10,
    backgroundColor:colors.primary,
    paddingVertical: 5,
    margin:5,
  },
  text: {
    fontSize: 14,
    color:colors.white,
    fontFamily: "Roboto_500Medium",
  },
});
export default SitePicker;
