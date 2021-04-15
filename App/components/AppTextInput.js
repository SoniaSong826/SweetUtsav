import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.lightGray}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.text} {...otherProps}></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: "Roboto_400Regular",
    color: colors.darkGray,
  },
});
export default AppTextInput;
