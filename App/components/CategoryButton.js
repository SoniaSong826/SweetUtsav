import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

function CategoryButton({ title, style, onPress, color = "secondary" }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    margin:5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 1,
    shadowOffset: { width: 2, height: 2 },
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 15,
    color: colors.white,
    paddingVertical:15,
    paddingHorizontal:8,
  },
});

export default CategoryButton;
