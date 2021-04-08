import React from "react";
import {
  Image,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function CategoriesScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/green_background.jpg")}
    >
      <View style={styles.topBarConatiner}>
        <AppText style={styles.title}>Categories</AppText>
        <TouchableWithoutFeedback
          onPress={() => console.log("back arrow clicked")}
        >
          <Image
            style={styles.backIcon}
            source={require("../assets/arrow-round-back.png")}
          ></Image>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.postRow}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => console.log("dry clicked")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/dry.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => console.log("fridge clicked")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/fridge.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.logoRow}>
            <Image
              style={styles.logo}
              source={require("../assets/icon.png")}
            ></Image>
          </View>
          <View style={styles.postRow}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => console.log("platers clicked")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/platers.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => console.log("snacks clicked")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/snacks.png")}
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
  backIcon: {
    height: 20,
    position: "absolute",
    top: 47,
    left: 30,
  },
  topBarConatiner:{
      alignItems:"center",
      paddingTop:40,
  },
  container: {
    paddingTop:25,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
  },
  postRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    alignContent: "center",
  },
  postView: {
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 3, height: 3 },
  },
  post: {
    width: 171,
    height: 252,
    borderRadius: 8,
  },
  logoRow: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 139,
    height: 152,
  },
  title: {
    color: colors.white,
    fontSize: 25,
  },
});
export default CategoriesScreen;
