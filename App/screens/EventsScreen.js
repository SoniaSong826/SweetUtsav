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

import { contact,events } from "../assets/Info.json";
const windowScale = Dimensions.get("window").scale;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function EventsScreen() {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_green_background.jpg")}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.banner}
              source={{
                uri:
                  "https://melbourne.sweetutsav.com.au/wp-content/uploads/2020/07/banner2-1.jpg",
              }}
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
    borderRadius: 7,
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
