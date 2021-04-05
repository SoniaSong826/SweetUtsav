import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

function AppButton({ title, onPress, color="primary" }) {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    borderRadius: 10,
    marginVertical:10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 25,
    color: colors.white,
  },
});

export default AppButton;
