import React from "react";
//adb shell input keyevent 82
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

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
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => console.log("Register button clicked")}
          >
            <Image
              style={styles.registerIcon}
              source={require("../assets/account_circle-24px.png")}
            ></Image>
            <Text style={styles.twoText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => console.log("Sign In button clicked")}
          >
            <Image
              style={styles.signInIcon}
              source={require("../assets/login-24px.png")}
            ></Image>
            <Text style={styles.twoText}>Sign in</Text>
          </TouchableOpacity>
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
    bottom: 222,
    alignItems: "center",
  },
  buttonRegister: {
    width: 251,
    height: 51,
    backgroundColor: "#F9A41C",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  buttonSignIn: {
    width: 251,
    top: 22,
    height: 51,
    backgroundColor: "#595959",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  registerIcon: {
    width: 42,
    height: 42,
    marginRight: 27,
  },
  signInIcon: {
    width: 42,
    height: 42,
    marginRight: 27,
  },
  twoText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 25,
    color: "#FFFFFF",
  },
});
export default WelcomeScreen;
