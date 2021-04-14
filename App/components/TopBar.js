import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
import colors from "../config/colors";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppButton from "./AppButton";
import AppText from "./AppText";

function TopBar({ title, leftIcon, cartVisiable = true, color = colors.darkSecondary }) {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  if (cartVisiable) {
    return (
      <View style={styles.bar}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={styles.twoButtons}>
          <TouchableWithoutFeedback
            onPress={() => console.log("left icon clicked")}
          >
            <Image style={styles.leftIcon} source={leftIcon}></Image>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Cart button clicked")}
          >
            <Image
              style={styles.cartIcon}
              source={require("../assets/Icon-ios-cart.png")}
            ></Image>
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
            <Image style={styles.leftIcon} source={leftIcon}></Image>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    height: 85,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    backgroundColor: colors.darkSecondary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  twoButtons: {
    paddingHorizontal: 14,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 2,
  },
  title: {
    position: "absolute",
    color: colors.white,
    fontSize: 22,
    paddingBottom: 12,
  },
  leftIcon: {
    height: 20,
    marginVertical: 12,
  },
  button: {
    height: 40,
    width: 105,
    borderRadius: 10,
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
    fontSize: 15,
    color: colors.white,
  },
});

export default TopBar;
