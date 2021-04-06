import React from "react";
import { SafeAreaView, View,StyleSheet,ImageBackground } from "react-native";
import Menu from "../components/Menu";
import colors from "../config/colors";

function AllProducts(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <Menu></Menu>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
    backGround: {
    flex: 1,
    alignItems: "center",
  },
})

export default AllProducts;
