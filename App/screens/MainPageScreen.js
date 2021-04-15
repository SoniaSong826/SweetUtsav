import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import TopBar from "../components/TopBar";
import AppButton from "../components/AppButton";
import Menu from "../components/Menu";
import PostSlides from "../components/PostSlides";
import FunctionMenu from "../components/FunctionMenu";

function MainPage() {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar title={"Sweet UTSAV"}></TopBar>
      <FunctionMenu style={styles.functionMenu}></FunctionMenu>
      <View><PostSlides></PostSlides></View>
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
