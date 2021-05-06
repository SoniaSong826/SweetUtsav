import React, { useEffect } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";

import Menu from "../components/Menu";
import MenuWoo from '../components/MenuWoo';
import PostSlides from "../components/PostSlides";
import useLocation from "../hooks/useLocation";
import FunctionMenu from "../components/FunctionMenu";

function MainPageScreen({ navigation }) {
  const location = useLocation();

  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <FunctionMenu navigation={navigation}></FunctionMenu>
      <PostSlides />
      <MenuWoo searchBarVisible={false} categoryVisible={false} category={95} navigation={navigation} />
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

export default MainPageScreen;
