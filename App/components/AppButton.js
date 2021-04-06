import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";

function AppButton({ title, onPress, color="primary" }) {
    let [fontsLoaded] = useFonts({
        Roboto_700Bold,
      });
      
  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 3, height: 3 },
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    color: colors.white,
  },
});

export default AppButton;
