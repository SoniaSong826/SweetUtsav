import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

import { aboutUs } from "../assets/Info.json";

const windowWidth = Dimensions.get("window").width;

function AboutUsScreen() {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.banner}
              source={require("../assets/aboutus-banner.png")}
            ></Image>
          </View>
          <AppText style={styles.text}>{aboutUs}</AppText>
          <View style={styles.socialIconContainer}>
            <TouchableOpacity onPress={() => console.log("facebook clicked")}>
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Facebook.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("facebook clicked")}>
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Twitter.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("facebook clicked")}>
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Instagram.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("facebook clicked")}>
              <Image
                source={require("../assets/SocialMediaIcon/LinkedIn.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("facebook clicked")}>
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Youtube.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  text: {
    width: "90%",
    fontSize: 15,
    lineHeight: 20,
    color: colors.black,
    fontFamily: "Roboto_400Regular",
    textAlign: "justify",
    flexWrap: "wrap",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: windowWidth * 0.9,
    height: 140,
    borderRadius: 10,
    marginVertical: 25,
  },
  socialIconContainer: {
    paddingTop: 45,
    paddingBottom:80,
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default AboutUsScreen;
