import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import colors from "../config/colors";
import TopBar from "../components/TopBar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Menu from "../components/Menu";
import PostSlides from "../components/PostSlides";
import FunctionMenu from "../components/FunctionMenu";

function MainPage() {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar leftIcon="map-marker" title={"Sweet UTSAV"}></TopBar>
      <FunctionMenu style={styles.functionMenu}></FunctionMenu>
      <PostSlides></PostSlides>
      <Menu></Menu>
      
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
    height:"100%",
  },
});

export default MainPage;
