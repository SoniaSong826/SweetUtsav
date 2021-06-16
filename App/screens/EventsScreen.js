import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ListItemSeparator from "../components/ListItemSeparator";

const windowScale = Dimensions.get("window").scale;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function EventsScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://carolinesprings.sweetutsav.com.au/wp-content/uploads/2021/06/e53e3dd2783eb80a5aa1f92d78f3603-e1623825342693.png",
          }}
        ></Image>
        <AppText style={styles.textEmphasisGreen}>Franchise</AppText>
        <AppText style={styles.text}>
          Thank you for your interest in joining the "Sweet Utsav Family"
        </AppText>
        <AppButton
          onPress={() => navigation.navigate("Franchise Apply")}
          color="secondary"
          title={"Franchise Apply"}
        ></AppButton>
        <ListItemSeparator></ListItemSeparator>
        <AppText style={styles.textEmphasisOrange}>Career</AppText>
        <AppText style={styles.text}>
          We require full time/ part time/ casual chefs cook pastry cooker
          bakers trainee apprentices. For our resturants in different locations.
        </AppText>
        <AppButton
          onPress={() => navigation.navigate("Career Apply")}
          title={"Career Apply"}
        >
          Complete Application
        </AppButton>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: "Roboto_400Regular",
    color: colors.black,
    textAlign: "justify",
    flexWrap: "wrap",
  },
  textEmphasisGreen: {
    marginTop: 20,
    fontSize: 25,
    lineHeight: 25,
    textAlign: "justify",
    flexWrap: "wrap",
    color: colors.secondary,
  },
  textEmphasisOrange: {
    marginTop: 30,
    fontSize: 25,
    lineHeight: 25,
    textAlign: "justify",
    flexWrap: "wrap",
  },
  banner: {
    width: windowWidth * 0.9,
    height: 70,
    marginVertical: 15,
  },
});

export default EventsScreen;
