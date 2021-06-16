import React from "react";
import {
  Image,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CategoriesScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/green_background.jpg")}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.postRow}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() =>
                navigation.navigate("Category Products", {
                  categoryID: 112,
                  categoryName: "Savouries",
                })
              }
            >
              <Image
                style={styles.post}
                source={{
                  uri: "http://carolinesprings.sweetutsav.com.au/wp-content/uploads/2021/06/savouries_link.jpg",
                }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postView}
              onPress={() =>
                navigation.navigate("Category Products", {
                  categoryID: 77,
                  categoryName: "Desserts",
                })
              }
            >
              <Image
                style={styles.post}
                source={{
                  uri: "http://carolinesprings.sweetutsav.com.au/wp-content/uploads/2021/06/desserts_link.jpg",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.postRow}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() =>
                navigation.navigate("Category Products", {
                  categoryID: 78,
                  categoryName: "Sweets",
                })
              }
            >
              <Image
                style={styles.post}
                source={{
                  uri: "http://carolinesprings.sweetutsav.com.au/wp-content/uploads/2021/06/sweets_link.jpg",
                }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postView}
              onPress={() =>
                navigation.navigate("Category Products", {
                  categoryID: 79,
                  categoryName: "Snacks",
                })
              }
            >
              <Image
                style={styles.post}
                source={{
                  uri: "http://carolinesprings.sweetutsav.com.au/wp-content/uploads/2021/06/snacks_link.jpg",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.postRow}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() =>
                navigation.navigate("Category Products", {
                  categoryID: 80,
                  categoryName: "Platters",
                })
              }
            >
              <Image
                style={styles.post}
                source={{
                  uri: "http://carolinesprings.sweetutsav.com.au/wp-content/uploads/2021/06/giftplatters_link.jpg",
                }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postView}
              onPress={() =>
                navigation.navigate("Category Products", {
                  categoryID: 114,
                  categoryName: "Gift Boxes",
                })
              }
            >
              <Image
                style={styles.post}
                source={{
                  uri: "http://carolinesprings.sweetutsav.com.au/wp-content/uploads/2021/06/giftboxes_link.jpg",
                }}
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
  container: {
    paddingVertical: 30,
  },
  postRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth - 50,
    marginHorizontal: 25,
    alignItems: "center",
    marginBottom:15,
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
    width: windowWidth / 2.5,
    height: windowWidth / 1.7,
    borderRadius: 8,
  },
});
export default CategoriesScreen;
