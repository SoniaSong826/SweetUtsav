import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, height, ...otherProps }) {
  return (
    <View style={[styles.container,{height:height}]}>
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
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    height: 42,
    width: "100%",
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: colors.black,
  },
});
export default AppTextInput;
