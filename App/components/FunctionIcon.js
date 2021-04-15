import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function FunctionIcon({ title, style, iconName, onPress, color = "primary" }) {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.iconContainer} onPress={onPress}>
      <TouchableOpacity
        style={StyleSheet.flatten([
          { backgroundColor: colors[color] },
          styles.iconCircle,
        ])}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name={iconName}
          size={35}
          color={colors.white}
        ></MaterialCommunityIcons>
      </TouchableOpacity>
      <AppText
        style={StyleSheet.flatten([{ color: colors[color] }, styles.title])}
      >
        {title}
      </AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    width: 90,
    height: 76,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop:4,
  },
});
export default FunctionIcon;
