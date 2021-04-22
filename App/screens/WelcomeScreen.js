import React from "react";
//adb shell input keyevent 82
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/green_background.jpg")}
    >
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/icon.png")}
        ></Image>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Register"
          onPress={() => console.log("Register button clicked")}
        ></AppButton>
        <AppButton
          title="Sign In"
          color="darkGray"
          onPress={() => console.log("Sign In button clicked")}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    top: 140,
    position: "absolute",
  },
  icon: {
    height: 240,
    width: 220,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 90,
    alignItems: "center",
  },

});
export default WelcomeScreen;
