import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import "../assets/fonts/FontsFree-Net-Atlantica-Text-trial.ttf";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { View } from "react-native";

function LogoTitle() {
  let [fontsLoaded] = useFonts({
    Atlantica: require("../assets/fonts/FontsFree-Net-Atlantica-Text-trial.ttf"),
    BodoniModa: require("../assets/fonts/BodoniModa_28pt-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textFirst}>Sweet UTSAV</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textFirst: {
    fontSize: 30,
    fontFamily: "Atlantica",
    color: colors.white,
  },
});
export default LogoTitle;
