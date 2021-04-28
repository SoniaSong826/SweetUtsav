import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationTheme from "../navigation/navigationTheme";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Constants from "expo-constants";
import CartNavigator from "../navigation/CartNavigator";

function TopBar({
  title,
  leftIcon = "arrow-left",
  cartVisiable = true,
  color = colors.darkSecondary,
  navigation,
}) {
  if (cartVisiable) {
    return (
      <View style={styles.bar}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.twoButtons}>
          <TouchableWithoutFeedback
            onPress={() => console.log("left icon clicked")}
          >
            <MaterialCommunityIcons
              style={styles.leftIcon}
              name={leftIcon}
              size={35}
              color={colors.white}
            ></MaterialCommunityIcons>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("My Cart")}
          >
            <Text style={styles.cartText}>My Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.bar}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.twoButtons}>
          <TouchableWithoutFeedback
            onPress={() => console.log("left icon clicked")}
          >
            <MaterialCommunityIcons
              style={styles.leftIcon}
              name={leftIcon}
              size={35}
              color={colors.white}
            ></MaterialCommunityIcons>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    height: Constants.statusBarHeight + 45,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 8,
    flexDirection: "row",
    backgroundColor: colors.secondary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  twoButtons: {
    paddingLeft: 15,
    paddingRight: 5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    color: colors.white,
    fontSize: 22,
    paddingBottom: 12,
  },
  leftIcon: {
    marginLeft: 5,
  },
  button: {
    height: 35,
    width: 95,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: colors.primary,
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  cartText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: colors.white,
  },
});

export default TopBar;
