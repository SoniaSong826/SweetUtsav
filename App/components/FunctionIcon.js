import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppText from "./AppText";

function FunctionIcon({ title, style, image, onPress, color = "primary" }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity>
      <View style={styles.iconContainer} onPress={onPress}>
        <Image style={styles.icon} source={image}></Image>
        <AppText style={(styles.title, { color: colors[color] })}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    width: 90,
    height: 76,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {
    width: 55,
    height: 55,
    marginBottom:4,
  },
});
export default FunctionIcon;
