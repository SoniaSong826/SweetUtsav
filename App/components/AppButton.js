import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppButton({
  title,
  style,
  onPress,
  icon,
  icon_color = "white",
  icon_size,
  color = "primary",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      {icon ? (
        <View style={styles.iconwithtext}>
          <MaterialCommunityIcons
            name={icon}
            size={icon_size}
            color={colors[icon_color]}
          ></MaterialCommunityIcons>
          <AppText style={styles.icontext}>{title}</AppText>
        </View>
      ) : (
        <AppText style={styles.text}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    minWidth: 250,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 },
  },
  iconwithtext: {
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "row",
  },
  icontext: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    color: colors.white,
    paddingHorizontal:10,
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    color: colors.white,
  },
});

export default AppButton;
