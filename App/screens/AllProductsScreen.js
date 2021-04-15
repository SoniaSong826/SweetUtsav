import React from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import colors from "../config/colors";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import Menu from "../components/Menu";

function AllProductsScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar
        title="All Products"
      ></TopBar>
      <Menu></Menu>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  flatlist: {
    flexWrap: "wrap",
  },
  content: {
    alignSelf: "flex-start",
  },
});

export default AllProductsScreen;
