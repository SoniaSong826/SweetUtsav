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
import TopBar from "../components/TopBar";
import { contact,events } from "../assets/Info.json";
const windowScale = Dimensions.get("window").scale;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function EventsScreen() {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar
        title="Events"
        leftIcon={require("../assets/arrow-round-back.png")}
        cartVisiable={false}
      ></TopBar>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.banner}
              source={require("../assets/Eventbanner.jpg")}
            ></Image>
          </View>
          <AppText style={styles.text}>{events}</AppText>
          <AppText style={styles.textEmphasis}>{contact}</AppText>
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
  textEmphasis:{
    marginTop:30,
    width: "90%",
    fontSize: 20,
    textDecorationLine: 'underline',
    lineHeight: 25,
    textAlign: "justify",
    flexWrap: "wrap",
  }
});

export default EventsScreen;
