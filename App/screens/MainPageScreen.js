import React, { useEffect } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import PostSlides from "../components/PostSlides";
import useLocation from "../hooks/useLocation";
import FunctionMenu from "../components/FunctionMenu";

function MainPage() {
  const location = useLocation();
  console.log(location);
  
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
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
    height: "100%",
  },
});

export default MainPage;
